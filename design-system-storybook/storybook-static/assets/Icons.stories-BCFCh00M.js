import{o as e}from"./iframe-B30LOA5f.js";import{t}from"./react-BRf3e3jg.js";import{t as n}from"./jsx-runtime-Wl2OHS-O.js";import{t as r}from"./Icons-p6aeZgMO.js";var i=e(t()),a=n(),o=`Route.Profile 2.Cart.Truck 2.Location filled.Call.Upload.Delete.Edit 2.Tick.Clock 2.Clock.Stock up.Right Arrow.Left Arrow.Up Arrow.Down Arrow.Search.Settings.Filter.Notification.Download.Add.Minus.Close.Calendar.Eye.Eye Slash.Alert.Success.Info.Layers.Bar Chart.Pie Chart.Navigation.Globe.Radio.Sliders.More Vertical.More Horizontal.Refresh.Logout.Maximize.Minimize.Zoom In.Zoom Out.Lock.Unlock.Shield.Help.Document.Mail`.split(`.`),s={title:`Components/Iconography/Icons`,component:r,parameters:{docs:{description:{component:"# Icons & Iconography\nPreserved layer: `Icons` (COMPONENT_SET: `23:2644`) & `Icons for Instance Swaps` (FRAME: `17:679`).\n\n| Property | Type | Default |\n| :--- | :--- | :--- |\n| **name** | `IconName` | `Route` |\n| **mode** | `Light` / `Dark` | `Light` |\n| **size** | `number` | `24` |"}}},argTypes:{name:{control:`select`,options:o},mode:{control:`radio`,options:[`Light`,`Dark`]},size:{control:{type:`range`,min:14,max:48,step:2}},color:{control:`color`}},args:{name:`Route`,mode:`Light`,size:24}},c={},l={render:e=>{let[t,n]=(0,i.useState)(``),s=o.filter(e=>e.toLowerCase().includes(t.toLowerCase()));return(0,a.jsxs)(`div`,{style:{padding:`24px`,backgroundColor:e.mode===`Dark`?`var(--uedp-slate-900, #0f172a)`:`var(--uedp-white, #ffffff)`,color:e.mode===`Dark`?`#ffffff`:`#0f172a`,borderRadius:`12px`,fontFamily:`Inter, sans-serif`},children:[(0,a.jsxs)(`div`,{style:{marginBottom:`24px`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,flexWrap:`wrap`,gap:`12px`},children:[(0,a.jsxs)(`div`,{children:[(0,a.jsxs)(`h2`,{style:{fontSize:`20px`,fontWeight:`700`},children:[`Iconography Showcase (`,s.length,` Icons)`]}),(0,a.jsx)(`p`,{style:{fontSize:`13px`,opacity:.7,marginTop:`4px`},children:`Click any icon to inspect`})]}),(0,a.jsx)(`input`,{type:`text`,placeholder:`Search icons...`,value:t,onChange:e=>n(e.target.value),style:{padding:`8px 16px`,borderRadius:`8px`,border:`1px solid var(--uedp-slate-300, #cbd5e1)`,fontSize:`14px`,outline:`none`,width:`260px`,backgroundColor:e.mode===`Dark`?`#1e293b`:`#ffffff`,color:e.mode===`Dark`?`#ffffff`:`#0f172a`}})]}),(0,a.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(130px, 1fr))`,gap:`16px`},children:s.map(t=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,padding:`16px 8px`,border:`1px solid`,borderColor:e.mode===`Dark`?`#334155`:`#e2e8f0`,borderRadius:`8px`,cursor:`pointer`,transition:`all 0.15s ease`,backgroundColor:e.mode===`Dark`?`#1e293b`:`#f8fafc`},children:[(0,a.jsx)(r,{name:t,mode:e.mode,size:e.size||24,color:e.color}),(0,a.jsx)(`span`,{style:{fontSize:`11px`,marginTop:`10px`,textAlign:`center`,fontWeight:`500`},children:t})]},t))})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [search, setSearch] = useState('');
    const filtered = allIcons.filter(i => i.toLowerCase().includes(search.toLowerCase()));
    return <div style={{
      padding: '24px',
      backgroundColor: args.mode === 'Dark' ? 'var(--uedp-slate-900, #0f172a)' : 'var(--uedp-white, #ffffff)',
      color: args.mode === 'Dark' ? '#ffffff' : '#0f172a',
      borderRadius: '12px',
      fontFamily: 'Inter, sans-serif'
    }}>
        <div style={{
        marginBottom: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
          <div>
            <h2 style={{
            fontSize: '20px',
            fontWeight: '700'
          }}>Iconography Showcase ({filtered.length} Icons)</h2>
            <p style={{
            fontSize: '13px',
            opacity: 0.7,
            marginTop: '4px'
          }}>Click any icon to inspect</p>
          </div>
          <input type="text" placeholder="Search icons..." value={search} onChange={e => setSearch(e.target.value)} style={{
          padding: '8px 16px',
          borderRadius: '8px',
          border: '1px solid var(--uedp-slate-300, #cbd5e1)',
          fontSize: '14px',
          outline: 'none',
          width: '260px',
          backgroundColor: args.mode === 'Dark' ? '#1e293b' : '#ffffff',
          color: args.mode === 'Dark' ? '#ffffff' : '#0f172a'
        }} />
        </div>

        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
        gap: '16px'
      }}>
          {filtered.map(iconName => <div key={iconName} style={{
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
        }}>
              <Icons name={iconName} mode={args.mode} size={args.size || 24} color={args.color} />
              <span style={{
            fontSize: '11px',
            marginTop: '10px',
            textAlign: 'center',
            fontWeight: '500'
          }}>
                {iconName}
              </span>
            </div>)}
        </div>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};var u=[`Default`,`IconGallery`];export{c as Default,l as IconGallery,u as __namedExportsOrder,s as default};