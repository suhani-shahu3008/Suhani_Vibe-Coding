const fs = require('fs');
const path = require('path');

// Ensure target directories exist
const projectRoot = path.join(__dirname, '..', 'design-system-storybook');
const srcDir = path.join(projectRoot, 'src');
const stylesDir = path.join(srcDir, 'styles');
const componentsDir = path.join(srcDir, 'components');
const storiesDir = path.join(srcDir, 'stories');
const tokensStoriesDir = path.join(storiesDir, 'Tokens');

[srcDir, stylesDir, componentsDir, storiesDir, tokensStoriesDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// 1. Read tokens
const baseTokensPath = path.join(__dirname, '..', 'base-palette-tokens.json');
const foundationalTokensPath = path.join(__dirname, '..', 'foundational-tokens.json');
const figmaFilePath = path.join(__dirname, '..', 'figma_file.json');

const baseTokens = JSON.parse(fs.readFileSync(baseTokensPath, 'utf8'));
const foundationalTokens = JSON.parse(fs.readFileSync(foundationalTokensPath, 'utf8'));
const figmaData = JSON.parse(fs.readFileSync(figmaFilePath, 'utf8'));

console.log('Generating CSS Tokens...');
let cssLines = [
  '/**',
  ' * Figma Tokens generated automatically from base-palette-tokens.json & foundational-tokens.json',
  ' * Design System: Uedp-5 Design System',
  ' */',
  ':root {'
];

const varIdToCssVar = {};
const colorFamilies = {};
const foundationalFamilies = {};

// Process Base Tokens
for (const [family, values] of Object.entries(baseTokens)) {
  if (family === '$extensions') continue;
  colorFamilies[family] = [];

  for (const [shade, data] of Object.entries(values)) {
    if (typeof data !== 'object' || !data.$value) continue;
    const hex = data.$value.hex;
    const varId = data.$extensions && data.$extensions['com.figma.variableId'];
    const cleanVarName = `--uedp-${family}-${shade}`;
    
    cssLines.push(`  ${cleanVarName}: ${hex};`);
    if (varId) {
      const cleanVarId = varId.replace('VariableID:', '').replace(/:/g, '-');
      cssLines.push(`  --uedp-var-${cleanVarId}: var(${cleanVarName});`);
      varIdToCssVar[varId] = cleanVarName;
    }
    colorFamilies[family].push({
      shade,
      hex,
      varName: cleanVarName,
      variableId: varId
    });
  }
}

// Process Foundational Tokens
for (const [category, values] of Object.entries(foundationalTokens)) {
  if (category === '$extensions') continue;
  foundationalFamilies[category] = [];

  for (const [tokenName, data] of Object.entries(values)) {
    if (typeof data !== 'object' || data.$value === undefined) continue;
    const val = data.$value;
    let cssVal = `${val}px`;
    if (category === 'opacity') cssVal = `${val}`;
    else if (category === 'max-w' && typeof val === 'number') cssVal = `${val}px`;
    
    const varId = data.$extensions && data.$extensions['com.figma.variableId'];
    const cleanTokenName = tokenName.replace(/,/g, '-').replace(/\s+/g, '-');
    const cleanVarName = `--uedp-${cleanTokenName}`;

    cssLines.push(`  ${cleanVarName}: ${cssVal};`);
    if (varId) {
      const cleanVarId = varId.replace('VariableID:', '').replace(/:/g, '-');
      cssLines.push(`  --uedp-var-${cleanVarId}: var(${cleanVarName});`);
      varIdToCssVar[varId] = cleanVarName;
    }
    foundationalFamilies[category].push({
      name: tokenName,
      value: cssVal,
      rawValue: val,
      varName: cleanVarName,
      variableId: varId,
      description: data.$description || ''
    });
  }
}

cssLines.push('}\n');

// Write figma-tokens.css
fs.writeFileSync(path.join(stylesDir, 'figma-tokens.css'), cssLines.join('\n'));
console.log('Saved figma-tokens.css successfully with', cssLines.length, 'token definitions.');

// Write tokens data JSON for stories
fs.writeFileSync(
  path.join(srcDir, 'tokens-data.json'),
  JSON.stringify({ colorFamilies, foundationalFamilies, varIdToCssVar }, null, 2)
);

console.log('Token transformation complete.');
