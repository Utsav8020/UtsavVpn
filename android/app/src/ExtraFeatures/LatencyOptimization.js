import { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export const vpnServers = [
  { id: 1, name: "USA Server", country: "USA", latency: 50 },
  { id: 2, name: "Germany Server", country: "Germany", latency: 70 },
  { id: 3, name: "India Server", country: "India", latency: 30 }
];

const selectBestServer = () => {
  return vpnServers.reduce((best, server) => (server.latency < best.latency ? server : best));
};

export const VpnScreen = () => {
  const [selectedServer, setSelectedServer] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const connectVpn = async () => {
    const bestServer = selectBestServer();
    try {
      await VPNManager.connect({ host: bestServer.name });
      setIsConnected(true);
      setSelectedServer(bestServer);
      autoReconnectVpn(bestServer);
      sendNotification("VPN Connected", `Connected to ${bestServer.name}`);
    } catch (error) {
      console.error("VPN Connection Error:", error);
    }
  };

  return (
    <View>
      <Text>VPN Servers</Text>
      <Button title="Connect to Best Server" onPress={connectVpn} />
      {isConnected && <Text>Connected to {selectedServer.name}</Text>}
    </View>
  );
};