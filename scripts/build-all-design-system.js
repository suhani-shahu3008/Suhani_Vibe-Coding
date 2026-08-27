const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'design-system-storybook', 'src');
const componentsDir = path.join(srcDir, 'components');

function writeComponent(name, files) {
  const dir = path.join(componentsDir, name);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  for (const [filename, content] of Object.entries(files)) {
    fs.writeFileSync(path.join(dir, filename), content.trim() + '\n');
  }
}

// 1. Icons.stories.tsx
writeComponent('Icons', {
  'Icons.stories.tsx': `import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icons, IconName } from './Icons';

const allIcons: IconName[] = [
  'Route', 'Profile 2', 'Cart', 'Truck 2', 'Location filled', 'Call',
  'Upload', 'Delete', 'Edit 2', 'Tick', 'Clock 2', 'Clock', 'Stock up',
  'Right Arrow', 'Left Arrow', 'Up Arrow', 'Down Arrow', 'Search',
  'Settings', 'Filter', 'Notification', 'Download', 'Add', 'Minus',
  'Close', 'Calendar', 'Eye', 'Eye Slash', 'Alert', 'Success', 'Info',
  'Layers', 'Bar Chart', 'Pie Chart', 'Navigation', 'Globe', 'Radio',
  'Sliders', 'More Vertical', 'More Horizontal', 'Refresh', 'Logout',
  'Maximize', 'Minimize', 'Zoom In', 'Zoom Out', 'Lock', 'Unlock',
  'Shield', 'Help', 'Document', 'Mail'
];

const meta: Meta<typeof Icons> = {
  title: 'Components/Iconography/Icons',
  component: Icons,
  parameters: {
    docs: {
      description: {
        component: '# Icons & Iconography\\nPreserved layer: \`Icons\` (COMPONENT_SET: \`23:2644\`) & \`Icons for Instance Swaps\` (FRAME: \`17:679\`).\\n\\n| Property | Type | Default |\\n| :--- | :--- | :--- |\\n| **name** | \`IconName\` | \`Route\` |\\n| **mode** | \`Light\` / \`Dark\` | \`Light\` |\\n| **size** | \`number\` | \`24\` |',
      },
    },
  },
  argTypes: {
    name: {
      control: 'select',
      options: allIcons,
    },
    mode: {
      control: 'radio',
      options: ['Light', 'Dark'],
    },
    size: {
      control: { type: 'range', min: 14, max: 48, step: 2 },
    },
    color: {
      control: 'color',
    },
  },
  args: {
    name: 'Route',
    mode: 'Light',
    size: 24,
  },
};

export default meta;
type Story = StoryObj<typeof Icons>;

export const Default: Story = {};

export const IconGallery: Story = {
  render: (args) => {
    const [search, setSearch] = useState('');
    const filtered = allIcons.filter(i => i.toLowerCase().includes(search.toLowerCase()));

    return (
      <div style={{
        padding: '24px',
        backgroundColor: args.mode === 'Dark' ? 'var(--uedp-slate-900, #0f172a)' : 'var(--uedp-white, #ffffff)',
        color: args.mode === 'Dark' ? '#ffffff' : '#0f172a',
        borderRadius: '12px',
        fontFamily: 'Inter, sans-serif'
      }}>
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: '700' }}>Iconography Showcase ({filtered.length} Icons)</h2>
            <p style={{ fontSize: '13px', opacity: 0.7, marginTop: '4px' }}>Click any icon to inspect</p>
          </div>
          <input
            type="text"
            placeholder="Search icons..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: '1px solid var(--uedp-slate-300, #cbd5e1)',
              fontSize: '14px',
              outline: 'none',
              width: '260px',
              backgroundColor: args.mode === 'Dark' ? '#1e293b' : '#ffffff',
              color: args.mode === 'Dark' ? '#ffffff' : '#0f172a'
            }}
          />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
          gap: '16px'
        }}>
          {filtered.map((iconName) => (
            <div
              key={iconName}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 8px',
                border: '1px solid',
                borderColor: args.mode === 'Dark' ? '#334155' : '#e2e8f0',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                backgroundColor: args.mode === 'Dark' ? '#1e293b' : '#f8fafc'
              }}
            >
              <Icons name={iconName} mode={args.mode} size={args.size || 24} color={args.color} />
              <span style={{ fontSize: '11px', marginTop: '10px', textAlign: 'center', fontWeight: '500' }}>
                {iconName}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
`
});

