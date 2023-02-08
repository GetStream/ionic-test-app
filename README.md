# Stream Chat Angular SDK Ionic app for bug reproduction

## Install dependencies

```
npm install
```

## Provide your credentials

In `src/app/environments/environment.ts` provide the necessary Stream credentials to run the application.

## Build

```
npm run build
```

## Run on iOS

This step assumes that you have the necessary Xcode setup on your local machine.

```
npx cap copy ios
npx cap open ios
```
