import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'

const baseURL = process.env.QA_BASE_URL ?? 'http://127.0.0.1:4173'
const output = 'qa-artifacts'

await mkdir(output, { recursive: true })

function assert(condition, message) {
  if (!condition) throw new Error(`QA assertion failed: ${message}`)
}

async function ready(page) {
  await page.goto(baseURL, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts?.ready)
  await page.waitForTimeout(250)
}

const browser = await chromium.launch({ headless: true })

try {
  // Desktop canonical viewport.
  {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } })
    const page = await context.newPage()
    await ready(page)

    const firstManifestId = await page.locator('.manifest-row').first().locator('.manifest-row__main strong').textContent()
    const focusId = await page.locator('.focus-header h1').textContent()
    const factorTotal = await page.locator('.factor-total').textContent()
    const claimText = await page.locator('.exposure-block small').textContent()

    assert(firstManifestId?.trim() === 'SHPM-5687', 'hero shipment must rank first in the manifest')
    assert(focusId?.trim() === 'SHPM-5687', 'hero shipment must be the default focus shipment')
    assert(factorTotal?.replace(/\s/g, '') === '82/100', 'factor contributions must reconcile to 82/100')
    assert(claimText?.toLowerCase().includes('not a probability'), 'non-probability claim boundary must be visible')

    await page.screenshot({ path: `${output}/desktop-1440x900.png` })

    // Keyboard/focus state on a manifest row.
    const secondRow = page.locator('.manifest-row').nth(1)
    await secondRow.focus()
    const isFocused = await secondRow.evaluate((node) => node === document.activeElement)
    assert(isFocused, 'manifest rows must accept keyboard focus')
    await page.screenshot({ path: `${output}/desktop-keyboard-focus.png` })

    // Select another shipment and verify state propagation.
    const alternateId = await secondRow.locator('.manifest-row__main strong').textContent()
    await secondRow.click()
    await page.waitForTimeout(500)
    const alternateFocusId = await page.locator('.focus-header h1').textContent()
    assert(alternateFocusId?.trim() === alternateId?.trim(), 'selected shipment must propagate into the focus workspace')
    await page.screenshot({ path: `${output}/desktop-alternate-shipment.png` })

    // Human review state.
    await page.locator('.button--primary').click()
    await page.waitForTimeout(250)
    const reviewHeading = await page.locator('.review-panel h2').textContent()
    assert(reviewHeading?.trim() === 'Escalated for review', 'human escalation action must produce a visible review state')
    await page.screenshot({ path: `${output}/desktop-escalated-review.png` })

    await context.close()
  }

  // Tablet sequential behavior.
  {
    const context = await browser.newContext({ viewport: { width: 900, height: 1100 } })
    const page = await context.newPage()
    await ready(page)
    const manifestBox = await page.locator('.manifest').boundingBox()
    const workspaceBox = await page.locator('.workspace').boundingBox()
    assert(Boolean(manifestBox && workspaceBox && workspaceBox.y > manifestBox.y), 'tablet layout must become sequential rather than compressing the desktop grid')
    await page.screenshot({ path: `${output}/tablet-900x1100.png`, fullPage: true })
    await context.close()
  }

  // Mobile full-page review flow.
  {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } })
    const page = await context.newPage()
    await ready(page)
    const firstManifestId = await page.locator('.manifest-row').first().locator('.manifest-row__main strong').textContent()
    assert(firstManifestId?.trim() === 'SHPM-5687', 'mobile priority manifest must preserve the hero shipment as rank one')
    await page.screenshot({ path: `${output}/mobile-390x844.png`, fullPage: true })
    await context.close()
  }

  // Reduced-motion preference must still expose a complete understandable state.
  {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' })
    const page = await context.newPage()
    await ready(page)
    const visibleSegments = await page.locator('[data-corridor-segment]:visible').count()
    assert(visibleSegments === 5, 'reduced-motion rendering must expose all five corridor segments')
    await page.screenshot({ path: `${output}/desktop-reduced-motion.png` })
    await context.close()
  }

  console.log('Rendered QA assertions passed.')
} finally {
  await browser.close()
}