// 2. Button.stories.tsx
writeComponent('Button', {
  'Button.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: '# Button\\nPreserved layer: \`Button\` (COMPONENT_SET: \`10:166\`).\\n\\n| Property | Options | Description |\\n| :--- | :--- | :--- |\\n| **Type** | \`Primary\`, \`Secondary\` | Brand theme |\\n| **State** | \`Active\`, \`Hovered\`, \`Focused\`, \`Pressed\`, \`Disabled\` | Interaction matrix |\\n| **Shape** | \`Rectangle\`, \`Capsule\` | Corner radius |\\n| **Feedback** | \`Default\`, \`Info\`, \`Warning\`, \`Success\`, \`Error\` | Semantic tokens |\\n| **Size** | \`Small\`, \`Large\` | Dimensions |',
      },
    },
  },
  argTypes: {
    typeVariant: { control: 'radio', options: ['Primary', 'Secondary'] },
    state: { control: 'select', options: ['Active', 'Hovered', 'Focused', 'Pressed', 'Disabled'] },
    shape: { control: 'radio', options: ['Capsule', 'Rectangle'] },
    feedback: { control: 'select', options: ['Default', 'Info', 'Success', 'Warning', 'Error'] },
    size: { control: 'radio', options: ['Small', 'Large'] },
    showIcon: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    typeVariant: 'Primary',
    state: 'Active',
    shape: 'Capsule',
    feedback: 'Default',
    size: 'Large',
    label: 'Button',
    showIcon: true,
    iconName: 'Right Arrow',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    typeVariant: 'Secondary',
  },
};

export const FeedbackStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button feedback="Default" label="Default" />
      <Button feedback="Info" label="Info" iconName="Info" />
      <Button feedback="Success" label="Success" iconName="Success" />
      <Button feedback="Warning" label="Warning" iconName="Alert" />
      <Button feedback="Error" label="Error" iconName="Close" />
    </div>
  ),
};

export const AllVariantsMatrix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button size="Large" shape="Capsule" label="Primary Capsule" />
        <Button size="Small" shape="Capsule" label="Small Capsule" />
        <Button size="Large" shape="Rectangle" label="Primary Rectangle" />
        <Button size="Small" shape="Rectangle" label="Small Rectangle" />
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button typeVariant="Secondary" size="Large" shape="Capsule" label="Secondary Capsule" />
        <Button typeVariant="Secondary" size="Small" shape="Capsule" label="Secondary Small" />
        <Button typeVariant="Secondary" size="Large" shape="Rectangle" label="Secondary Rectangle" />
        <Button typeVariant="Secondary" state="Disabled" label="Disabled Button" />
      </div>
    </div>
  ),
};
`
});

// 3. IconButton.stories.tsx
writeComponent('IconButton', {
  'IconButton.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Buttons/Icon Button',
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: '# Icon Button\\nPreserved layer: \`Icon Button\` (COMPONENT_SET: \`81:8976\`).\\n\\n| Property | Options | Description |\\n| :--- | :--- | :--- |\\n| **State** | \`Default\`, \`Hovered\`, \`Focused\`, \`Pressed\`, \`Disabled\` | Component state |\\n| **Size** | \`Small\` (32px), \`Large\` (44px) | Circular dimensions |',
      },
    },
  },
  argTypes: {
    state: { control: 'select', options: ['Default', 'Hovered', 'Focused', 'Pressed', 'Disabled'] },
    size: { control: 'radio', options: ['Small', 'Large'] },
    variant: { control: 'radio', options: ['secondary', 'primary', 'ghost'] },
    iconName: { control: 'text' },
  },
  args: {
    state: 'Default',
    size: 'Large',
    variant: 'secondary',
    iconName: 'Settings',
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton iconName="Settings" size="Large" />
      <IconButton iconName="Filter" size="Large" />
      <IconButton iconName="Notification" size="Large" />
      <IconButton iconName="Route" size="Small" />
      <IconButton iconName="Truck 2" size="Small" />
      <IconButton iconName="Delete" state="Disabled" size="Large" />
    </div>
  ),
};
`
});

// 4. Pagination.stories.tsx
writeComponent('Pagination', {
  'Pagination.stories.tsx': `import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: '# Pagination\\nPreserved layer: \`Pagination\` (COMPONENT_SET: \`202:180\`).\\n\\n| Property | Options | Description |\\n| :--- | :--- | :--- |\\n| **State** | \`Default\`, \`Hovered\`, \`Focused\`, \`Pressed\`, \`Disabled\` | Interactive state matrix |',
      },
    },
  },
  argTypes: {
    state: { control: 'select', options: ['Default', 'Hovered', 'Focused', 'Pressed', 'Disabled'] },
    currentPage: { control: { type: 'number', min: 1, max: 10 } },
    totalPages: { control: { type: 'number', min: 1, max: 20 } },
  },
  args: {
    state: 'Default',
    currentPage: 1,
    totalPages: 5,
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {};

export const Interactive: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        {...args}
        currentPage={page}
        onPageChange={(p) => setPage(p)}
      />
    );
  },
};
`
});

// 5. PaginationRow.stories.tsx
writeComponent('PaginationRow', {
  'PaginationRow.stories.tsx': `import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PaginationRow } from './PaginationRow';

const meta: Meta<typeof PaginationRow> = {
  title: 'Components/Pagination/Pagination Row',
  component: PaginationRow,
  parameters: {
    docs: {
      description: {
        component: '# Pagination Row\\nPreserved layer: \`Pagination Row\` (COMPONENT: \`202:181\`).\\n\\nFull responsive table pagination footer summary bar.',
      },
    },
  },
  args: {
    totalItems: 48,
    itemsPerPage: 10,
    currentPage: 1,
  },
};

export default meta;
type Story = StoryObj<typeof PaginationRow>;

export const Default: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    return <PaginationRow {...args} currentPage={page} onPageChange={setPage} />;
  },
};
`
});

