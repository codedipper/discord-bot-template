@echo off

echo Installing dependencies..
call npm i

if NOT ["%errorlevel%"]==["0"] (
	pause
	exit /b %errorlevel%
)
