import{o as e}from"./iframe-B30LOA5f.js";import{t}from"./react-BRf3e3jg.js";import{t as n}from"./jsx-runtime-Wl2OHS-O.js";import{t as r}from"./tokens-data-DmN14Xfm.js";var i=e(t()),a=n(),o={title:`Foundations/Design Tokens/Foundational Tokens`,parameters:{docs:{description:{component:`
# Uedp-5 Foundational Tokens
Geometry, border radius, spacing (gap, padding), opacity, and sizing scales extracted from \`foundational-tokens.json\`.

| Category | Token Count | Scopes |
| :--- | :--- | :--- |
| **Border Radius** | ${r.foundationalFamilies[`border radius`]?.length||0} tokens | CORNER_RADIUS, STROKE_FLOAT, EFFECT_FLOAT, OPACITY |
| **Gap** | ${r.foundationalFamilies.gap?.length||0} tokens | GAP, FLEXBOX, GRID |
| **Padding** | ${r.foundationalFamilies.padding?.length||0} tokens | PADDING, TEXT_CONTENT, WIDTH_HEIGHT |
| **Opacity** | ${r.foundationalFamilies.opacity?.length||0} tokens | OPACITY |
| **Max Width** | ${r.foundationalFamilies[`max-w`]?.length||0} tokens | WIDTH_HEIGHT |
        `}}}},s={render:()=>{let[e,t]=(0,i.useState)(null),n=e=>{navigator.clipboard?.writeText(e),t(e),setTimeout(()=>t(null),1800)};return(0,a.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,padding:`24px`,maxWidth:`1200px`,margin:`0 auto`},children:[(0,a.jsxs)(`div`,{style:{marginBottom:`32px`},children:[(0,a.jsx)(`h1`,{style:{fontSize:`28px`,fontWeight:`700`,color:`var(--uedp-slate-900, #0f172a)`,margin:0},children:`Foundational Tokens`}),(0,a.jsx)(`p`,{style:{color:`var(--uedp-slate-500, #64748b)`,marginTop:`6px`,fontSize:`14px`},children:`Scale definitions for border radius, gap, padding, opacity, and max widths.`}),e&&(0,a.jsxs)(`div`,{style:{marginTop:`12px`,padding:`8px 16px`,backgroundColor:`var(--uedp-emerald-50, #ecfdf5)`,color:`var(--uedp-emerald-700, #047857)`,borderRadius:`6px`,fontSize:`13px`,display:`inline-block`,border:`1px solid var(--uedp-emerald-200, #a7f3d0)`},children:[`✓ Copied `,(0,a.jsx)(`code`,{children:e}),` to clipboard!`]})]}),(0,a.jsxs)(`div`,{style:{backgroundColor:`var(--uedp-white, #ffffff)`,border:`1px solid var(--uedp-slate-200, #e2e8f0)`,borderRadius:`12px`,padding:`24px`,marginBottom:`32px`},children:[(0,a.jsx)(`h2`,{style:{fontSize:`20px`,fontWeight:`600`,color:`var(--uedp-slate-800, #1e293b)`,marginBottom:`16px`},children:`Border Radius Scales`}),(0,a.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(200px, 1fr))`,gap:`16px`},children:r.foundationalFamilies[`border radius`]?.map(e=>(0,a.jsxs)(`div`,{onClick:()=>n(`var(${e.varName})`),style:{border:`1px solid var(--uedp-slate-200, #e2e8f0)`,borderRadius:`8px`,padding:`16px`,backgroundColor:`var(--uedp-slate-50, #f8fafc)`,cursor:`pointer`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`12px`},children:[(0,a.jsx)(`div`,{style:{width:`64px`,height:`64px`,backgroundColor:`var(--uedp-indigo-500, #6366f1)`,borderRadius:`var(${e.varName}, ${e.value})`,boxShadow:`0 4px 6px -1px rgba(99, 102, 241, 0.2)`}}),(0,a.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,a.jsx)(`div`,{style:{fontSize:`13px`,fontWeight:`600`,color:`var(--uedp-slate-800, #1e293b)`},children:e.name}),(0,a.jsx)(`div`,{style:{fontSize:`12px`,color:`var(--uedp-indigo-600, #4f46e5)`,fontFamily:`monospace`,marginTop:`2px`},children:e.value}),(0,a.jsx)(`div`,{style:{fontSize:`11px`,color:`var(--uedp-slate-400, #94a3b8)`,marginTop:`4px`},children:e.varName})]})]},e.name))})]}),(0,a.jsxs)(`div`,{style:{backgroundColor:`var(--uedp-white, #ffffff)`,border:`1px solid var(--uedp-slate-200, #e2e8f0)`,borderRadius:`12px`,padding:`24px`,marginBottom:`32px`},children:[(0,a.jsx)(`h2`,{style:{fontSize:`20px`,fontWeight:`600`,color:`var(--uedp-slate-800, #1e293b)`,marginBottom:`16px`},children:`Gap & Spacing Scale`}),(0,a.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(180px, 1fr))`,gap:`12px`},children:r.foundationalFamilies.gap?.slice(0,20).map(e=>(0,a.jsxs)(`div`,{onClick:()=>n(`var(${e.varName})`),style:{border:`1px solid var(--uedp-slate-200, #e2e8f0)`,borderRadius:`8px`,padding:`12px`,backgroundColor:`var(--uedp-white, #ffffff)`,cursor:`pointer`},children:[(0,a.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,marginBottom:`8px`},children:(0,a.jsx)(`div`,{style:{height:`12px`,width:`min(100px, ${e.value})`,backgroundColor:`var(--uedp-emerald-500, #10b981)`,borderRadius:`2px`}})}),(0,a.jsx)(`div`,{style:{fontSize:`13px`,fontWeight:`600`,color:`var(--uedp-slate-700, #334155)`},children:e.name}),(0,a.jsxs)(`div`,{style:{fontSize:`12px`,color:`var(--uedp-slate-500, #64748b)`,fontFamily:`monospace`},children:[e.value,` (`,e.varName,`)`]})]},e.name))})]}),(0,a.jsxs)(`div`,{style:{backgroundColor:`var(--uedp-white, #ffffff)`,border:`1px solid var(--uedp-slate-200, #e2e8f0)`,borderRadius:`12px`,padding:`24px`},children:[(0,a.jsx)(`h2`,{style:{fontSize:`20px`,fontWeight:`600`,color:`var(--uedp-slate-800, #1e293b)`,marginBottom:`16px`},children:`Opacity Scales`}),(0,a.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(140px, 1fr))`,gap:`12px`},children:r.foundationalFamilies.opacity?.map(e=>(0,a.jsxs)(`div`,{onClick:()=>n(`var(${e.varName})`),style:{border:`1px solid var(--uedp-slate-200, #e2e8f0)`,borderRadius:`8px`,padding:`12px`,backgroundColor:`var(--uedp-slate-50, #f8fafc)`,cursor:`pointer`,textAlign:`center`},children:[(0,a.jsx)(`div`,{style:{width:`48px`,height:`48px`,margin:`0 auto 8px`,backgroundColor:`var(--uedp-slate-900, #0f172a)`,opacity:`var(${e.varName}, ${e.rawValue})`,borderRadius:`6px`}}),(0,a.jsx)(`div`,{style:{fontSize:`12px`,fontWeight:`600`,color:`var(--uedp-slate-800, #1e293b)`},children:e.name}),(0,a.jsx)(`div`,{style:{fontSize:`11px`,color:`var(--uedp-slate-500, #64748b)`,fontFamily:`monospace`},children:e.value})]},e.name))})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [copied, setCopied] = useState<string | null>(null);
    const handleCopy = (text: string) => {
      navigator.clipboard?.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1800);
    };
    return <div style={{
      fontFamily: 'Inter, sans-serif',
      padding: '24px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
        <div style={{
        marginBottom: '32px'
      }}>
          <h1 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: 'var(--uedp-slate-900, #0f172a)',
          margin: 0
        }}>
            Foundational Tokens
          </h1>
          <p style={{
          color: 'var(--uedp-slate-500, #64748b)',
          marginTop: '6px',
          fontSize: '14px'
        }}>
            Scale definitions for border radius, gap, padding, opacity, and max widths.
          </p>
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

        {/* Border Radius */}
        <div style={{
        backgroundColor: 'var(--uedp-white, #ffffff)',
        border: '1px solid var(--uedp-slate-200, #e2e8f0)',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '32px'
      }}>
          <h2 style={{
          fontSize: '20px',
          fontWeight: '600',
          color: 'var(--uedp-slate-800, #1e293b)',
          marginBottom: '16px'
        }}>
            Border Radius Scales
          </h2>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '16px'
        }}>
            {tokensData.foundationalFamilies['border radius']?.map((token: any) => <div key={token.name} onClick={() => handleCopy(\`var(\${token.varName})\`)} style={{
            border: '1px solid var(--uedp-slate-200, #e2e8f0)',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: 'var(--uedp-slate-50, #f8fafc)',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
          }}>
                <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: 'var(--uedp-indigo-500, #6366f1)',
              borderRadius: \`var(\${token.varName}, \${token.value})\`,
              boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.2)'
            }} />
                <div style={{
              textAlign: 'center'
            }}>
                  <div style={{
                fontSize: '13px',
                fontWeight: '600',
                color: 'var(--uedp-slate-800, #1e293b)'
              }}>
                    {token.name}
                  </div>
                  <div style={{
                fontSize: '12px',
                color: 'var(--uedp-indigo-600, #4f46e5)',
                fontFamily: 'monospace',
                marginTop: '2px'
              }}>
                    {token.value}
                  </div>
                  <div style={{
                fontSize: '11px',
                color: 'var(--uedp-slate-400, #94a3b8)',
                marginTop: '4px'
              }}>
                    {token.varName}
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Spacing: Gap & Padding */}
        <div style={{
        backgroundColor: 'var(--uedp-white, #ffffff)',
        border: '1px solid var(--uedp-slate-200, #e2e8f0)',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '32px'
      }}>
          <h2 style={{
          fontSize: '20px',
          fontWeight: '600',
          color: 'var(--uedp-slate-800, #1e293b)',
          marginBottom: '16px'
        }}>
            Gap & Spacing Scale
          </h2>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '12px'
        }}>
            {tokensData.foundationalFamilies['gap']?.slice(0, 20).map((token: any) => <div key={token.name} onClick={() => handleCopy(\`var(\${token.varName})\`)} style={{
            border: '1px solid var(--uedp-slate-200, #e2e8f0)',
            borderRadius: '8px',
            padding: '12px',
            backgroundColor: 'var(--uedp-white, #ffffff)',
            cursor: 'pointer'
          }}>
                <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '8px'
            }}>
                  <div style={{
                height: '12px',
                width: \`min(100px, \${token.value})\`,
                backgroundColor: 'var(--uedp-emerald-500, #10b981)',
                borderRadius: '2px'
              }} />
                </div>
                <div style={{
              fontSize: '13px',
              fontWeight: '600',
              color: 'var(--uedp-slate-700, #334155)'
            }}>
                  {token.name}
                </div>
                <div style={{
              fontSize: '12px',
              color: 'var(--uedp-slate-500, #64748b)',
              fontFamily: 'monospace'
            }}>
                  {token.value} ({token.varName})
                </div>
              </div>)}
          </div>
        </div>

        {/* Opacity */}
        <div style={{
        backgroundColor: 'var(--uedp-white, #ffffff)',
        border: '1px solid var(--uedp-slate-200, #e2e8f0)',
        borderRadius: '12px',
        padding: '24px'
      }}>
          <h2 style={{
          fontSize: '20px',
          fontWeight: '600',
          color: 'var(--uedp-slate-800, #1e293b)',
          marginBottom: '16px'
        }}>
            Opacity Scales
          </h2>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '12px'
        }}>
            {tokensData.foundationalFamilies['opacity']?.map((token: any) => <div key={token.name} onClick={() => handleCopy(\`var(\${token.varName})\`)} style={{
            border: '1px solid var(--uedp-slate-200, #e2e8f0)',
            borderRadius: '8px',
            padding: '12px',
            backgroundColor: 'var(--uedp-slate-50, #f8fafc)',
            cursor: 'pointer',
            textAlign: 'center'
          }}>
                <div style={{
              width: '48px',
              height: '48px',
              margin: '0 auto 8px',
              backgroundColor: 'var(--uedp-slate-900, #0f172a)',
              opacity: \`var(\${token.varName}, \${token.rawValue})\`,
              borderRadius: '6px'
            }} />
                <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: 'var(--uedp-slate-800, #1e293b)'
            }}>
                  {token.name}
                </div>
                <div style={{
              fontSize: '11px',
              color: 'var(--uedp-slate-500, #64748b)',
              fontFamily: 'monospace'
            }}>
                  {token.value}
                </div>
              </div>)}
          </div>
        </div>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};var c=[`AllFoundationalTokens`];export{s as AllFoundationalTokens,c as __namedExportsOrder,o as default};