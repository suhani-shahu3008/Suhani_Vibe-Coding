import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NavigationBarMenu } from './NavigationBarMenu';

const meta: Meta<typeof NavigationBarMenu> = {
  title: 'Components/Navigation bar/Navigation bar Menu',
  component: NavigationBarMenu,
  parameters: {
    docs: {
      description: {
        component: '# Navigation bar Menu\nPreserved layer: `Navigation bar Menu` (COMPONENT_SET: `36:3500`).\n\n| Property | Options | Description |\n| :--- | :--- | :--- |\n| **Type** | `Collapsed`, `Expanded` | Expansion variant |\n| **Menu Type** | `Menu`, `Sub Menu` | Hierarchy level |',
      },
    },
  },
  argTypes: {
    type: { control: 'radio', options: ['Expanded', 'Collapsed'] },
    menuType: { control: 'radio', options: ['Menu', 'Sub Menu'] },
    state: { control: 'select', options: ['Default', 'Hovered', 'Focused', 'Pressed', 'Disabled'] },
    label: { control: 'text' },
    active: { control: 'boolean' },
  },
  args: {
    type: 'Expanded',
    menuType: 'Menu',
    state: 'Default',
    label: 'Overview',
    iconName: 'Layers',
    active: false,
  },
};

export default meta;
type Story = StoryObj<typeof NavigationBarMenu>;

export const Default: Story = {};

export const ActiveState: Story = {
  args: {
    active: true,
  },
};