// 6. NavigationBarMenu.stories.tsx
writeComponent('NavigationBarMenu', {
  'NavigationBarMenu.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NavigationBarMenu } from './NavigationBarMenu';

const meta: Meta<typeof NavigationBarMenu> = {
  title: 'Components/Navigation bar/Navigation bar Menu',
  component: NavigationBarMenu,
  parameters: {
    docs: {
      description: {
        component: '# Navigation bar Menu\\nPreserved layer: \`Navigation bar Menu\` (COMPONENT_SET: \`36:3500\`).\\n\\n| Property | Options | Description |\\n| :--- | :--- | :--- |\\n| **Type** | \`Collapsed\`, \`Expanded\` | Expansion variant |\\n| **Menu Type** | \`Menu\`, \`Sub Menu\` | Hierarchy level |',
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
`
});

// 7. SideNavigationBar.stories.tsx
writeComponent('SideNavigationBar', {
  'SideNavigationBar.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SideNavigationBar } from './SideNavigationBar';

const meta: Meta<typeof SideNavigationBar> = {
  title: 'Components/Navigation bar/Side Navigation Bar',
  component: SideNavigationBar,
  parameters: {
    docs: {
      description: {
        component: '# Side Navigation Bar\\nPreserved layers:\\n- \`Side Navigation Bar - Collapsed\` (\`41:4732\`)\\n- \`Side Navigation Bar - Expanded\` (\`41:4745\`)\\n- \`Side Navigation Bar - Expanded (Sub menu)\` (\`41:4756\`)',
      },
    },
  },
  argTypes: {
    expanded: { control: 'boolean' },
    frame: { control: 'boolean' },
    noOfIcons: { control: { type: 'select', options: [1, 2, 3, 4, 5, 6] } },
    brandTitle: { control: 'text' },
  },
  args: {
    expanded: true,
    frame: true,
    noOfIcons: 6,
    brandTitle: 'VisionSync Fleet',
  },
};

export default meta;
type Story = StoryObj<typeof SideNavigationBar>;

export const Expanded: Story = {};

export const Collapsed: Story = {
  args: {
    expanded: false,
  },
};
`
});

// 8. SearchBar.stories.tsx
writeComponent('SearchBar', {
  'SearchBar.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/Search bar/Search bar',
  component: SearchBar,
  parameters: {
    docs: {
      description: {
        component: '# Search Bar\\nPreserved layers: \`Search bar\` (COMPONENT_SET: \`44:5165\` & \`44:5271\`).\\n\\n| Property | Options | Description |\\n| :--- | :--- | :--- |\\n| **State** | \`Default\`, \`Hovered\`, \`Focused\`, \`Pressed\`, \`Typing\`, \`Filled\`, \`Error\`, \`Disabled\` | Component state matrix |\\n| **variant** | \`standard\`, \`pill\` | Shape style |',
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Hovered', 'Focused', 'Pressed', 'Typing', 'Filled', 'Error', 'Disabled'],
    },
    variant: {
      control: 'radio',
      options: ['standard', 'pill'],
    },
    placeholder: { control: 'text' },
    showFilterButton: { control: 'boolean' },
  },
  args: {
    state: 'Default',
    variant: 'standard',
    placeholder: 'Search fleet, orders, routes...',
    showFilterButton: true,
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};

export const Filled: Story = {
  args: {
    state: 'Filled',
  },
};

export const ErrorState: Story = {
  args: {
    state: 'Error',
    placeholder: 'Invalid search term...',
  },
};
`
});

// 9. Avatars.stories.tsx
writeComponent('Avatars', {
  'Avatars.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatars } from './Avatars';

const meta: Meta<typeof Avatars> = {
  title: 'Components/Avatars/Avatars',
  component: Avatars,
  parameters: {
    docs: {
      description: {
        component: '# Avatars\\nPreserved layers: \`Big Avatars\` (\`45:5629\`) & \`Small Avatars\` (\`45:5913\`).\\n\\n| Property | Options | Description |\\n| :--- | :--- | :--- |\\n| **size** | \`big\` (48px), \`small\` (32px) | Avatar dimensions |\\n| **status** | \`online\`, \`offline\`, \`busy\`, \`away\` | Activity indicator dot |',
      },
    },
  },
  argTypes: {
    size: { control: 'radio', options: ['big', 'small'] },
    status: { control: 'select', options: ['online', 'offline', 'busy', 'away'] },
    name: { control: 'text' },
  },
  args: {
    size: 'big',
    status: 'online',
    name: 'Sophia Chen',
  },
};

export default meta;
type Story = StoryObj<typeof Avatars>;

export const BigAvatar: Story = {};

export const SmallAvatar: Story = {
  args: {
    size: 'small',
  },
};
`
});

// 10. ProfileAvatar.stories.tsx
writeComponent('ProfileAvatar', {
  'ProfileAvatar.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProfileAvatar } from './ProfileAvatar';

const meta: Meta<typeof ProfileAvatar> = {
  title: 'Components/Profile Avatar/Profile Avatar',
  component: ProfileAvatar,
  parameters: {
    docs: {
      description: {
        component: '# Profile Avatar\\nPreserved layer: \`Profile Avatar\` (COMPONENT_SET: \`80:8888\`).\\n\\n| Property | Options | Description |\\n| :--- | :--- | :--- |\\n| **State** | \`Default\`, \`Hovered\`, \`Focused\`, \`Pressed\` | Interaction states |',
      },
    },
  },
  argTypes: {
    state: { control: 'select', options: ['Default', 'Hovered', 'Focused', 'Pressed'] },
    name: { control: 'text' },
    role: { control: 'text' },
  },
  args: {
    state: 'Default',
    name: 'Sophia Chen',
    role: 'Logistics Lead',
  },
};

export default meta;
type Story = StoryObj<typeof ProfileAvatar>;

export const Default: Story = {};
`
});

// 11. Header.stories.tsx
writeComponent('Header', {
  'Header.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: '# Header\\nPreserved layer: \`Header\` (COMPONENT: \`82:9262\`).\\n\\nGlobal top application bar containing title, live search, notifications, and profile controls.',
      },
    },
  },
  args: {
    title: 'Live Fleet & Deliveries',
    subtitle: 'Real-time telemetry and supply chain overview',
    showSearch: true,
    showNotifications: true,
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
`
});

// 12. TableHeader.stories.tsx
writeComponent('TableHeader', {
  'TableHeader.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TableHeader } from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/Header/Table Header',
  component: TableHeader,
  parameters: {
    docs: {
      description: {
        component: '# Table Header\\nPreserved layer: \`Table Header\` (COMPONENT: \`164:1299\`).\\n\\nDedicated data table toolbar with item count badge, quick search, filter drawer trigger, and CSV export.',
      },
    },
  },
  args: {
    title: 'Active Deliveries',
    itemCount: 142,
  },
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {};
`
});

// 13. InputField.stories.tsx
writeComponent('InputField', {
  'InputField.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/Input Field/Input Field',
  component: InputField,
  parameters: {
    docs: {
      description: {
        component: '# Input Field\\nPreserved layer: \`Input field\` (COMPONENT_SET: \`85:9820\`).\\n\\n| Property | Options | Description |\\n| :--- | :--- | :--- |\\n| **Type** | \`Filled\`, \`Outline\` | Visual surface style |\\n| **State** | \`Default\`, \`Hovered\`, \`Focused\`, \`Pressed\`, \`Typing\`, \`Filled\`, \`Error\`, \`Disabled\` | Interaction state matrix |',
      },
    },
  },
  argTypes: {
    typeVariant: { control: 'radio', options: ['Filled', 'Outline'] },
    state: {
      control: 'select',
      options: ['Default', 'Hovered', 'Focused', 'Pressed', 'Typing', 'Filled', 'Error', 'Disabled'],
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorText: { control: 'text' },
  },
  args: {
    typeVariant: 'Filled',
    state: 'Default',
    label: 'Delivery Route Name',
    placeholder: 'e.g. Route 404 - North Sector',
    helperText: 'Enter a unique identifier for this active fleet route.',
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Filled: Story = {};

export const Outline: Story = {
  args: {
    typeVariant: 'Outline',
  },
};

export const ErrorState: Story = {
  args: {
    state: 'Error',
    errorText: 'Route name is already in use by Vehicle #402',
  },
};
`
});

// 14. TextField.stories.tsx
writeComponent('TextField', {
  'TextField.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/Text Field/Text Field',
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: '# Text Field\\nPreserved layer: \`Text field\` (COMPONENT_SET: \`85:10177\`).\\n\\nMulti-line text input with character support, focus elevation, and validation states.',
      },
    },
  },
  args: {
    state: 'Default',
    label: 'Special Delivery Instructions',
    helperText: 'Include access gate codes and contact phone numbers.',
    rows: 4,
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {};
`
});

// 15. RadioButtons.stories.tsx
writeComponent('RadioButtons', {
  'RadioButtons.stories.tsx': `import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioButtons } from './RadioButtons';

const meta: Meta<typeof RadioButtons> = {
  title: 'Components/Radio button/Radio buttons',
  component: RadioButtons,
  parameters: {
    docs: {
      description: {
        component: '# Radio buttons\\nPreserved layer: \`Radio buttons\` (COMPONENT_SET: \`46:6245\`).\\n\\n| Property | Options | Description |\\n| :--- | :--- | :--- |\\n| **Selected** | \`true\` / \`false\` | Selection state |\\n| **State** | \`Enabled\`, \`Hovered\`, \`Focused\`, \`Pressed\`, \`Disabled\` | Interaction matrix |',
      },
    },
  },
  args: {
    selected: false,
    state: 'Enabled',
    label: 'Standard Express Delivery',
  },
};

export default meta;
type Story = StoryObj<typeof RadioButtons>;

export const Default: Story = {};

export const InteractiveGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('opt1');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <RadioButtons
          selected={selected === 'opt1'}
          label="Express 2-Hour Delivery"
          onChange={() => setSelected('opt1')}
        />
        <RadioButtons
          selected={selected === 'opt2'}
          label="Next-Day Consolidated Dispatch"
          onChange={() => setSelected('opt2')}
        />
        <RadioButtons
          selected={selected === 'opt3'}
          label="Scheduled Eco Delivery"
          onChange={() => setSelected('opt3')}
        />
      </div>
    );
  },
};
`
});

// 16. Toggle.stories.tsx
writeComponent('Toggle', {
  'Toggle.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: '# Toggle\\nPreserved layer: \`Toggle\` (COMPONENT_SET: \`56:6962\`).\\n\\n| Property | Options | Description |\\n| :--- | :--- | :--- |\\n| **Type** | \`Primary\`, \`Success\` | Brand fill color |\\n| **State** | \`Enabled\`, \`Hovered\`, \`Focused\`, \`Pressed\`, \`Disabled\` | Interaction matrix |\\n| **checked** | \`true\` / \`false\` | Boolean state |',
      },
    },
  },
  args: {
    typeVariant: 'Primary',
    state: 'Enabled',
    checked: true,
    label: 'Real-time GPS Tracking',
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {};

export const Success: Story = {
  args: {
    typeVariant: 'Success',
    label: 'Telemetry Heartbeat Active',
  },
};
`
});

