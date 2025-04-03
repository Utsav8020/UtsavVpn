# React Native VPN App

## Project Overview

This is a **React Native VPN App** that allows users to:

- **Authenticate** using Firebase
- **Connect to a VPN server** with auto-reconnect
- **Select the best VPN server** based on latency
- **Receive push notifications** for VPN status
- **Support multiple languages** with localization
- **Enable dark mode** (if needed)

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/react-native-vpn.git
   cd react-native-vpn
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Configure Firebase:

   - Create a Firebase project.
   - Enable Authentication.
   - Replace `firebaseConfig` in `firebase.js` with your credentials.

4. Run the project:

   ```sh
   npm start
   ```

## Features

### 1. Authentication (Firebase)

- Users can **sign up and log in** using Firebase Authentication.
- Implemented in `LoginScreen.js` and `RegisterScreen.js`.

### 2. VPN Connection

- Users can connect to a VPN server.
- Auto-reconnect if the connection drops.
- Implemented in `VpnScreen.js`.

### 3. Server Selection Based on Latency

- The app selects the best VPN server automatically.
- Implemented in `VpnScreen.js`.

### 4. Push Notifications

- Users get notified when they connect/disconnect from VPN.
- Implemented using `react-native-push-notification`.

### 5. Multi-language Support

- Supported languages: **English, German, Hindi**.
- Implemented using `react-native-localize`.

### 6. Dark Mode

- Can be enabled using React Native Appearance API.

## Future Improvements

- **More server locations**
- **Custom themes**
- **Advanced security features**

