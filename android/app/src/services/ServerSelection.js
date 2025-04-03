// VPN Server Selection (Mock Data & Selection Screen)
export const vpnServers = [
    { id: 1, name: "USA Server", country: "USA", latency: "50ms" },
    { id: 2, name: "Germany Server", country: "Germany", latency: "70ms" },
    { id: 3, name: "India Server", country: "India", latency: "30ms" }
  ];
  
  import React, { useState } from 'react';
  import { View, Text, FlatList, TouchableOpacity } from 'react-native';
  import NetInfo from "@react-native-community/netinfo";
  
  const VpnServerSelection = ({ onSelectServer }) => {
    const [isConnected, setIsConnected] = useState(null);
  
    useEffect(() => {
      const unsubscribe = NetInfo.addEventListener(state => {
        setIsConnected(state.isConnected);
      });
      return () => unsubscribe();
    }, []);
  
    return (
      <View>
        <Text>Select a VPN Server:</Text>
        {isConnected === false && <Text style={{ color: 'red' }}>No Internet Connection</Text>}
        <FlatList
          data={vpnServers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onSelectServer(item)} disabled={!isConnected}>
              <Text>{item.name} - {item.country} ({item.latency})</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };
  
  export default VpnServerSelection;