// 17. Checkboxes.stories.tsx
writeComponent('Checkboxes', {
  'Checkboxes.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkboxes } from './Checkboxes';

const meta: Meta<typeof Checkboxes> = {
  title: 'Components/Checkboxes/Checkboxes',
  component: Checkboxes,
  parameters: {
    docs: {
      description: {
        component: '# Checkboxes\\nPreserved layer: \`Checkboxes\` (COMPONENT_SET: \`57:7420\`).\\n\\n| Property | Options | Description |\\n| :--- | :--- | :--- |\\n| **Type** | \`Primary\`, \`Success\`, \`Error\`, \`Warning\` | Color theme variant |\\n| **Checked** | \`true\` / \`false\` | Checked state |',
      },
    },
  },
  args: {
    typeVariant: 'Primary',
    checked: true,
    state: 'Enabled',
    label: 'Notify driver on delay',
  },
};

export default meta;
type Story = StoryObj<typeof Checkboxes>;

export const Default: Story = {};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkboxes typeVariant="Primary" checked={true} label="Primary Theme" />
      <Checkboxes typeVariant="Success" checked={true} label="Success (Delivered)" />
      <Checkboxes typeVariant="Warning" checked={true} label="Warning (Delayed)" />
      <Checkboxes typeVariant="Error" checked={true} label="Error (Cancelled)" />
    </div>
  ),
};
`
});

// 18. Tags.stories.tsx
writeComponent('Tags', {
  'Tags.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tags } from './Tags';

const meta: Meta<typeof Tags> = {
  title: 'Components/Tags/Tags',
  component: Tags,
  parameters: {
    docs: {
      description: {
        component: '# Tags\\nPreserved layer: \`Tags\` (COMPONENT_SET: \`65:7696\`).\\n\\n| Property | Options | Description |\\n| :--- | :--- | :--- |\\n| **Type** | \`Info\`, \`Success\`, \`Warning\`, \`Error\`, \`Inactive\` | Semantic color badge |\\n| **removable** | \`true\` / \`false\` | Dismiss button slot |',
      },
    },
  },
  args: {
    typeVariant: 'Info',
    label: 'Express Route',
    removable: false,
  },
};

export default meta;
type Story = StoryObj<typeof Tags>;

export const Default: Story = {};

export const AllTags: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tags typeVariant="Info" label="Info Tag" />
      <Tags typeVariant="Success" label="Active Route" />
      <Tags typeVariant="Warning" label="Delay Warning" />
      <Tags typeVariant="Error" label="Route Blocked" />
      <Tags typeVariant="Inactive" label="Draft" />
    </div>
  ),
};
`
});

