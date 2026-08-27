import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `# Button — Figma node \`10:166\`

Pixel-perfect implementation of the **Button** COMPONENT_SET extracted from the Uedp-5 Design System.

| Property | Figma Options | Description |
| :--- | :--- | :--- |
| **Type** | \`Primary\`, \`Secondary\` | Filled vs outlined |
| **State** | \`Active\`, \`Hovered\`, \`Focused\`, \`Pressed\`, \`Disabled\` | Interaction states |
| **Shape** | \`Rectangle\` (12px), \`Capsule\` (9999px) | Corner radius |
| **Feedback** | \`Default\`, \`Info\`, \`Warning\`, \`Success\`, \`Error\` | Semantic colours (Primary only) |
| **Size** | \`Small\` (16px/53h), \`Large\` (20px/54h) | Dimensions from Figma |`,
      },
    },
    layout: 'padded',
  },
  argTypes: {
    typeVariant: { control: 'radio', options: ['Primary', 'Secondary'] },
    state: { control: 'select', options: ['Active', 'Hovered', 'Focused', 'Pressed', 'Disabled'] },
    shape: { control: 'radio', options: ['Capsule', 'Rectangle'] },
    feedback: { control: 'select', options: ['Default', 'Info', 'Warning', 'Success', 'Error'] },
    size: { control: 'radio', options: ['Small', 'Large'] },
    showIcon: { control: 'boolean' },
    label: { control: 'text' },
    iconName: { control: 'text' },
  },
  args: {
    typeVariant: 'Primary',
    state: 'Active',
    shape: 'Capsule',
    feedback: 'Default',
    size: 'Large',
    label: 'Button',
    showIcon: false,
    iconName: 'Right Arrow',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/* ── Playground ──────────────────────────────────────── */
export const Playground: Story = {};

/* ── Complete Matrix (matches Figma canvas layout) ───── */
export const AllVariantsMatrix: Story = {
  name: '↳ All States Matrix',
  parameters: { layout: 'fullscreen' },
  render: () => {
    const states = ['Active', 'Hovered', 'Focused', 'Pressed', 'Disabled'] as const;
    const feedbacks = ['Error', 'Warning', 'Success', 'Default'] as const;

    const sectionLabel = (text: string) => (
      <p style={{
        margin: '0 0 12px',
        fontFamily: 'Inter, sans-serif',
        fontSize: 11,
        fontWeight: 700,
        color: '#94a3b8',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
      }}>
        {text}
      </p>
    );

    return (
      <div style={{ padding: '24px', background: '#fff', fontFamily: 'Inter, sans-serif' }}>

        {/* ── TOP: Large button 4-column state matrix ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: '10px',
          marginBottom: '32px',
        }}>
          {states.map((st) => (
            <React.Fragment key={st}>
              {/* Primary Capsule */}
              <Button
                typeVariant="Primary"
                state={st}
                shape="Capsule"
                size="Large"
                label="Button"
                showIcon={false}
                style={{ width: '100%' }}
              />
              {/* Secondary Capsule */}
              <Button
                typeVariant="Secondary"
                state={st}
                shape="Capsule"
                size="Large"
                label="Button"
                showIcon={false}
                style={{ width: '100%' }}
              />
              {/* Primary Rectangle + icon */}
              <Button
                typeVariant="Primary"
                state={st}
                shape="Rectangle"
                size="Large"
                label="Button"
                showIcon={true}
                iconName="Right Arrow"
                style={{ width: '100%' }}
              />
              {/* Secondary Rectangle + icon */}
              <Button
                typeVariant="Secondary"
                state={st}
                shape="Rectangle"
                size="Large"
                label="Button"
                showIcon={true}
                iconName="Right Arrow"
                style={{ width: '100%' }}
              />
            </React.Fragment>
          ))}
        </div>

        {/* ── BOTTOM: Small buttons section ── */}
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-start' }}>

          {/* Col 1: Primary small — all states */}
          <div>
            {sectionLabel('Primary · Small')}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {states.map((st) => (
                <Button
                  key={st}
                  typeVariant="Primary"
                  state={st}
                  shape="Rectangle"
                  size="Small"
                  label="Button"
                  showIcon={true}
                  iconName="Right Arrow"
                />
              ))}
            </div>
          </div>

          {/* Col 2: Primary small — feedback colours */}
          <div>
            {sectionLabel('Feedback · Small')}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {feedbacks.map((fb) => (
                <Button
                  key={fb}
                  typeVariant="Primary"
                  state="Active"
                  shape="Rectangle"
                  size="Small"
                  feedback={fb}
                  label="Button"
                  showIcon={true}
                  iconName="Right Arrow"
                />
              ))}
              <Button
                typeVariant="Primary"
                state="Disabled"
                shape="Rectangle"
                size="Small"
                label="Button"
                showIcon={true}
                iconName="Right Arrow"
              />
            </div>
          </div>

          {/* Col 3: Secondary small — all states */}
          <div>
            {sectionLabel('Secondary · Small')}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {states.map((st) => (
                <Button
                  key={st}
                  typeVariant="Secondary"
                  state={st}
                  shape="Rectangle"
                  size="Small"
                  label="Button"
                  showIcon={true}
                  iconName="Right Arrow"
                />
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Col 4: Feedback large rectangle */}
          <div>
            {sectionLabel('Feedback · Large')}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {feedbacks.map((fb) => (
                <Button
                  key={fb}
                  typeVariant="Primary"
                  state="Active"
                  shape="Rectangle"
                  size="Large"
                  feedback={fb}
                  label="Button"
                  showIcon={true}
                  iconName="Right Arrow"
                  style={{ minWidth: '260px' }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    );
  },
};

/* ── Individual state stories ──────────────────────── */
export const PrimaryActive: Story = {
  name: 'Primary / Active',
  args: { typeVariant: 'Primary', state: 'Active', shape: 'Capsule', size: 'Large', showIcon: false },
};
export const PrimaryHovered: Story = {
  name: 'Primary / Hovered',
  args: { typeVariant: 'Primary', state: 'Hovered', shape: 'Capsule', size: 'Large', showIcon: false },
};
export const PrimaryFocused: Story = {
  name: 'Primary / Focused',
  args: { typeVariant: 'Primary', state: 'Focused', shape: 'Capsule', size: 'Large', showIcon: false },
};
export const PrimaryPressed: Story = {
  name: 'Primary / Pressed',
  args: { typeVariant: 'Primary', state: 'Pressed', shape: 'Capsule', size: 'Large', showIcon: false },
};
export const PrimaryDisabled: Story = {
  name: 'Primary / Disabled',
  args: { typeVariant: 'Primary', state: 'Disabled', shape: 'Capsule', size: 'Large', showIcon: false },
};
export const SecondaryActive: Story = {
  name: 'Secondary / Active',
  args: { typeVariant: 'Secondary', state: 'Active', shape: 'Capsule', size: 'Large', showIcon: false },
};
export const SecondaryDisabled: Story = {
  name: 'Secondary / Disabled',
  args: { typeVariant: 'Secondary', state: 'Disabled', shape: 'Capsule', size: 'Large', showIcon: false },
};
