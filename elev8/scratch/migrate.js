const { spawn } = require('child_process');
const p = spawn('npx.cmd', ['prisma', 'migrate', 'dev', '--name', 'json_resume_theme'], { env: { ...process.env, CI: 'true' } });
p.stdout.on('data', d => console.log(d.toString()));
p.stderr.on('data', d => console.error(d.toString()));
p.on('close', code => console.log('Exited', code));
