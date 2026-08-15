import type { ExposureBand, PublicContext, RiskFactor, RouteSegment, Shipment } from '../types'

const carriers = ['RoadWay Logistics', 'Northstar Freight', 'Prairie Relay', 'Atlas Intermodal', 'HarborLine Transport', 'Meridian Cargo']
const commodities = ['Electronics', 'Copper coils', 'Food & beverage', 'Industrial equipment', 'Enterprise computing', 'Apparel']
const origins = ['Houston, TX', 'Los Angeles, CA', 'Savannah, GA', 'Miami, FL', 'Seattle, WA', 'Oakland, CA', 'Chicago, IL', 'Newark, NJ']
const destinations = ['Toronto, ON', 'Chicago, IL', 'Boston, MA', 'Dallas, TX', 'Atlanta, GA', 'Phoenix, AZ', 'Montreal, QC', 'Denver, CO']

const factorMeta = [
  ['cargo-value', 'Cargo value', 25, 'VALUE-HIGH'],
  ['geography', 'Geographic context', 20, 'RC-104'],
  ['dwell', 'Dwell / stop duration', 15, 'DWELL-2H+'],
  ['commodity', 'Commodity context', 15, 'COMMODITY-ELEV'],
  ['timing', 'Timing', 10, 'WEEKEND-WINDOW'],
  ['verification', 'Carrier verification', 10, 'VERIFY-PENDING'],
  ['public-context', 'Recent public context', 5, 'PUBLIC-TREND'],
] as const

function bandFor(score: number): ExposureBand {
  if (score >= 70) return 'priority'
  if (score >= 50) return 'elevated'
  if (score >= 30) return 'watch'
  return 'routine'
}

function makeFactors(seed: number): RiskFactor[] {
  const caps = [25, 20, 15, 15, 10, 10, 5]
  const raw = [
    7 + ((seed * 7) % 15),
    5 + ((seed * 11) % 16),
    3 + ((seed * 5) % 13),
    4 + ((seed * 3) % 12),
    2 + ((seed * 7) % 9),
    2 + ((seed * 4) % 9),
    1 + ((seed * 2) % 5),
  ]
  return factorMeta.map(([key, label, max, code], index) => {
    const points = Math.min(raw[index], caps[index])
    return {
      key,
      label,
      points,
      max,
      reasonCode: points / max >= 0.65 ? code : undefined,
      explanation: points / max >= 0.65 ? `${label} materially contributes to the current review priority.` : `${label} is present but not a dominant driver.`,
    }
  })
}

function makeSegments(seed: number, origin: string, destination: string): RouteSegment[] {
  const elevated = seed % 3 === 0
  const critical = seed % 5 === 0
  return [
    { id: `seg-${seed}-1`, mode: 'truck', label: 'Origin truck', location: origin, start: 'May 12 06:00', end: 'May 12 12:00', exposure: 'routine', reasonCodes: [] },
    { id: `seg-${seed}-2`, mode: 'rail-yard', label: 'Transfer yard', location: 'Regional transfer', start: 'May 12 12:00', end: 'May 13 00:00', exposure: elevated ? 'elevated' : 'active', reasonCodes: elevated ? ['COMMODITY-ELEV'] : [] },
    { id: `seg-${seed}-3`, mode: 'secure-dwell', label: 'Dwell window', location: seed % 2 ? 'Dallas, TX area' : 'Memphis, TN area', start: 'May 13 18:00', end: 'May 14 06:00', exposure: critical ? 'critical' : 'elevated', reasonCodes: critical ? ['RC-104', 'DWELL-2H+'] : ['DWELL-2H+'], note: 'Planned overnight dwell; secure-parking confirmation required.' },
    { id: `seg-${seed}-4`, mode: 'terminal', label: 'Linehaul transfer', location: 'Intermodal transfer', start: 'May 14 06:00', end: 'May 14 18:00', exposure: 'active', reasonCodes: [] },
    { id: `seg-${seed}-5`, mode: 'final-mile', label: 'Final mile', location: destination, start: 'May 15 06:00', end: 'May 15 14:00', exposure: 'routine', reasonCodes: [] },
  ]
}

function makeContext(seed: number): PublicContext {
  return {
    region: seed % 2 ? 'Dallas area' : 'Central corridor',
    period: 'Last 7 days · public aggregate context',
    incidents: 9 + ((seed * 7) % 19),
    incidentDeltaPct: -4 + ((seed * 8) % 36),
    estimatedValueUsd: 650000 + ((seed * 187000) % 1450000),
    valueDeltaPct: 3 + ((seed * 9) % 44),
    topCommodity: commodities[seed % commodities.length],
    commoditySharePct: 18 + ((seed * 5) % 21),
    trend: seed % 4 === 0 ? 'stable' : seed % 3 === 0 ? 'declining' : 'rising',
  }
}

