# MyChildHelpline App
The Mobile App project consists of 7 repositories as follows:


1. **Mobile App:** This repository contains the source code for the mobile app.
    - Url: https://github.com/ecaunicef/mychildhelpline-app
    - Branch: main
    - Readme: https://github.com/ecaunicef/mychildhelpline-app/blob/main/README.md
    - License: https://github.com/ecaunicef/mychildhelpline-app/blob/main/LICENSE

2. **Admin:** This repository is used for managing data that comes from the mobile app.
    - Url: https://github.com/ecaunicef/admin
    - Branch: main
    - Readme: https://github.com/ecaunicef/admin/blob/main/README.md
    - License: https://github.com/ecaunicef/admin/blob/main/LICENSE

3. **DataSuplier:** This is a microservice that provides REST APIs for displaying data.
    - Url: https://github.com/ecaunicef/datasupplier
    - Branch: main
    - Readme: https://github.com/ecaunicef/datasupplier/blob/main/README.md
    - License: https://github.com/ecaunicef/datasupplier/blob/main/LICENSE

4. **DataImport:** This is another microservice that provides REST APIs for inserting, updating, and deleting data.
    - Url: https://github.com/ecaunicef/dataimport
    - Branch: main
    - Readme: https://github.com/ecaunicef/dataimport/blob/main/README.md
    - License: https://github.com/ecaunicef/dataimport/blob/main/LICENSE

5. **ApiGateway:** The API Gateway is designed to streamline client-service interactions within a microservices architecture. It acts as the single entry point for client requests, receiving each request, identifying the appropriate microservice, and efficiently routing the request to the intended service.
    - Url: https://github.com/ecaunicef/apigateway
    - Branch: main
    - Readme: https://github.com/ecaunicef/apigateway/blob/main/README.md
    - License: https://github.com/ecaunicef/apigateway/blob/main/LICENSE

6. **ChatHelpline:** This service provides a helpline chat feature within the mobile app.
    - Url: https://github.com/ecaunicef/chathelpline
    - Branch: main
    - Readme: https://github.com/ecaunicef/chathelpline/blob/main/README.md
    - License: https://github.com/ecaunicef/chathelpline/blob/main/LICENSE

7. **ConstantFile:**  This repository contains map GeoJSON files, service key files, and classification files, which are used by the DataSupplier and DataImport services.
    - Url: https://github.com/ecaunicef/constantfile
    - Branch: main
    - Readme: https://github.com/ecaunicef/constantfile/blob/main/README.md


