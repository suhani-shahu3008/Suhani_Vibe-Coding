import React from 'react';
import './DelayReasonsCard.css';

export interface DelayReasonSlice {
  label: string;
  percentage: number;
  color: string;
}

const defaultSlices: DelayReasonSlice[] = [
  { label: 'Traffic', percentage: 48, color: '#f59e0b' },
  { label: 'Vehicle Issue', percentage: 24, color: '#ef4444' },
  { label: 'Weather', percentage: 18, color: '#3b82f6' },
  { label: 'Other', percentage: 10, color: '#94a3b8' },
];

export const DelayReasonsCard: React.FC<{ slices?: DelayReasonSlice[] }> = ({
  slices = defaultSlices,
}) => {
  return (
    <div className="uedp-chart-card uedp-delay-reasons">
      <div className="uedp-chart-card__header">
        <h3 className="uedp-chart-card__title">Delay Reasons</h3>
      </div>

      <div className="uedp-delay-reasons__content">
        <div className="uedp-delay-reasons__donut-wrap">
          <svg viewBox="0 0 160 160" className="uedp-delay-reasons__svg">
            <circle cx="80" cy="80" r="60" fill="none" stroke="#f1f5f9" strokeWidth="20" />
            {/* Donut arcs */}
            <circle cx="80" cy="80" r="60" fill="none" stroke="#f59e0b" strokeWidth="20" strokeDasharray="180 377" strokeDashoffset="0" transform="rotate(-90 80 80)" />
            <circle cx="80" cy="80" r="60" fill="none" stroke="#ef4444" strokeWidth="20" strokeDasharray="90 377" strokeDashoffset="-180" transform="rotate(-90 80 80)" />
            <circle cx="80" cy="80" r="60" fill="none" stroke="#3b82f6" strokeWidth="20" strokeDasharray="68 377" strokeDashoffset="-270" transform="rotate(-90 80 80)" />
            <circle cx="80" cy="80" r="60" fill="none" stroke="#94a3b8" strokeWidth="20" strokeDasharray="39 377" strokeDashoffset="-338" transform="rotate(-90 80 80)" />
            <text x="80" y="76" textAnchor="middle" fontSize="18" fontWeight="800" fill="#0f172a">48%</text>
            <text x="80" y="92" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="500">Traffic</text>
          </svg>
        </div>

        <div className="uedp-delay-reasons__legend">
          {slices.map((slice) => (
            <div key={slice.label} className="uedp-delay-reasons__legend-row">
              <div className="uedp-delay-reasons__label-wrap">
                <span className="uedp-delay-reasons__dot" style={{ backgroundColor: slice.color }} />
                <span className="uedp-delay-reasons__label">{slice.label}</span>
              </div>
              <span className="uedp-delay-reasons__pct">{slice.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
