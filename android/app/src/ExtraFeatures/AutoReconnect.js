import VPNManager from 'react-native-vpn';
import NetInfo from '@react-native-community/netinfo';

const autoReconnectVpn = (server) => {
  NetInfo.addEventListener(state => {
    if (!state.isConnected) {
      setTimeout(() => VPNManager.connect({ host: server.name }), 3000);
    }
  });
};