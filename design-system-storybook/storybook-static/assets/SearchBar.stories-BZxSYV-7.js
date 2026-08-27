import{t as e}from"./SearchBar-BaPbkp77.js";var t={title:`Components/Search bar/Search bar`,component:e,parameters:{docs:{description:{component:"# Search Bar\nPreserved layers: `Search bar` (COMPONENT_SET: `44:5165` & `44:5271`).\n\n| Property | Options | Description |\n| :--- | :--- | :--- |\n| **State** | `Default`, `Hovered`, `Focused`, `Pressed`, `Typing`, `Filled`, `Error`, `Disabled` | Component state matrix |\n| **variant** | `standard`, `pill` | Shape style |"}}},argTypes:{state:{control:`select`,options:[`Default`,`Hovered`,`Focused`,`Pressed`,`Typing`,`Filled`,`Error`,`Disabled`]},variant:{control:`radio`,options:[`standard`,`pill`]},placeholder:{control:`text`},showFilterButton:{control:`boolean`}},args:{state:`Default`,variant:`standard`,placeholder:`Search fleet, orders, routes...`,showFilterButton:!0}},n={},r={args:{state:`Filled`}},i={args:{state:`Error`,placeholder:`Invalid search term...`}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{}`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'Filled'
  }
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'Error',
    placeholder: 'Invalid search term...'
  }
}`,...i.parameters?.docs?.source}}};var a=[`Default`,`Filled`,`ErrorState`];export{n as Default,i as ErrorState,r as Filled,a as __namedExportsOrder,t as default};