import React from 'react';
import { Icons } from '../Icons/Icons';
import './Maps.css';

export interface MapsProps {
  size?: 'Compact' | 'Standard' | 'Wide';
  interactive?: boolean;
}

export const Maps: React.FC<MapsProps> = ({
  size = 'Standard',
  interactive = true,
}) => {
  return (
    <div className={`uedp-maps uedp-maps--${size.toLowerCase()}`}>
      <svg className="uedp-maps__svg" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="450" fill="#0f172a" rx="16" />
        {/* Map grid lines */}
        <path d="M50 0V450 M150 0V450 M250 0V450 M350 0V450 M450 0V450 M550 0V450 M650 0V450 M750 0V450" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M0 50H800 M0 150H800 M0 250H800 M0 350H800" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />

        {/* City paths & territories */}
        <path d="M80 180 Q 220 80 340 160 T 580 140 T 720 220" stroke="#334155" strokeWidth="18" strokeLinecap="round" opacity="0.4" />
        <path d="M120 320 Q 300 240 460 300 T 680 260" stroke="#334155" strokeWidth="14" strokeLinecap="round" opacity="0.4" />

        {/* Active Route 1 (Teal) */}
        <path d="M100 200 Q 240 110 360 180 T 560 160" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" fill="none" />
        {/* Active Route 2 (Indigo) */}
        <path d="M160 320 Q 320 260 480 310 T 640 240" stroke="#6366f1" strokeWidth="4" strokeLinecap="round" fill="none" />
        {/* Delayed Route 3 (Amber Dash) */}
        <path d="M360 180 L 460 260" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" fill="none" />

        {/* Fleet Vehicles Markers */}
        <g transform="translate(360, 180)">
          <circle r="14" fill="#06b6d4" fillOpacity="0.2" />
          <circle r="8" fill="#06b6d4" />
          <circle r="3" fill="#ffffff" />
        </g>
        <g transform="translate(560, 160)">
          <circle r="14" fill="#10b981" fillOpacity="0.2" />
          <circle r="8" fill="#10b981" />
          <circle r="3" fill="#ffffff" />
        </g>
        <g transform="translate(460, 260)">
          <circle r="14" fill="#f59e0b" fillOpacity="0.2" />
          <circle r="8" fill="#f59e0b" />
          <circle r="3" fill="#ffffff" />
        </g>
        <g transform="translate(160, 320)">
          <circle r="14" fill="#6366f1" fillOpacity="0.2" />
          <circle r="8" fill="#6366f1" />
          <circle r="3" fill="#ffffff" />
        </g>
      </svg>

      {/* Floating Control Overlay */}
      {interactive && (
        <div className="uedp-maps__controls">
          <button className="uedp-maps__btn" type="button" title="Zoom In">
            <Icons name="Add" size={16} mode="Dark" />
          </button>
          <button className="uedp-maps__btn" type="button" title="Zoom Out">
            <Icons name="Minus" size={16} mode="Dark" />
          </button>
          <button className="uedp-maps__btn" type="button" title="Center Fleet">
            <Icons name="Location filled" size={16} mode="Dark" />
          </button>
        </div>
      )}

      {/* Map Legend */}
      <div className="uedp-maps__legend">
        <div className="uedp-maps__legend-item">
          <span className="uedp-maps__dot uedp-maps__dot--teal" />
          <span>Active Route #1</span>
        </div>
        <div className="uedp-maps__legend-item">
          <span className="uedp-maps__dot uedp-maps__dot--emerald" />
          <span>Delivered</span>
        </div>
        <div className="uedp-maps__legend-item">
          <span className="uedp-maps__dot uedp-maps__dot--amber" />
          <span>Delay Alert</span>
        </div>
      </div>
    </div>
  );
};
