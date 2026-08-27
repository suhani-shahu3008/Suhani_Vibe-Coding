import type { Preview } from '@storybook/react';
import '../src/styles/figma-tokens.css';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'slate-50', value: '#F8FAFC' },
        { name: 'slate-100', value: '#F1F5F9' },
        { name: 'dark', value: '#0F172A' },
      ],
    },
    docs: {
      toc: true,
    },
  },
};

export default preview;
