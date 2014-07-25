@echo off
if "%1%" == ""          goto HELP
if "%1%" == "init"      goto INIT
if "%1%" == "build"     goto BUILD
if "%1%" == "serve"     goto SERVE

:HELP

echo.
echo Usage: moc [command] [arguments]
echo.
echo Commands:
echo    init            init
echo    build           call pub build
echo    serve           call pub serve --hostname=192.168.1.115
echo.
goto :EOF



:INIT


goto :EOF




:BUILD
call pub build
if NOT ERRORLEVEL 0 goto :eof

robocopy build\web ..\phonegap\www /E /NJH /NJS
goto :EOF



:SERVE
call pub serve --hostname=192.168.1.115
goto :EOF