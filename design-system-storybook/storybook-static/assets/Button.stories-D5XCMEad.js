import"./iframe-B30LOA5f.js";import{t as e}from"./react-BRf3e3jg.js";import{t}from"./jsx-runtime-Wl2OHS-O.js";import{t as n}from"./Button-UrSUJXqz.js";e();var r=t(),i={title:`Components/Buttons/Button`,component:n,parameters:{docs:{description:{component:"# Button\nPreserved layer: `Button` (COMPONENT_SET: `10:166`).\n\n| Property | Options | Description |\n| :--- | :--- | :--- |\n| **Type** | `Primary`, `Secondary` | Brand theme |\n| **State** | `Active`, `Hovered`, `Focused`, `Pressed`, `Disabled` | Interaction matrix |\n| **Shape** | `Rectangle`, `Capsule` | Corner radius |\n| **Feedback** | `Default`, `Info`, `Warning`, `Success`, `Error` | Semantic tokens |\n| **Size** | `Small`, `Large` | Dimensions |"}}},argTypes:{typeVariant:{control:`radio`,options:[`Primary`,`Secondary`]},state:{control:`select`,options:[`Active`,`Hovered`,`Focused`,`Pressed`,`Disabled`]},shape:{control:`radio`,options:[`Capsule`,`Rectangle`]},feedback:{control:`select`,options:[`Default`,`Info`,`Success`,`Warning`,`Error`]},size:{control:`radio`,options:[`Small`,`Large`]},showIcon:{control:`boolean`},label:{control:`text`}},args:{typeVariant:`Primary`,state:`Active`,shape:`Capsule`,feedback:`Default`,size:`Large`,label:`Button`,showIcon:!0,iconName:`Right Arrow`}},a={},o={args:{typeVariant:`Secondary`}},s={render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`},children:[(0,r.jsx)(n,{feedback:`Default`,label:`Default`}),(0,r.jsx)(n,{feedback:`Info`,label:`Info`,iconName:`Info`}),(0,r.jsx)(n,{feedback:`Success`,label:`Success`,iconName:`Success`}),(0,r.jsx)(n,{feedback:`Warning`,label:`Warning`,iconName:`Alert`}),(0,r.jsx)(n,{feedback:`Error`,label:`Error`,iconName:`Close`})]})},c={render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,r.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,alignItems:`center`},children:[(0,r.jsx)(n,{size:`Large`,shape:`Capsule`,label:`Primary Capsule`}),(0,r.jsx)(n,{size:`Small`,shape:`Capsule`,label:`Small Capsule`}),(0,r.jsx)(n,{size:`Large`,shape:`Rectangle`,label:`Primary Rectangle`}),(0,r.jsx)(n,{size:`Small`,shape:`Rectangle`,label:`Small Rectangle`})]}),(0,r.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,alignItems:`center`},children:[(0,r.jsx)(n,{typeVariant:`Secondary`,size:`Large`,shape:`Capsule`,label:`Secondary Capsule`}),(0,r.jsx)(n,{typeVariant:`Secondary`,size:`Small`,shape:`Capsule`,label:`Secondary Small`}),(0,r.jsx)(n,{typeVariant:`Secondary`,size:`Large`,shape:`Rectangle`,label:`Secondary Rectangle`}),(0,r.jsx)(n,{typeVariant:`Secondary`,state:`Disabled`,label:`Disabled Button`})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    typeVariant: 'Secondary'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <Button feedback="Default" label="Default" />
      <Button feedback="Info" label="Info" iconName="Info" />
      <Button feedback="Success" label="Success" iconName="Success" />
      <Button feedback="Warning" label="Warning" iconName="Alert" />
      <Button feedback="Error" label="Error" iconName="Close" />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    }}>
        <Button size="Large" shape="Capsule" label="Primary Capsule" />
        <Button size="Small" shape="Capsule" label="Small Capsule" />
        <Button size="Large" shape="Rectangle" label="Primary Rectangle" />
        <Button size="Small" shape="Rectangle" label="Small Rectangle" />
      </div>
      <div style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    }}>
        <Button typeVariant="Secondary" size="Large" shape="Capsule" label="Secondary Capsule" />
        <Button typeVariant="Secondary" size="Small" shape="Capsule" label="Secondary Small" />
        <Button typeVariant="Secondary" size="Large" shape="Rectangle" label="Secondary Rectangle" />
        <Button typeVariant="Secondary" state="Disabled" label="Disabled Button" />
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};var l=[`Primary`,`Secondary`,`FeedbackStates`,`AllVariantsMatrix`];export{c as AllVariantsMatrix,s as FeedbackStates,a as Primary,o as Secondary,l as __namedExportsOrder,i as default};