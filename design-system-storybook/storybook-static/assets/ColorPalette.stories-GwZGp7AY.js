import{o as e}from"./iframe-B30LOA5f.js";import{t}from"./react-BRf3e3jg.js";import{t as n}from"./jsx-runtime-Wl2OHS-O.js";import{t as r}from"./tokens-data-DmN14Xfm.js";var i=e(t()),a=n(),o={title:`Foundations/Design Tokens/Color Palette`,parameters:{docs:{description:{component:`
# Uedp-5 Base Color Palette Tokens
Synchronized directly from \`base-palette-tokens.json\` & Figma variables.

| Property | Description |
| :--- | :--- |
| **Total Families** | ${Object.keys(r.colorFamilies).length} color families |
| **Variable Mapping** | \`--uedp-{family}-{shade}\` & \`--uedp-var-{figmaId}\` |
| **Scopes** | All scopes, fills, strokes, text |
        `}}}},s={render:()=>{let[e,t]=(0,i.useState)(``),[n,o]=(0,i.useState)(null),s=e=>{navigator.clipboard?.writeText(e),o(e),setTimeout(()=>o(null),1800)},c=Object.entries(r.colorFamilies).filter(([t])=>t.toLowerCase().includes(e.toLowerCase()));return(0,a.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,padding:`24px`,maxWidth:`1200px`,margin:`0 auto`},children:[(0,a.jsxs)(`div`,{style:{marginBottom:`32px`},children:[(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:`16px`},children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`h1`,{style:{fontSize:`28px`,fontWeight:`700`,color:`var(--uedp-slate-900, #0f172a)`,margin:0},children:`Base Color Palette`}),(0,a.jsxs)(`p`,{style:{color:`var(--uedp-slate-500, #64748b)`,marginTop:`6px`,fontSize:`14px`},children:[`Complete Figma variable tokens across `,Object.keys(r.colorFamilies).length,` distinct color families.`]})]}),(0,a.jsx)(`input`,{type:`text`,placeholder:`Search color family (e.g., slate, blue, emerald)...`,value:e,onChange:e=>t(e.target.value),style:{padding:`10px 16px`,borderRadius:`8px`,border:`1px solid var(--uedp-slate-300, #cbd5e1)`,width:`320px`,fontSize:`14px`,outline:`none`,backgroundColor:`var(--uedp-white, #ffffff)`}})]}),n&&(0,a.jsxs)(`div`,{style:{marginTop:`12px`,padding:`8px 16px`,backgroundColor:`var(--uedp-emerald-50, #ecfdf5)`,color:`var(--uedp-emerald-700, #047857)`,borderRadius:`6px`,fontSize:`13px`,display:`inline-block`,border:`1px solid var(--uedp-emerald-200, #a7f3d0)`},children:[`✓ Copied `,(0,a.jsx)(`code`,{children:n}),` to clipboard!`]})]}),(0,a.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`36px`},children:c.map(([e,t])=>(0,a.jsxs)(`div`,{style:{backgroundColor:`var(--uedp-white, #ffffff)`,border:`1px solid var(--uedp-slate-200, #e2e8f0)`,borderRadius:`12px`,padding:`20px`,boxShadow:`0 1px 3px rgba(0,0,0,0.05)`},children:[(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`16px`},children:[(0,a.jsx)(`h3`,{style:{textTransform:`capitalize`,fontSize:`18px`,fontWeight:`600`,color:`var(--uedp-slate-800, #1e293b)`},children:e}),(0,a.jsxs)(`span`,{style:{fontSize:`12px`,color:`var(--uedp-slate-400, #94a3b8)`},children:[t.length,` shades`]})]}),(0,a.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(130px, 1fr))`,gap:`12px`},children:t.map(e=>{let t=[`50`,`100`,`200`,`white`].includes(e.shade);return(0,a.jsxs)(`div`,{onClick:()=>s(`var(${e.varName})`),style:{cursor:`pointer`,borderRadius:`8px`,border:`1px solid var(--uedp-slate-200, #e2e8f0)`,overflow:`hidden`,transition:`transform 0.15s ease, box-shadow 0.15s ease`},title:`Click to copy CSS variable`,children:[(0,a.jsx)(`div`,{style:{height:`64px`,backgroundColor:`var(${e.varName}, ${e.hex})`,display:`flex`,alignItems:`flex-end`,justifyContent:`flex-end`,padding:`6px`},children:(0,a.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:`600`,color:t?`#0f172a`:`#ffffff`,backgroundColor:t?`rgba(255,255,255,0.75)`:`rgba(0,0,0,0.3)`,padding:`2px 6px`,borderRadius:`4px`},children:e.shade})}),(0,a.jsxs)(`div`,{style:{padding:`8px`,backgroundColor:`var(--uedp-slate-50, #f8fafc)`},children:[(0,a.jsx)(`div`,{style:{fontSize:`12px`,fontWeight:`600`,color:`var(--uedp-slate-700, #334155)`,fontFamily:`monospace`},children:e.hex}),(0,a.jsx)(`div`,{style:{fontSize:`10px`,color:`var(--uedp-slate-500, #64748b)`,marginTop:`2px`,wordBreak:`break-all`},children:e.varName})]})]},e.shade)})})]},e))})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = useState('');
    const [copied, setCopied] = useState<string | null>(null);
    const handleCopy = (text: string) => {
      navigator.clipboard?.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1800);
    };
    const families = Object.entries(tokensData.colorFamilies).filter(([family]) => family.toLowerCase().includes(search.toLowerCase()));
    return <div style={{
      fontFamily: 'Inter, sans-serif',
      padding: '24px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
        <div style={{
        marginBottom: '32px'
      }}>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
            <div>
              <h1 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: 'var(--uedp-slate-900, #0f172a)',
              margin: 0
            }}>
                Base Color Palette
              </h1>
              <p style={{
              color: 'var(--uedp-slate-500, #64748b)',
              marginTop: '6px',
              fontSize: '14px'
            }}>
                Complete Figma variable tokens across {Object.keys(tokensData.colorFamilies).length} distinct color families.
              </p>
            </div>
            <input type="text" placeholder="Search color family (e.g., slate, blue, emerald)..." value={search} onChange={e => setSearch(e.target.value)} style={{
            padding: '10px 16px',
            borderRadius: '8px',
            border: '1px solid var(--uedp-slate-300, #cbd5e1)',
            width: '320px',
            fontSize: '14px',
            outline: 'none',
            backgroundColor: 'var(--uedp-white, #ffffff)'
          }} />
          </div>
          {copied && <div style={{
          marginTop: '12px',
          padding: '8px 16px',
          backgroundColor: 'var(--uedp-emerald-50, #ecfdf5)',
          color: 'var(--uedp-emerald-700, #047857)',
          borderRadius: '6px',
          fontSize: '13px',
          display: 'inline-block',
          border: '1px solid var(--uedp-emerald-200, #a7f3d0)'
        }}>
              ✓ Copied <code>{copied}</code> to clipboard!
            </div>}
        </div>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '36px'
      }}>
          {families.map(([family, swatches]) => <div key={family} style={{
          backgroundColor: 'var(--uedp-white, #ffffff)',
          border: '1px solid var(--uedp-slate-200, #e2e8f0)',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
              <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}>
                <h3 style={{
              textTransform: 'capitalize',
              fontSize: '18px',
              fontWeight: '600',
              color: 'var(--uedp-slate-800, #1e293b)'
            }}>
                  {family}
                </h3>
                <span style={{
              fontSize: '12px',
              color: 'var(--uedp-slate-400, #94a3b8)'
            }}>
                  {swatches.length} shades
                </span>
              </div>

              <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
            gap: '12px'
          }}>
                {swatches.map((swatch: any) => {
              const isLight = ['50', '100', '200', 'white'].includes(swatch.shade);
              return <div key={swatch.shade} onClick={() => handleCopy(\`var(\${swatch.varName})\`)} style={{
                cursor: 'pointer',
                borderRadius: '8px',
                border: '1px solid var(--uedp-slate-200, #e2e8f0)',
                overflow: 'hidden',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease'
              }} title="Click to copy CSS variable">
                      <div style={{
                  height: '64px',
                  backgroundColor: \`var(\${swatch.varName}, \${swatch.hex})\`,
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  padding: '6px'
                }}>
                        <span style={{
                    fontSize: '11px',
                    fontWeight: '600',
                    color: isLight ? '#0f172a' : '#ffffff',
                    backgroundColor: isLight ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.3)',
                    padding: '2px 6px',
                    borderRadius: '4px'
                  }}>
                          {swatch.shade}
                        </span>
                      </div>
                      <div style={{
                  padding: '8px',
                  backgroundColor: 'var(--uedp-slate-50, #f8fafc)'
                }}>
                        <div style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'var(--uedp-slate-700, #334155)',
                    fontFamily: 'monospace'
                  }}>
                          {swatch.hex}
                        </div>
                        <div style={{
                    fontSize: '10px',
                    color: 'var(--uedp-slate-500, #64748b)',
                    marginTop: '2px',
                    wordBreak: 'break-all'
                  }}>
                          {swatch.varName}
                        </div>
                      </div>
                    </div>;
            })}
              </div>
            </div>)}
        </div>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};var c=[`AllColorFamilies`];export{s as AllColorFamilies,c as __namedExportsOrder,o as default};