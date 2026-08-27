#!/usr/bin/env node

/**
 * Deployment helper for Vercel.
 * Checks build prerequisites, compiles Storybook static build, and verifies output.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 [Deploy-Vercel] Starting pre-deployment verification...');

try {
  // 1. Run type check
  console.log('🔍 [1/3] Running TypeScript compilation check...');
  execSync('npx tsc --noEmit', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
  console.log('✅ TypeScript check passed cleanly!');

  // 2. Run Storybook build
  console.log('📦 [2/3] Building static Storybook bundle...');
  execSync('npm run build-storybook', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
  console.log('✅ Storybook static build generated!');

  // 3. Verify output directory
  const outputDir = path.join(__dirname, '..', 'storybook-static');
  if (fs.existsSync(outputDir) && fs.existsSync(path.join(outputDir, 'index.html'))) {
    console.log('🎉 [3/3] storybook-static/ verified and ready for Vercel deployment!');
    console.log('To deploy to Vercel: run "npx vercel --prod"');
  } else {
    throw new Error('storybook-static/index.html was not found!');
  }
} catch (error) {
  console.error('❌ Deployment check failed:', error.message);
  process.exit(1);
}
