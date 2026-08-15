import { useMemo, useState } from 'react'
import {
  AlertTriangle,
  Box,
  CheckCircle2,
  Clock3,
  Container,
  FileCheck2,
  MapPin,
  RailSymbol,
  Route,
  ShieldCheck,
  Truck,
} from 'lucide-react'
import { shipments } from './data/shipments'
import type { ExposureBand, ReviewState, RouteSegment, Shipment } from './types'

const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

const bandLabel: Record<ExposureBand, string> = {
  routine: 'Routine',
  watch: 'Watch',
  elevated: 'Elevated',
  priority: 'Priority review',
}

function SegmentIcon({ mode }: { mode: RouteSegment['mode'] }) {
  const props = { size: 18, strokeWidth: 1.7, 'aria-hidden': true as const }
  if (mode === 'rail-yard') return <RailSymbol {...props} />
  if (mode === 'terminal') return <Container {...props} />
  if (mode === 'secure-dwell') return <Clock3 {...props} />
  if (mode === 'border') return <ShieldCheck {...props} />
  if (mode === 'final-mile') return <MapPin {...props} />
  return <Truck {...props} />
}

function ReviewQueue({ selected, onSelect, states }: { selected: string; onSelect: (id: string) => void; states: Record<string, ReviewState> }) {
  return (
    <aside className="manifest" aria-label="Ranked synthetic shipment manifest">
      <div className="manifest__head">
        <div>
          <p className="eyebrow">Review manifest</p>
          <h2>Priority queue</h2>
        </div>
        <span className="mono manifest__count">24</span>
      </div>
      <div className="manifest__sort">Sorted by exposure index · high → low</div>
      <div className="manifest__rows">
        {shipments.map((shipment, index) => {
          const isSelected = selected === shipment.id
          const state = states[shipment.id] ?? shipment.reviewState
          return (
            <button
              className={`manifest-row ${isSelected ? 'is-selected' : ''}`}
              key={shipment.id}
              onClick={() => onSelect(shipment.id)}
              aria-pressed={isSelected}
            >
              <span className="manifest-row__rank mono">{String(index + 1).padStart(2, '0')}</span>
              <span className="manifest-row__main">
                <strong className="mono">{shipment.id}</strong>
                <small>{shipment.origin} → {shipment.destination}</small>
                <span className="manifest-row__meta">{shipment.commodity} · {state}</span>
              </span>
              <span className={`score score--${shipment.band}`}>
                <strong>{shipment.exposureIndex}</strong>
                <small>{bandLabel[shipment.band]}</small>
              </span>
            </button>
          )
        })}
      </div>
    </aside>
  )
}

function FocusHeader({ shipment }: { shipment: Shipment }) {
  return (
    <section className="focus-header surface">
      <div>
        <p className="eyebrow">Focus shipment</p>
        <h1>{shipment.id}</h1>
        <p className="focus-header__route">{shipment.origin} <span>→</span> {shipment.destination}</p>
        <div className="focus-header__facts">
          <span><Truck size={14} /> {shipment.equipment}</span>
          <span><Box size={14} /> {shipment.commodity}</span>
          <span className="mono">{money.format(shipment.cargoValueUsd)}</span>
          <span>{shipment.carrier}</span>
        </div>
      </div>
      <div className="exposure-block">
        <div className={`exposure-block__value exposure-block__value--${shipment.band}`}>{shipment.exposureIndex}<span>/100</span></div>
        <strong>{bandLabel[shipment.band]}</strong>
        <small>Heuristic prioritization index — not a probability of theft.</small>
      </div>
    </section>
  )
}

function RiskCorridor({ shipment }: { shipment: Shipment }) {
  return (
    <section className="corridor surface" aria-labelledby="corridor-title">
      <div className="section-head">
        <div>
          <p className="eyebrow">Primary signature</p>
          <h2 id="corridor-title">Intermodal Risk Corridor</h2>
        </div>
        <div className="corridor__legend" aria-label="Exposure state legend">
          <span><i className="dot dot--routine" /> Routine</span>
          <span><i className="dot dot--active" /> Active</span>
          <span><i className="dot dot--elevated" /> Elevated</span>
          <span><i className="dot dot--critical" /> Critical</span>
        </div>
      </div>

      <div className="corridor__strip" role="list" aria-label="Route and time segments">
        {shipment.segments.map((segment, index) => (
          <div className={`route-module route-module--${segment.exposure}`} key={segment.id} role="listitem">
            <div className="route-module__connector" aria-hidden="true">
              <span />
              {index < shipment.segments.length - 1 && <i />}
            </div>
            <div className="route-module__icon"><SegmentIcon mode={segment.mode} /></div>
            <p className="route-module__mode">{segment.label}</p>
            <strong>{segment.location}</strong>
            <div className="route-module__time mono">{segment.start}<br />→ {segment.end}</div>
            {segment.reasonCodes.length > 0 && (
              <div className="reason-tags">
                {segment.reasonCodes.slice(0, 3).map((code) => <span className="mono" key={code}>{code}</span>)}
              </div>
            )}
            {segment.note && <p className="route-module__note">{segment.note}</p>}
          </div>
        ))}
      </div>

      <div className="corridor__summary">
        <AlertTriangle size={18} />
        <p>{shipment.plainLanguageSummary}</p>
        <span className="mitigation"><CheckCircle2 size={15} /> Mitigation: {shipment.mitigatingCondition}</span>
      </div>
    </section>
  )
}

