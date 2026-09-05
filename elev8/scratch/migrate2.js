const { exec } = require('child_process');
const proc = exec('npx prisma migrate dev --name json_resume_theme --create-only');
proc.stdout.on('data', data => {
  console.log(data);
  if (data.includes('y/N')) {
    proc.stdin.write('y\n');
  }
});
proc.stderr.on('data', data => console.error(data));
proc.on('close', code => console.log('Exited', code));
