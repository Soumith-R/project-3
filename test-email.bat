@echo off
echo.
echo ================================
echo  Email Functionality Test Suite
echo ================================
echo.

echo Step 1: Checking if server is running...
timeout /t 2 /nobreak >nul

echo Step 2: Testing email API endpoints...
node test-email.js

echo.
echo ================================
echo  Test Complete!
echo ================================
echo.
echo If tests failed, make sure:
echo 1. Server is running (npm run server)
echo 2. .env file is configured with valid email credentials
echo 3. Gmail App Password is used (not regular password)
echo.
pause
