export type ExposureBand = 'routine' | 'watch' | 'elevated' | 'priority'
export type ReviewState = 'pending' | 'reviewed' | 'escalated'
export type SegmentMode = 'truck' | 'rail-yard' | 'terminal' | 'secure-dwell' | 'border' | 'final-mile'

export interface RiskFactor {
  key: string
  label: string
  points: number
  max: number
  reasonCode?: string
  explanation: string
}

export interface RouteSegment {
  id: string
  mode: SegmentMode
  label: string
  location: string
  start: string
  end: string
  exposure: 'routine' | 'active' | 'elevated' | 'critical'
  reasonCodes: string[]
  note?: string
}

export interface PublicContext {
  region: string
  period: string
  incidents: number
  incidentDeltaPct: number
  estimatedValueUsd: number
  valueDeltaPct: number
  topCommodity: string
  commoditySharePct: number
  trend: 'rising' | 'stable' | 'declining'
}

export interface Shipment {
  id: string
  origin: string
  destination: string
  commodity: string
  equipment: string
  cargoValueUsd: number
  carrier: string
  carrierVerification: 'verified' | 'pending' | 'gap'
  departure: string
  eta: string
  status: 'planned' | 'in-transit' | 'dwell'
  exposureIndex: number
  band: ExposureBand
  reviewState: ReviewState
  factors: RiskFactor[]
  segments: RouteSegment[]
  context: PublicContext
  plainLanguageSummary: string
  recommendedAction: string
  mitigatingCondition: string
}
