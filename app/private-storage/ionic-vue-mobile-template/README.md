# Environment setup 

1. Make sure you have node locally installed (v 20+) and following packages
    - npm install -g @ionic/cli@latest native-run
2. Make sure you have updated ruby version locally installed
   - brew update
     brew install rbenv ruby-build
   - echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
     source ~/.zshrc
   - echo 'eval "$(rbenv init - bash)"' >> ~/.bash_profile
     source ~/.bash_profile
   - rbenv install
   - rbenv rehash
   - gem install cocoapods
   - rbenv rehash
3. Make sure you have the latest version of xcode installed
4. Make sure you have the latest version of android studio installed

# App setup

1. Open the app in your editor of choice and then run following commands:
   - npm i
   - ionic build
   - ionic cap add android
   - ionic cap add ios
   - npm run make:assets
   - ionic cap copy
   - ionic cap sync
   - start the app in browser
     - ionic serve
   - open app in android studio
     - ionic cap open android
   - open app in xcode
     - ionic cap open ios

## Notice package `@capacitor/filesystem` is used for a simple local storage mechanism
Apple requires privacy info file which describes why are we using filesystem
This file should be created within
- ios
  - App
    - Name it PrivacyInfo.xcprivacy and put the following content in it

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<!--
   PrivacyInfo.xcprivacy
   App

   Created by Name Surname on Date(25.3.25)..
   Copyright (c) 2025 ___ORGANIZATIONNAME___. All rights reserved.
-->
<plist version="1.0">
  <dict>
    <key>NSPrivacyAccessedAPITypes</key>
    <array>

      <dict>
        <key>NSPrivacyAccessedAPIType</key>
        <string>NSPrivacyAccessedAPICategoryFileTimestamp</string>
        <key>NSPrivacyAccessedAPITypeReasons</key>
        <array>
          <string>C617.1</string>
        </array>
      </dict>
    </array>
  </dict>
</plist>
```


This file can also be generate through xcode, or vscode.