// 19. StatusTag.stories.tsx
writeComponent('StatusTag', {
  'StatusTag.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StatusTag } from './StatusTag';

const meta: Meta<typeof StatusTag> = {
  title: 'Components/Tags/Status Tag',
  component: StatusTag,
  parameters: {
    docs: {
      description: {
        component: '# Status Tag\\nPreserved layer: \`Status Tag\` (COMPONENT_SET: \`66:7719\`).\\n\\nPill badge with telemetry status indicator dot.',
      },
    },
  },
  args: {
    typeVariant: 'Success',
    label: 'On Schedule',
    dot: true,
  },
};

export default meta;
type Story = StoryObj<typeof StatusTag>;

export const Default: Story = {};

export const StatusVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <StatusTag typeVariant="Success" label="On Schedule" />
      <StatusTag typeVariant="Warning" label="Delay (15m)" />
      <StatusTag typeVariant="Error" label="Mechanical Hold" />
      <StatusTag typeVariant="Info" label="In Transit" />
      <StatusTag typeVariant="Inactive" label="Standby" />
    </div>
  ),
};
`
});

// 20. Indicators.stories.tsx
writeComponent('Indicators', {
  'Indicators.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Indicators } from './Indicators';

const meta: Meta<typeof Indicators> = {
  title: 'Components/Indicators/Indicators',
  component: Indicators,
  parameters: {
    docs: {
      description: {
        component: '# Indicators\\nPreserved layer: \`Indicators\` (COMPONENT_SET: \`70:7774\`).\\n\\n| Property | Options | Description |\\n| :--- | :--- | :--- |\\n| **State** | \`Info\`, \`Success\`, \`Warning\`, \`Error\`, \`Inactive\` | State color |\\n| **Size** | \`Small\` (8px), \`Large\` (12px) | Dot dimension |',
      },
    },
  },
  args: {
    stateVariant: 'Success',
    size: 'Small',
    label: 'Live Signal Connected',
    pulse: true,
  },
};

export default meta;
type Story = StoryObj<typeof Indicators>;

export const Default: Story = {};
`
});

