# MyChildHelpline App
The Mobile App project consists of 7 repositories as follows:

1. Mobile App: This repository contains the source code for the mobile app.
    Url: https://github.com/ecaunicef/mychildhelpline-app
    Branch: main
    Readme: https://github.com/ecaunicef/mychildhelpline-app/blob/main/README.md
    License: https://github.com/ecaunicef/mychildhelpline-app/blob/main/LICENSE

2. Admin: This repository is used for managing data that comes from the mobile app.
    Url: https://github.com/ecaunicef/admin
    Branch: main
    Readme: https://github.com/ecaunicef/admin/blob/main/README.md
    License: https://github.com/ecaunicef/admin/blob/main/LICENSE

3. DataSuplier: This is a microservice that provides REST APIs for displaying data.
    Url: https://github.com/ecaunicef/datasupplier
    Branch: main
    Readme: https://github.com/ecaunicef/datasupplier/blob/main/README.md
    License: https://github.com/ecaunicef/datasupplier/blob/main/LICENSE

4. DataImport: This is another microservice that provides REST APIs for inserting, updating, and deleting data.
    Url: https://github.com/ecaunicef/dataimport
    Branch: main
    Readme: https://github.com/ecaunicef/dataimport/blob/main/README.md
    License: https://github.com/ecaunicef/dataimport/blob/main/LICENSE

5. ApiGateway: The API Gateway is designed to streamline client-service interactions within a microservices architecture. It acts as the single entry point for client requests, receiving each request, identifying the appropriate microservice, and efficiently routing the request to the intended service.
    Url: https://github.com/ecaunicef/apigateway
    Branch: main
    Readme: https://github.com/ecaunicef/apigateway/blob/main/README.md
    License: https://github.com/ecaunicef/apigateway/blob/main/LICENSE

6. ChatHelpline: This service provides a helpline chat feature within the mobile app.
    Url: https://github.com/ecaunicef/chathelpline
    Branch: main
    Readme: https://github.com/ecaunicef/chathelpline/blob/main/README.md
    License: https://github.com/ecaunicef/chathelpline/blob/main/LICENSE

7. ConstantFile:  This repository contains map GeoJSON files, service key files, and classification files, which are used by the DataSupplier and DataImport services.
    Url: https://github.com/ecaunicef/constantfile
    Branch: main
    Readme: https://github.com/ecaunicef/constantfile/blob/main/README.md


# Explore more from these Useful Links:
- [**User Guide**](https://github.com/ecaunicef/mychildhelpline-app/tree/main/docs/manuals/user-guide)

- [**Deployment Guide**](https://github.com/ecaunicef/mychildhelpline-app/tree/main/docs/manuals/deployment-guide/Deployment-Guide-MyChild-Helpline-Platform.doc)

- [**Notification Service Guide**](https://github.com/ecaunicef/mychildhelpline-app/tree/main/docs/manuals/deployment-guide/Setup-Notifcation-Service-MyChild-Helpline.docx)
    
## Prerequisites

Ensure your system meets these requirements before starting:

-   **Ruby**: Version 3.3.6 or later
-   **Java**: Version 17.0.14 or later
-   **Node.js**: Version 18 or later

> **Note**: Complete the React Native Environment Setup before proceeding.

## Clone the Repository

Clone the project from GitHub:

```sh
git clone https://github.com/ecaunicef/mychildhelpline-app.git
cd mychildhelpline-app
```

## Install Dependencies

### Install npm Dependencies:

```sh
npm install
```

### Install CocoaPods for iOS:

```sh
cd ios
pod install --repo-update
cd ..
```

## Run the Project

### Android:

Run the following command to launch the app on Android:

```sh
npx react-native run-android
```

### iOS:

Run the following command to launch the app on iOS:

```sh
npx react-native run-ios
```

## Start the Metro Bundler

In a separate terminal, start Metro:

```sh
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

