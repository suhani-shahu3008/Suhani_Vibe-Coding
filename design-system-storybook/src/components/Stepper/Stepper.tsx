import React from 'react';
import { Icons } from '../Icons/Icons';
import './Stepper.css';

export interface StepperProps {
  progress?: 'Step 1' | 'Step 2' | 'Step 3' | 'Step 4' | 'Step 5' | 'Step 6' | 'Step 7';
  steps?: { title: string; subtitle?: string }[];
  activeStep?: number;
}

const defaultSteps = [
  { title: 'Order Placed', subtitle: '10:00 AM' },
  { title: 'Picked & Packed', subtitle: '10:30 AM' },
  { title: 'Fleet Dispatched', subtitle: '11:15 AM' },
  { title: 'In Transit', subtitle: '12:00 PM' },
  { title: 'Out for Delivery', subtitle: '01:45 PM' },
  { title: 'Delivered', subtitle: 'Pending' },
];

export const Stepper: React.FC<StepperProps> = ({
  progress = 'Step 3',
  steps = defaultSteps,
  activeStep,
}) => {
  const stepMap: Record<string, number> = {
    'Step 1': 1,
    'Step 2': 2,
    'Step 3': 3,
    'Step 4': 4,
    'Step 5': 5,
    'Step 6': 6,
    'Step 7': 7,
  };
  const currentStep = activeStep !== undefined ? activeStep : (stepMap[progress] || 3);

  return (
    <div className="uedp-stepper">
      {steps.map((step, idx) => {
        const stepNum = idx + 1;
        const isCompleted = stepNum < currentStep;
        const isCurrent = stepNum === currentStep;
        const isPending = stepNum > currentStep;

        return (
          <div key={idx} className="uedp-stepper__item">
            <div className="uedp-stepper__node-container">
              <div
                className={`uedp-stepper__node ${isCompleted ? 'uedp-stepper__node--completed' : ''} ${isCurrent ? 'uedp-stepper__node--current' : ''} ${isPending ? 'uedp-stepper__node--pending' : ''}`}
              >
                {isCompleted ? (
                  <Icons name="Tick" size={14} color="#ffffff" />
                ) : (
                  <span>{stepNum}</span>
                )}
              </div>
              {idx < steps.length - 1 && (
                <div
                  className={`uedp-stepper__line ${stepNum < currentStep ? 'uedp-stepper__line--completed' : ''}`}
                />
              )}
            </div>
            <div className="uedp-stepper__content">
              <span className="uedp-stepper__title">{step.title}</span>
              {step.subtitle && <span className="uedp-stepper__subtitle">{step.subtitle}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
};