// 21. Dividers.stories.tsx
writeComponent('Dividers', {
  'Dividers.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dividers } from './Dividers';

const meta: Meta<typeof Dividers> = {
  title: 'Components/Dividers/Dividers',
  component: Dividers,
  parameters: {
    docs: {
      description: {
        component: '# Dividers\\nPreserved layer: \`Dividers\` (COMPONENT_SET: \`71:7805\`).\\n\\n| Property | Options | Description |\\n| :--- | :--- | :--- |\\n| **Size** | \`Small\`, \`Medium\`, \`Large\`, \`Extra Large\` | Thickness (1px, 2px, 4px, 8px) |',
      },
    },
  },
  args: {
    size: 'Medium',
    orientation: 'horizontal',
  },
};

export default meta;
type Story = StoryObj<typeof Dividers>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'OR CONTINUE WITH',
  },
};
`
});

// 22. ProcessBar.stories.tsx
writeComponent('ProcessBar', {
  'ProcessBar.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProcessBar } from './ProcessBar';

const meta: Meta<typeof ProcessBar> = {
  title: 'Components/Process bar/Process bar',
  component: ProcessBar,
  parameters: {
    docs: {
      description: {
        component: '# Process bar\\nPreserved layer: \`Process bar\` (COMPONENT_SET: \`71:7902\`).\\n\\n| Property | Options | Description |\\n| :--- | :--- | :--- |\\n| **Process** | \`0%\` through \`100%\` | Progress scale |',
      },
    },
  },
  argTypes: {
    process: {
      control: 'select',
      options: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
    },
    colorVariant: {
      control: 'radio',
      options: ['primary', 'success', 'warning', 'error'],
    },
  },
  args: {
    process: '60%',
    colorVariant: 'primary',
    label: 'Fleet Dispatch Progress',
    showLabel: true,
  },
};

export default meta;
type Story = StoryObj<typeof ProcessBar>;

export const Default: Story = {};

export const AllSteps: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '480px' }}>
      <ProcessBar process="20%" colorVariant="primary" label="Step 1: In Warehouse" />
      <ProcessBar process="50%" colorVariant="warning" label="Step 2: In Transit" />
      <ProcessBar process="80%" colorVariant="primary" label="Step 3: Out for Delivery" />
      <ProcessBar process="100%" colorVariant="success" label="Step 4: Completed" />
    </div>
  ),
};
`
});

// 23. TabBars.stories.tsx
writeComponent('TabBars', {
  'TabBars.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabBars } from './TabBars';

const meta: Meta<typeof TabBars> = {
  title: 'Components/Tab bar/Tab bars',
  component: TabBars,
  parameters: {
    docs: {
      description: {
        component: '# Tab bars\\nPreserved layer: \`Tab bars\` (COMPONENT_SET: \`74:8054\`).\\n\\n| Property | Options | Description |\\n| :--- | :--- | :--- |\\n| **State** | \`Default\`, \`Active\`, \`Hovered\`, \`Focused\`, \`Pressed\`, \`Disabled\` | State matrix |',
      },
    },
  },
  args: {
    state: 'Default',
    label: 'All Deliveries',
    badge: 24,
    active: false,
  },
};

export default meta;
type Story = StoryObj<typeof TabBars>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    active: true,
  },
};
`
});

// 24. TabBarsMulti.stories.tsx
writeComponent('TabBarsMulti', {
  'TabBarsMulti.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabBarsMulti } from './TabBarsMulti';

const meta: Meta<typeof TabBarsMulti> = {
  title: 'Components/Tab bar/Tab Bars Multi',
  component: TabBarsMulti,
  parameters: {
    docs: {
      description: {
        component: '# Tab Bars (Multi Tabs Container)\\nPreserved layer: \`Tab bars\` (COMPONENT_SET: \`74:8069\`).\\n\\n| Property | Options | Description |\\n| :--- | :--- | :--- |\\n| **Active** | \`None\`, \`First\`, \`Second\`, \`Third\`, \`Fourth\`, \`Fifth\` | Preselected tab option |',
      },
    },
  },
  argTypes: {
    active: {
      control: 'select',
      options: ['None', 'First', 'Second', 'Third', 'Fourth', 'Fifth'],
    },
  },
  args: {
    active: 'First',
  },
};

export default meta;
type Story = StoryObj<typeof TabBarsMulti>;

export const Default: Story = {};
`
});