function FactorBreakdown({ shipment }: { shipment: Shipment }) {
  const topReasonCodes = useMemo(
    () => shipment.factors.filter((factor) => factor.reasonCode).sort((a, b) => b.points / b.max - a.points / a.max).slice(0, 3),
    [shipment],
  )
  return (
    <section className="factor-grid">
      <div className="factor-panel surface">
        <div className="section-head section-head--compact">
          <div><p className="eyebrow">Explainability</p><h2>Exposure breakdown</h2></div>
          <span className="mono factor-total">{shipment.factors.reduce((sum, f) => sum + f.points, 0)} / 100</span>
        </div>
        <div className="factor-list">
          {shipment.factors.map((factor) => (
            <div className="factor-row" key={factor.key}>
              <div className="factor-row__label"><span>{factor.label}</span>{factor.reasonCode && <small className="mono">{factor.reasonCode}</small>}</div>
              <div className="factor-row__bar"><i style={{ width: `${(factor.points / factor.max) * 100}%` }} /></div>
              <div className="mono factor-row__score">{factor.points} / {factor.max}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="reasons surface">
        <p className="eyebrow">Top reason codes</p>
        <h2>Why this is prioritized</h2>
        <div className="reasons__list">
          {topReasonCodes.map((factor) => (
            <article key={factor.key}>
              <span className="reason-badge mono">{factor.reasonCode}</span>
              <p>{factor.explanation}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PublicContextPanel({ shipment }: { shipment: Shipment }) {
  const context = shipment.context
  return (
    <section className="public-context surface">
      <div className="section-head section-head--compact">
        <div><p className="eyebrow eyebrow--context">Public aggregate context</p><h2>{context.region}</h2></div>
        <span className="context-period mono">{context.period}</span>
      </div>
      <div className="context-metrics">
        <div><span>Incidents</span><strong>{context.incidents}</strong><small>{context.incidentDeltaPct >= 0 ? '+' : ''}{context.incidentDeltaPct}% vs prior period</small></div>
        <div><span>Estimated value</span><strong>{money.format(context.estimatedValueUsd)}</strong><small>+{context.valueDeltaPct}% vs prior period</small></div>
        <div><span>Top commodity</span><strong>{context.topCommodity}</strong><small>{context.commoditySharePct}% of aggregate incidents</small></div>
        <div><span>Trend</span><strong className="capitalize">{context.trend}</strong><small>Context only · not shipment evidence</small></div>
      </div>
      <p className="context-note">Public trend context helps frame the review. It does not prove or predict theft for this synthetic shipment.</p>
    </section>
  )
}

function ReviewPanel({ shipment, state, onAction }: { shipment: Shipment; state: ReviewState; onAction: (state: ReviewState) => void }) {
  return (
    <aside className="review-panel surface">
      <p className="eyebrow">Human review outcome</p>
      <h2>{state === 'pending' ? 'Decision remains human' : state === 'escalated' ? 'Escalated for review' : 'Review recorded'}</h2>
      <p>{shipment.recommendedAction}</p>
      <div className="review-panel__verification">
        <FileCheck2 size={18} />
        <div><span>Carrier verification</span><strong className="capitalize">{shipment.carrierVerification}</strong></div>
      </div>
      <div className="review-panel__actions">
        <button className="button button--primary" onClick={() => onAction('escalated')}>Escalate review</button>
        <button className="button button--secondary" onClick={() => onAction('reviewed')}>Mark reviewed</button>
      </div>
      <small className="mono">Data: synthetic · Reviewer action is recorded locally in this prototype.</small>
    </aside>
  )
}

export default function App() {
  const [selectedId, setSelectedId] = useState('SHPM-5687')
  const [reviewStates, setReviewStates] = useState<Record<string, ReviewState>>({})
  const selected = shipments.find((shipment) => shipment.id === selectedId) ?? shipments[0]
  const currentReviewState = reviewStates[selected.id] ?? selected.reviewState

  const setReviewState = (state: ReviewState) => setReviewStates((current) => ({ ...current, [selected.id]: state }))

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-mark"><Container size={20} /><span>CRW</span></div>
        <div className="topbar__title"><strong>Cargo Risk Window</strong><span>Intermodal exposure review</span></div>
        <div className="topbar__meta"><span className="synthetic-pill">Synthetic data</span><span className="mono">15 AUG 2026 · REVIEW DESK</span></div>
      </header>

      <nav className="rail" aria-label="Application navigation">
        <button className="rail__item is-active" aria-label="Review queue"><Route size={19} /><span>Review</span></button>
        <button className="rail__item" aria-label="Shipments"><Truck size={19} /><span>Loads</span></button>
        <button className="rail__item" aria-label="Context"><ShieldCheck size={19} /><span>Context</span></button>
        <div className="rail__spacer" />
        <div className="rail__status"><span className="rail__status-dot" /><small>Prototype</small></div>
      </nav>

      <ReviewQueue selected={selected.id} onSelect={setSelectedId} states={reviewStates} />

      <main className="workspace">
        <FocusHeader shipment={selected} />
        <RiskCorridor shipment={selected} />
        <FactorBreakdown shipment={selected} />
        <PublicContextPanel shipment={selected} />
      </main>

      <ReviewPanel shipment={selected} state={currentReviewState} onAction={setReviewState} />
    </div>
  )
}
