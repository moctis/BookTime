BookTime
========


## Read List
0. [Git Workflows](https://www.atlassian.com/git/workflows#!workflow-gitflow)
0. [Google Cloud - Mobile Backend](https://developers.google.com/cloud/samples/mbs/)
0. [Setup PhoneGap on Windows](http://chrisbitting.com/2014/01/06/installing-starting-with-phonegap-on-windows-for-cross-platform-mobile-development/)
0. [Github Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
0. [onsenui.io](http://onsenui.io/)
0. [Onsen UI and PhoneGap – Getting Started](http://thejackalofjavascript.com/onsen-ui-and-phonegap-getting-started/)
0. [MEAN.JS](http://meanjs.org/);
0. [MEAN.io vs MEAN.JS](http://www.creativeworkline.com/2014/05/meanio-vs-meanjs-comparison/)
0. [Mobile Apps with Phonegap and Yeoman](http://lucaspaulger.com/javascript/2013/09/25/Mobile-apps-Phonegap-Yeoman/)


## Step by Step build
After run `setx` command, it need to restart cmd.exe

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
0. Instan MongoDB
 - [Get from MongoDB - Downloads](http://www.mongodb.org/downloads)
0. Clone 'BookTime' from github
 -
0. Install MongoDB
 - [Get MongoDB](http://www.mongodb.org/)
0. Install Grunt
 - `npm install -g grunt-cli`
 - run grunt => Drive:\GitHub\BookTime\MEAN>grunt แล้วเปิด http://localhost:3003/ ที่ browser
 - คำสั่ง grunt copy จะ copy จาก MEAN\public ไป phonegap\web
 - ถ้ารัน host ด้วย grunt ไว้  ทันทีที่มีไฟล์ถูกแก้ไข ภายใต้ MEAN\public  มันก็จะรัน grunt copy ให้ อัตโนมัติ

0. Run
 - moc mongo
 - D:\GitHub\BookTime\MEAN>grunt
 - moc phonegap serve
0. ระวังเข้า Git
 - MongoDB
 - node-module
0. css ใช้ Ionic เป็นหลัก
 - ng => angular
 - แก้ ss ที่ mean/public/module/core/css
 - ดู rount ทุกอัน /config เช่น ..modules/font/config
 - ดู css  ทุกอัน /config เช่น ..modules/font/css
 - ไฟล์รูป D:\GitHub\BookTime\MEAN\public\res\screen\share\2x

0. Angular-carousel
 - เนื่องจากคำนวณ 3DTransform ระหว่าง slide ซึ่งต่างจากของ angular-boostrap ทำให้การแสดงผลดู continous
 - [on git] (https://github.com/revolunet/angular-carousel)
 - [demo] (http://blog.revolunet.com/angular-carousel/)
 - [code of demo] (https://github.com/revolunet/angular-carousel/blob/master/index.html)
0. etc
 - http://www.dragsponsive.com/
 - http://www.responsivewebmobile.com/app/webroot/rwm_slide_panel/#


-http://blog.credera.com/technology-insights/microsoft-solutions/modern-web-development-best-practices-powered-grunt-js-part-2-diving/