// 25. Stepper.stories.tsx
writeComponent('Stepper', {
  'Stepper.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper/Stepper',
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component: '# Stepper\\nPreserved layer: \`Stepper\` (COMPONENT_SET: \`77:8465\` & \`78:8819\`).\\n\\n| Property | Options | Description |\\n| :--- | :--- | :--- |\\n| **Progress** | \`Step 1\` through \`Step 7\` | Active progress variant |',
      },
    },
  },
  argTypes: {
    progress: {
      control: 'select',
      options: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Step 6', 'Step 7'],
    },
  },
  args: {
    progress: 'Step 3',
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {};
`
});

// 26. TableRow.stories.tsx
writeComponent('TableRow', {
  'TableRow.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TableRow } from './TableRow';

const meta: Meta<typeof TableRow> = {
  title: 'Components/Table Rows/Table Row',
  component: TableRow,
  parameters: {
    docs: {
      description: {
        component: '# Table Row & Table Header Row\\nPreserved layers: \`Table Row\` (\`179:1513\`) & \`Table Header Row\` (\`179:1512\`).',
      },
    },
  },
  args: {
    variant: 'Row',
    selected: false,
    cells: ['#DEL-4892', 'Downtown Express', 'Vehicle #402', '12:30 PM', 'On Schedule'],
  },
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  render: (args) => (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        <TableRow {...args} />
      </tbody>
    </table>
  ),
};
`
});

// 27. Table.stories.tsx
writeComponent('Table', {
  'Table.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table Rows/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: '# Complete Data Table\\nPreserved layer: \`Table\` (FRAME: \`170:1209\`).\\n\\nCombines \`TableHeader\`, \`TableHeaderRow\`, interactive \`TableRow\` records with checkboxes, status tags, and \`PaginationRow\`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {};
`
});

// 28. Cards.stories.tsx
writeComponent('Cards', {
  'Cards.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Cards } from './Cards';

const meta: Meta<typeof Cards> = {
  title: 'Components/Cards/Cards',
  component: Cards,
  parameters: {
    docs: {
      description: {
        component: '# Cards (Metric & KPI Cards)\\nPreserved layer: \`Cards\` (COMPONENT_SET: \`88:10691\`).\\n\\n| Property | Options | Description |\\n| :--- | :--- | :--- |\\n| **Type** | \`Card 1\`, \`Card 2\`, \`Card 3\`, \`Card 4\` | Layout style variant |',
      },
    },
  },
  argTypes: {
    typeVariant: {
      control: 'radio',
      options: ['Card 1', 'Card 2', 'Card 3', 'Card 4'],
    },
  },
  args: {
    typeVariant: 'Card 1',
    title: 'Active Deliveries',
    value: '1,284',
    change: '+12.5%',
    positive: true,
    iconName: 'Truck 2',
  },
};

export default meta;
type Story = StoryObj<typeof Cards>;

export const Card1: Story = {};

export const CardGallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <Cards typeVariant="Card 1" title="Active Fleet" value="342" change="+8.2%" positive={true} iconName="Truck 2" />
      <Cards typeVariant="Card 2" title="Delayed Dispatches" value="14" change="-3.1%" positive={false} iconName="Alert" />
      <Cards typeVariant="Card 3" title="Avg Transit Time" value="28m" change="-5.4%" positive={true} iconName="Clock" />
      <Cards typeVariant="Card 4" title="Fulfilled Orders" value="9,820" change="+18.9%" positive={true} iconName="Success" />
    </div>
  ),
};
`
});

