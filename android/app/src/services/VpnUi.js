// UI Handling for VPN Connection Status
import { useState } from 'react';

export const useVpnStatus = () => {
  const [vpnConnected, setVpnConnected] = useState(false);

  const toggleVpn = async (server) => {
    if (vpnConnected) {
      await disconnectVpn();
      setVpnConnected(false);
    } else {
      await connectToVpn(server);
      setVpnConnected(true);
    }
  };

  return { vpnConnected, toggleVpn };
};
