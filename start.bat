@echo off

echo Starting the bot..
call npm start

if NOT ["%errorlevel%"]==["0"] (
	pause
	exit /b %errorlevel%
)