// 29. Maps.stories.tsx
writeComponent('Maps', {
  'Maps.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Maps } from './Maps';

const meta: Meta<typeof Maps> = {
  title: 'Components/Maps/Maps',
  component: Maps,
  parameters: {
    docs: {
      description: {
        component: '# Maps (Fleet Route Visualizer)\\nPreserved layer: \`Maps\` (COMPONENT_SET: \`42:5063\`).\\n\\n| Property | Options | Description |\\n| :--- | :--- | :--- |\\n| **Size** | \`Compact\`, \`Standard\`, \`Wide\` | Canvas dimension |',
      },
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['Compact', 'Standard', 'Wide'],
    },
  },
  args: {
    size: 'Standard',
  },
};

export default meta;
type Story = StoryObj<typeof Maps>;

export const Standard: Story = {};

export const Compact: Story = {
  args: {
    size: 'Compact',
  },
};

export const Wide: Story = {
  args: {
    size: 'Wide',
  },
};
`
});

// 30. DeliveryTrendsCard.stories.tsx
writeComponent('DeliveryTrendsCard', {
  'DeliveryTrendsCard.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DeliveryTrendsCard } from './DeliveryTrendsCard';

const meta: Meta<typeof DeliveryTrendsCard> = {
  title: 'Components/Charts & Graphs/Delivery Trends Card',
  component: DeliveryTrendsCard,
  parameters: {
    docs: {
      description: {
        component: '# Delivery Trends Card\\nPreserved layer: \`Delivery trends card\` (COMPONENT: \`88:11240\`).\\n\\nLine chart comparison showing \`Total Deliveries\` vs \`On-Time\` fulfillment across monthly intervals.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DeliveryTrendsCard>;

export const Default: Story = {};
`
});

// 31. DelayReasonsCard.stories.tsx
writeComponent('DelayReasonsCard', {
  'DelayReasonsCard.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DelayReasonsCard } from './DelayReasonsCard';

const meta: Meta<typeof DelayReasonsCard> = {
  title: 'Components/Charts & Graphs/Delay Reasons Card',
  component: DelayReasonsCard,
  parameters: {
    docs: {
      description: {
        component: '# Delay Reasons Card\\nPreserved layer: \`Delay Reasons card\` (COMPONENT: \`88:11239\`).\\n\\nDonut breakdown classifying fleet delays by \`Traffic\`, \`Vehicle Issue\`, \`Weather\`, and \`Other\`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DelayReasonsCard>;

export const Default: Story = {};
`
});

// 32. TopDelayedZonesCard.stories.tsx
writeComponent('TopDelayedZonesCard', {
  'TopDelayedZonesCard.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TopDelayedZonesCard } from './TopDelayedZonesCard';

const meta: Meta<typeof TopDelayedZonesCard> = {
  title: 'Components/Charts & Graphs/Top Delayed Zones Card',
  component: TopDelayedZonesCard,
  parameters: {
    docs: {
      description: {
        component: '# Top Delayed Zones Card\\nPreserved layer: \`Top Delayed Zones card\` (COMPONENT: \`88:11237\`).\\n\\nBar visualization displaying zones with highest delay counts.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TopDelayedZonesCard>;

export const Default: Story = {};
`
});

// 33. UpcomingDeliveriesCard.stories.tsx
writeComponent('UpcomingDeliveriesCard', {
  'UpcomingDeliveriesCard.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UpcomingDeliveriesCard } from './UpcomingDeliveriesCard';

const meta: Meta<typeof UpcomingDeliveriesCard> = {
  title: 'Components/Charts & Graphs/Upcoming Deliveries Card',
  component: UpcomingDeliveriesCard,
  parameters: {
    docs: {
      description: {
        component: '# Upcoming Deliveries Card\\nPreserved layer: \`Upcoming Deliveries card\` (COMPONENT: \`88:11238\`).\\n\\nList of scheduled dispatch checkpoints with customer name, shipment ID, city, and ETA badge.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UpcomingDeliveriesCard>;

export const Default: Story = {};
`
});

// 34. FleetStatusCard.stories.tsx
writeComponent('FleetStatusCard', {
  'FleetStatusCard.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FleetStatusCard } from './FleetStatusCard';

const meta: Meta<typeof FleetStatusCard> = {
  title: 'Components/Charts & Graphs/Fleet Status Card',
  component: FleetStatusCard,
  parameters: {
    docs: {
      description: {
        component: '# Fleet Status Card\\nPreserved layer: \`Fleet Status card\` (COMPONENT: \`88:11236\`).\\n\\nDonut telemetry showing ratio between \`In Use\` (active missions) and \`Available\` vehicles.',
      },
    },
  },
  args: {
    available: 120,
    inUse: 240,
  },
};

export default meta;
type Story = StoryObj<typeof FleetStatusCard>;

export const Default: Story = {};
`
});

// 35. LiveFleetOverviewCard.stories.tsx
writeComponent('LiveFleetOverviewCard', {
  'LiveFleetOverviewCard.stories.tsx': `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LiveFleetOverviewCard } from './LiveFleetOverviewCard';

const meta: Meta<typeof LiveFleetOverviewCard> = {
  title: 'Components/Charts & Graphs/Live Fleet Overview Card',
  component: LiveFleetOverviewCard,
  parameters: {
    docs: {
      description: {
        component: '# Live Fleet Overview Card\\nPreserved layer: \`Live Fleet Overview card\` (COMPONENT: \`88:11235\`).\\n\\nFull interactive fleet map dashboard card with header actions, GPS vector layers, and live controls.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LiveFleetOverviewCard>;

export const Default: Story = {};
`
});

console.log('✓ All 35+ Storybook stories cleanly written and formatted.');
