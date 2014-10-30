BookTime
========


## Read List
0. [Git Workflows](https://www.atlassian.com/git/workflows#!workflow-gitflow)
0. [Google Cloud - Mobile Backend](https://developers.google.com/cloud/samples/mbs/)
0. [Setup PhoneGap on Windows](http://chrisbitting.com/2014/01/06/installing-starting-with-phonegap-on-windows-for-cross-platform-mobile-development/)
0. [Github Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)



## Step by Step build
`setx` command need to restart cmd.exe

0. Install [wget-1.11.4-1-setup.exe](http://downloads.sourceforge.net/gnuwin32/wget-1.11.4-1-setup.exe)
 - `setx path "%path%;%ProgramFiles(x86)%\GnuWin32\bin"`
0. Install node.js from [nodejs.org](http://nodejs.org/) (use default settings).
 - `wget http://nodejs.org/dist/v0.10.29/x64/node-v0.10.29-x64.msi`
 - `start node-v0.10.29-x64.msi`
0. Install npm from [nodejs.org](http://nodejs.org/dist/npm)  .
 - `wget http://nodejs.org/dist/npm/npm-1.4.12.zip`
 - Extrace to node.js install path `%ProgramFiles(x86)%/nodejs`
 - `setx path "%path%;%appdata%\npm"`
 - `npm version`
0. Install ant
 - `npm install -g ant`
 - `setx path "%path%;%appdata%\npm\node_modules\ant\ant\bin"`
 - `ant -version`
0. Install PhoneGap
 - `npm install -g phonegap`
 - `phonegap --version` will show help
0. Install Cordova
 - `npm install –g cordova`
 - `cordova --version` will show help
0. Install Android SDK
 - [Get the Android SDK](https://developer.android.com/sdk/index.html)
 - `setx ANDROID_HOME "<installation location>\android-sdk-windows"`
 - `setx PATH "%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools"`
 - `android -h`
0. Clone 'BookTime' from github
 - 
0. Install MongoDB
- [Get MongoDB](http://www.mongodb.org/)
0. Install Grunt 
- `npm install -g grunt-cli`
- http://localhost:3003/
- คำสั่ง grunt copy จะ copy จาก MEAN\public ไป phonegap\web
- ถ้ารัน host ด้วย grunt ไว้  ทันทีที่มีไฟล์ถูกแก้ไข ภายใต้ MEAN\public  มันก็จะรัน grunt copy ให้ อัตโนมัติ
