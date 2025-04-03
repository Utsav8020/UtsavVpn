import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AuthContext from './AuthContext';

export const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={() => login(email, password)} />
      <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};


import { i18n } from './i18n';

export const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>{i18n.t('login')}</Text>
      <Button title={i18n.t('register')} onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export const RegisterScreen = ({ navigation }) => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Register</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} secureTextEntry onChangeText={setPassword} />
      <Button title="Register" onPress={() => register(email, password)} />
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};