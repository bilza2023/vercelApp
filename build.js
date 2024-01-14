// const { execSync } = require('child_process');
const {  execSync } = require('node:child_process');

try {
  // Step 1: Git add
  execSync('git add .');

  // Step 2: Git commit
  execSync('git commit -m "Your commit message here"');

  // Step 3: Git push
  execSync('git push -u origin master');
  console.error('Done:');

} catch (error) {
  console.error('Error:', error.message);
}
