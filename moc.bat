@echo off
cd /d %~dp0
if "%1%" == ""          goto USAGE
if "%1%" == "help"      goto USAGE
if "%1%" == "init"      goto INIT
if "%1%" == "pub"       goto PUB
if "%1%" == "phonegap"  goto PHONEGAP
if "%1%" == "mongo"     goto MONGO
goto HELP



:USAGE
echo.
echo Usage: moc [command] [arguments]
echo.
echo Commands:
echo    pub build                pub build and copy to phonegap
echo    pub serve                pub serve for http://192.168.1.115:8080
echo    pub [arguments]          pub command run at ./website folder
echo.
echo    phonegap serve           phonegap serve for http://localhost:3000
echo    phonegap [arguments]     phonegap command run at ./phonegap
echo.
echo    init                     init things that github ignored.
echo    help                     output usage information
echo.
goto :EOF



:PUB
cd /d %~dp0/website
if "%2%" == "build"  goto PUB_BUILD
if "%2%" == "serve"  goto PUB_SERVE
%*
goto :EOF



:PUB_BUILD
call pub build
if NOT ERRORLEVEL 0 goto :eof

robocopy build\web ..\phonegap\www /E /NJH /NJS
goto :EOF



:PUB_SERVE
call pub serve --hostname=192.168.1.115
goto :EOF



:PHONEGAP
cd /d %~dp0/phonegap
echo on
%*
goto :EOF



:INIT
echo : pub get
cd /d %~dp0/website
call pub get

echo : cordova platform add android
cd /d %~dp0/phonegap
call cordova platform add android
goto :EOF



:MONGO
if not exist "%~dp0/mongo/db" mkdir "%~dp0/mongo/db"
mongod --dbpath="%~dp0/mongo/db"

goto :EOF
