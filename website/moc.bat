@echo off
if "%1%" == ""          goto HELP
if "%1%" == "init"      goto INIT
if "%1%" == "build"     goto BUILD
if "%1%" == "serve"     goto SERVE
goto HELP


:HELP

echo.
echo Usage: moc [command] [arguments]
echo.
echo Commands:
echo    init                : cordova platform add android
echo    build               : pub build
echo    serve               : moc serve web
echo    serve web           : pub serve --hostname=192.168.1.115
echo    serve phonegap      : phonegap serve
echo.
goto :EOF



:INIT
echo Trying to add platform android
cd ..\phonegap
call cordova platform add android
cd ..\website

goto :EOF




:BUILD
call pub build
if NOT ERRORLEVEL 0 goto :eof

robocopy build\web ..\phonegap\www /E /NJH /NJS
goto :EOF



:SERVE
if "%2%" == ""          goto BUILD_JS
if "%2%" == "js"      	goto BUILD_JS
if "%2%" == "phonegap"  goto BUILD_PHONEGAP
goto HELP

:BUILD_JS
call pub serve --hostname=192.168.1.115
goto :EOF

:BUILD_PHONEGAP
cd ..\phonegap
phonegap serve
cd ..\website
goto :EOF