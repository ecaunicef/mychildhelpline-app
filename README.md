# MyChildHelpline App

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

---

### Need Help?

If you face any issues, feel free to create an issue on the GitHub repository or reach out to the development team.


# Explore more from these Useful Links:
- [**Documentation**](https://github.com/ecaunicef/mychildhelpline-app/tree/main/docs/manuals/user-guide)