function syntheticShipment(seed: number): Shipment {
  const factors = makeFactors(seed)
  const exposureIndex = factors.reduce((sum, factor) => sum + factor.points, 0)
  const origin = origins[seed % origins.length]
  const destination = destinations[(seed + 2) % destinations.length]
  const verification: Shipment['carrierVerification'] = seed % 6 === 0 ? 'gap' : seed % 3 === 0 ? 'pending' : 'verified'
  return {
    id: `SHPM-${String(5400 + seed * 37).padStart(4, '0')}`,
    origin,
    destination,
    commodity: commodities[seed % commodities.length],
    equipment: seed % 4 === 0 ? "53' Dry Van" : seed % 3 === 0 ? 'Intermodal container' : 'Truckload',
    cargoValueUsd: 92000 + seed * 11750,
    carrier: carriers[seed % carriers.length],
    carrierVerification: verification,
    departure: `May ${11 + (seed % 4)}, 2026 · 06:00`,
    eta: `May ${14 + (seed % 5)}, 2026 · 14:00`,
    status: seed % 5 === 0 ? 'dwell' : seed % 2 === 0 ? 'planned' : 'in-transit',
    exposureIndex,
    band: bandFor(exposureIndex),
    reviewState: seed % 7 === 0 ? 'reviewed' : seed % 11 === 0 ? 'escalated' : 'pending',
    factors,
    segments: makeSegments(seed, origin, destination),
    context: makeContext(seed),
    plainLanguageSummary: `This synthetic shipment is prioritized because several exposure factors overlap across its route and timing. The index is a transparent review aid, not a theft probability.`,
    recommendedAction: verification === 'verified' ? 'Review planned dwell and monitoring priority.' : 'Hold for carrier verification and review the dwell plan.',
    mitigatingCondition: verification === 'verified' ? 'Carrier verification is complete.' : 'Destination handoff is already confirmed.',
  }
}

const heroFactors: RiskFactor[] = [
  { key: 'cargo-value', label: 'Cargo value', points: 21, max: 25, reasonCode: 'VALUE-HIGH', explanation: 'High-value electronics increase the financial exposure of this movement.' },
  { key: 'geography', label: 'Geographic context', points: 17, max: 20, reasonCode: 'RC-104', explanation: 'The planned dwell overlaps an elevated public aggregate context in the Dallas area.' },
  { key: 'dwell', label: 'Dwell / stop duration', points: 12, max: 15, reasonCode: 'DWELL-2H+', explanation: 'An extended overnight dwell concentrates exposure in one operational window.' },
  { key: 'commodity', label: 'Commodity context', points: 10, max: 15, reasonCode: 'COMMODITY-ELEV', explanation: 'Electronics are elevated in the public aggregate commodity context.' },
  { key: 'timing', label: 'Timing', points: 7, max: 10, reasonCode: 'WEEKEND-WINDOW', explanation: 'The route timing creates a lower-visibility overnight review window.' },
  { key: 'verification', label: 'Carrier verification', points: 10, max: 10, reasonCode: 'VERIFY-PENDING', explanation: 'One carrier-verification step remains unresolved before the dwell window.' },
  { key: 'public-context', label: 'Recent public context', points: 5, max: 5, reasonCode: 'PUBLIC-TREND', explanation: 'Recent public aggregate context is elevated; it does not establish shipment-level probability.' },
]

const hero: Shipment = {
  id: 'SHPM-5687',
  origin: 'Houston, TX',
  destination: 'Toronto, ON',
  commodity: 'Electronics',
  equipment: "53' Dry Van",
  cargoValueUsd: 248500,
  carrier: 'RoadWay Logistics',
  carrierVerification: 'pending',
  departure: 'May 12, 2026 · 06:00',
  eta: 'May 15, 2026 · 09:00',
  status: 'in-transit',
  exposureIndex: 82,
  band: 'priority',
  reviewState: 'pending',
  factors: heroFactors,
  segments: [
    { id: 'hero-1', mode: 'truck', label: 'Origin truck', location: 'Houston, TX', start: 'May 12 · 06:00', end: 'May 12 · 16:00', exposure: 'routine', reasonCodes: [] },
    { id: 'hero-2', mode: 'rail-yard', label: 'Transfer yard', location: 'North Texas transfer', start: 'May 12 · 16:00', end: 'May 13 · 18:00', exposure: 'active', reasonCodes: ['COMMODITY-ELEV'] },
    { id: 'hero-3', mode: 'secure-dwell', label: 'Critical dwell', location: 'Dallas, TX area', start: 'May 13 · 18:00', end: 'May 14 · 06:00', exposure: 'critical', reasonCodes: ['RC-104', 'DWELL-2H+', 'VERIFY-PENDING'], note: 'Extended overnight dwell and unresolved carrier verification overlap here.' },
    { id: 'hero-4', mode: 'border', label: 'Border handoff', location: 'Detroit–Windsor corridor', start: 'May 14 · 18:00', end: 'May 15 · 01:00', exposure: 'elevated', reasonCodes: ['VALUE-HIGH'] },
    { id: 'hero-5', mode: 'final-mile', label: 'Final mile', location: 'Toronto, ON', start: 'May 15 · 01:00', end: 'May 15 · 09:00', exposure: 'routine', reasonCodes: [] },
  ],
  context: {
    region: 'Dallas area',
    period: 'Last 7 days · public aggregate context',
    incidents: 23,
    incidentDeltaPct: 28,
    estimatedValueUsd: 1700000,
    valueDeltaPct: 41,
    topCommodity: 'Electronics',
    commoditySharePct: 32,
    trend: 'rising',
  },
  plainLanguageSummary: 'Priority review because high cargo value, an extended overnight dwell window and unresolved carrier verification concentrate during the same route segment. Public aggregate context is elevated, but does not establish shipment-level theft probability.',
  recommendedAction: 'Hold for carrier verification, confirm secure parking, then recheck in 12 hours.',
  mitigatingCondition: 'Destination handoff and final-mile appointment are already confirmed.',
}

export const shipments: Shipment[] = [hero, ...Array.from({ length: 23 }, (_, index) => syntheticShipment(index + 1))]
  .sort((a, b) => b.exposureIndex - a.exposureIndex)
