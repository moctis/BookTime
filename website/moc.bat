@echo off
echo %1%

if %1% == build goto BUILD
if %1% == serve goto SERVE

:HELP
echo moc build      to build
echo moc serve      to serve
pause
goto :EOF



:BUILD
call pub build
if NOT ERRORLEVEL 0 goto :eof

robocopy build\web ..\phonegap\www /E /NJH /NJS
goto :EOF



:SERVE
call pub serve --hostname=192.168.1.115
goto :EOF