# Explore more from these Useful Links:
- [**User Guide**](https://github.com/ecaunicef/mychildhelpline-app/tree/main/docs/manuals/user-guide)

- [**Deployment Guide**](https://github.com/ecaunicef/mychildhelpline-app/tree/main/docs/manuals/deployment-guide)


    

# 📲 My Child Helpline App

> A mobile application developed with React Native to support helpline-related services for children in need.

---

## ⚙️ Prerequisites

Ensure your system meets these requirements before starting:

- **Ruby**: Version 3.3.6 or later (Mac users only)  
- **Java**: Version 17.0.14 or later  
- **Node**: Version 18 or later  

> ✅ _Note: Please complete the full React Native environment setup before running the project._ https://reactnative.dev/docs/set-up-your-environment

---

## 📱 React Native Environment Setup

### 🖥️ macOS and Linux

#### 1. Install Watchman & Node.js

**Option A: Manual install**
- [Watchman](https://formulae.brew.sh/formula/watchman)  
- [Node.js](https://nodejs.org/en/download)

**Option B: Homebrew**
```bash
brew install node
brew install watchman
```

#### 2. Install Java (JDK 17)
```bash
brew install --cask zulu@17
brew info --cask zulu@17
```

Locate the JDK path and open it:
```bash
open /opt/homebrew/Caskroom/zulu@17/<version>   # Apple Silicon
# or
open /usr/local/Caskroom/zulu@17/<version>      # Intel Macs
```

Double-click the `.pkg` file to install. Then add the following to your `~/.zshrc` or `~/.bash_profile`:

```bash
export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
```

#### 3. Install Android Studio

[Download Android Studio](https://developer.android.com/studio)

#### 4. Configure Android SDK

- Open Android Studio → **More Actions → SDK Manager**
- Under **SDK Platforms**:
  - Enable _Show Package Details_
  - Check:
    - Android SDK Platform 35
    - Google APIs ARM 64 v8a System Image (for Apple Silicon)

- Under **SDK Tools**:
  - Enable _Show Package Details_
  - Check:
    - Android SDK Build-Tools 35.0.0

#### 5. Set Environment Variables

In your shell config file (`~/.zshrc` or `~/.bash_profile`):

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

📘 **Reference**: [React Native Setup (macOS)](https://reactnative.dev/docs/set-up-your-environment?os=macos)

---

### 🖥️ Windows

#### 1. Install Node.js and Java

**Option A: Chocolatey**
```bash
choco install -y nodejs-lts microsoft-openjdk17
```

**Option B: Manual**
- [Node.js](https://nodejs.org/en/download)  
- [OpenJDK 17](https://learn.microsoft.com/en-us/java/openjdk/download)

#### 2. Install Android Studio

[Download Android Studio](https://developer.android.com/studio)

#### 3. Configure Android SDK

- Open Android Studio → **More Actions → SDK Manager**
- Under **SDK Platforms**:
  - Enable _Show Package Details_
  - Check:
    - Android SDK Platform 35
    - Google APIs Intel x86 Atom System Image

- Under **SDK Tools**:
  - Enable _Show Package Details_
  - Check:
    - Android SDK Build-Tools 35.0.0

#### 4. Set Environment Variables

- Go to Control Panel → User Accounts → Environment Variables
- Add:
  - **ANDROID_HOME**: path to SDK (e.g., `C:\Users\<YourUser>\AppData\Local\Android\Sdk`)
  - Add to `Path`:
    - `%ANDROID_HOME%\emulator`
    - `%ANDROID_HOME%\platform-tools`

📘 **Reference**: [React Native Setup (Windows)](https://reactnative.dev/docs/0.77/set-up-your-environment?os=windows&platform=android)

---

## 🧪 Clone the Repository

```bash
git clone https://github.com/ecaunicef/mychildhelpline-app.git
cd mychildhelpline-app
```

---

## 📦 Install Dependencies

```bash
npm install
```

#### iOS only: Install CocoaPods

```bash
cd ios
pod install --repo-update
cd ..
```

---

## ▶️ Run the Project

### Android
```bash
npx react-native run-android
```

### iOS
```bash
npx react-native run-ios
```

---

## 🔁 Start Metro Bundler

In a separate terminal:

```bash
npm start
```


---

## Configuration for React Native TTS

### Modify `TextToSpeech.m` file

File path:

```
node_modules/react-native-tts/ios/TextToSpeech/TextToSpeech.m
```

Replace the existing `stop` method with the following updated version:

**Before:**

```objc
RCT_EXPORT_METHOD(stop:(BOOL *)onWordBoundary resolve:(RCTPromiseResolveBlock)resolve reject:(__unused RCTPromiseRejectBlock)reject)
{
    AVSpeechBoundary boundary;

    if(onWordBoundary != NULL && onWordBoundary) {
        boundary = AVSpeechBoundaryWord;
    } else {
        boundary = AVSpeechBoundaryImmediate;
    }

    BOOL stopped = [self.synthesizer stopSpeakingAtBoundary:boundary];

    resolve([NSNumber numberWithBool:stopped]);
}
```

**After:**

```objc
RCT_EXPORT_METHOD(stop:(BOOL)onWordBoundary resolve:(RCTPromiseResolveBlock)resolve reject:(__unused RCTPromiseRejectBlock)reject)
{
    AVSpeechBoundary boundary;
    if (onWordBoundary) {
        boundary = AVSpeechBoundaryWord;  // Boundary at word boundary
    } else {
        boundary = AVSpeechBoundaryImmediate;  // Immediate boundary (stop right now)
    }

    BOOL stopped = [self.synthesizer stopSpeakingAtBoundary:boundary];

    resolve([NSNumber numberWithBool:stopped]);
}
```

---

## Summary

1. Ensure prerequisites are installed (Ruby, Java, Node).
2. Clone the repository from GitHub.
3. Install npm dependencies and run `pod install` for iOS.
4. Run the project on your desired platform (Android or iOS) and start Metro.
5. Update `react-native-tts` configuration for smooth functionality.

---

### Need Help?

If you face any issues, feel free to create an issue on the GitHub repository or reach out to the development team.
