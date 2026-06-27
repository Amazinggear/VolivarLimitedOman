@echo off
cd /d "%~dp0"
echo Installing dependencies (if needed)...
call npm install
echo Starting WebBay dev server...
start http://localhost:3000
npm run dev
pause