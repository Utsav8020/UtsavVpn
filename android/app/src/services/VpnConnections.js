// VPN Connection Handling
import VpnModule from 'react-native-vpn';

export const requestPermissions = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (error) {
    console.error("Permission Error:", error);
    return false;
  }
};

export const connectToVpn = async (server) => {
  try {
    const permissionGranted = await requestPermissions();
    if (!permissionGranted) {
      console.error("Permission denied");
      return;
    }

    console.log(`Connecting to ${server.name}...`);
    await VpnModule.connect({
      address: server.name,
      username: 'vpnUser',
      password: 'vpnPass'
    });
    console.log(`Connected to ${server.name}!`);
  } catch (error) {
    console.error("VPN Connection Error:", error);
  }
};

export const disconnectVpn = async () => {
  try {
    await VpnModule.disconnect();
    console.log("VPN Disconnected");
  } catch (error) {
    console.error("VPN Disconnection Error:", error);
  }
};