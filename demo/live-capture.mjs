import { chromium } from 'playwright'
import { mkdir, rename } from 'node:fs/promises'

const baseURL = process.env.DEMO_BASE_URL ?? 'https://cargo-risk-window.vercel.app'
const output = 'demo-artifacts'
const videoDir = `${output}/video-temp`

await mkdir(output, { recursive: true })
await mkdir(videoDir, { recursive: true })

function assert(condition, message) {
  if (!condition) throw new Error(`Demo capture assertion failed: ${message}`)
}

async function pause(page, ms) {
  await page.waitForTimeout(ms)
}

async function focusSection(page, selector) {
  await page.locator(selector).evaluate((node) => node.scrollIntoView({ behavior: 'smooth', block: 'center' }))
  await pause(page, 1100)
}

const browser = await chromium.launch({ headless: true })
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  recordVideo: { dir: videoDir, size: { width: 1440, height: 900 } },
})
const page = await context.newPage()
const video = page.video()

try {
  await page.goto(baseURL, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts?.ready)
  await pause(page, 1200)

  const heroId = await page.locator('.manifest-row').first().locator('.manifest-row__main strong').textContent()
  const focusId = await page.locator('.focus-header h1').textContent()
  const factorTotal = await page.locator('.factor-total').textContent()
  const claimBoundary = await page.locator('.exposure-block small').textContent()
  const checklistLabels = await page.locator('.review-checklist__label').allTextContents()

  assert(heroId?.trim() === 'SHPM-5687', 'SHPM-5687 must rank first')
  assert(focusId?.trim() === 'SHPM-5687', 'SHPM-5687 must be the live focus shipment')
  assert(factorTotal?.replace(/\s/g, '') === '82/100', 'factor breakdown must reconcile to 82/100')
  assert(claimBoundary?.toLowerCase().includes('not a probability'), 'non-probability boundary must be visible')
  assert(checklistLabels.includes('Carrier verification'), 'live Human Review must contain Carrier verification')
  assert(checklistLabels.includes('Dwell plan'), 'live Human Review must contain Dwell plan')
  assert(checklistLabels.includes('Secure parking / handoff'), 'live Human Review must contain Secure parking / handoff')
  assert(checklistLabels.includes('Monitoring priority'), 'live Human Review must contain Monitoring priority')

  // 0–5s — Manifest / priority problem.
  await page.screenshot({ path: `${output}/01-manifest-priority.png` })
  await pause(page, 4200)

  // 5–13s — Re-focus the hero shipment and hold the explicit claim boundary.
  await page.locator('.manifest-row').first().click()
  await pause(page, 900)
  await page.screenshot({ path: `${output}/02-hero-82-non-probability.png` })
  await pause(page, 6200)

  // 13–27s — Intermodal Risk Corridor.
  await focusSection(page, '.corridor')
  await page.screenshot({ path: `${output}/03-risk-corridor.png` })
  await pause(page, 11200)

  // 27–38s — Explainability + top reason codes.
  await focusSection(page, '.factor-grid')
  await page.screenshot({ path: `${output}/04-exposure-breakdown-reasons.png` })
  await pause(page, 7800)

  // Public aggregate context boundary.
  await focusSection(page, '.public-context')
  await page.screenshot({ path: `${output}/05-public-context-boundary.png` })
  await pause(page, 5000)

  // 38–51s — Human Review checklist stays visible as the action authority.
  await page.locator('.review-panel').evaluate((node) => node.scrollIntoView({ behavior: 'smooth', block: 'center' }))
  await pause(page, 1000)
  await page.screenshot({ path: `${output}/06-human-review-checklist.png` })
  await pause(page, 4700)

  await page.locator('.button--primary').click()
  await pause(page, 900)
  const reviewHeading = await page.locator('.review-panel h2').textContent()
  const monitoringState = await page.locator('.review-checklist__item').filter({ hasText: 'Monitoring priority' }).locator('strong').textContent()
  assert(reviewHeading?.trim() === 'Escalated for review', 'live escalation state must be visible')
  assert(monitoringState?.trim() === 'Enhanced', 'Monitoring priority must change to Enhanced after escalation')
  await page.screenshot({ path: `${output}/07-human-escalation.png` })
  await pause(page, 6000)

  // Close with a clean product-wide view.
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
  await pause(page, 1200)
  await page.screenshot({ path: `${output}/08-closing-product-view.png` })
  await pause(page, 3500)

  console.log('Live Gate 6.75 evidence capture assertions passed.')
} finally {
  await context.close()
  if (video) {
    const recordedPath = await video.path()
    await rename(recordedPath, `${output}/cargo-risk-window-live-evidence.webm`)
  }
  await browser.close()
}
