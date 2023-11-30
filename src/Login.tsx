import {
  TextInput,
  View,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';

const Login = ({navigation}) => {
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState('');

  useEffect(() => {
    // Disable automatic app verification and fallback for phone authentication
    firebase.auth().settings.appVerificationDisabledForTesting = true;

    console.log(firebase.auth().settings.appVerificationDisabledForTesting);
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber(); // unsubscribe on unmount
  }, []);

  const onAuthStateChanged = user => {
    if (user) {
      // User is logged in, handle navigation or UI changes
      navigation.navigate('Home');
      console.log('User logged in:', user);
    }
  };

  const signInWithPhoneNumber = async phoneNumber => {
    try {
      setLoading(true);
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      console.log(confirmation);
    } catch (error) {
      console.error('Error sending verification code:', error);
    } finally {
      setLoading(false);
    }
  };

  const confirmCode = async () => {
    try {
      setLoading(true);
      await confirm.confirm(code);
    } catch (error) {
      console.error('Invalid code:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{ flex: 1 }}
  >
    <View style={styles.container}>
      <Image
        source={require('../Icon/LoginPhone.jpg')}
        style={{height: 300, width: 300}}
      />
      <View style={[styles.input, {justifyContent: 'space-between'}]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../Icon/mobile-app.png')}
            style={{height: 30, width: 30}}
          />
          <TextInput
            value={number}
            style={{marginLeft: 10}}
            onChangeText={text => setNumber(text)}
            placeholder="Mobile Number"
          />
        </View>
        <TouchableOpacity onPress={() => signInWithPhoneNumber(number)}>
          <Text style={{fontSize: 16, color: '#000'}}>| Sent OTP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.input}>
        <Image
          source={require('../Icon/password.png')}
          style={{height: 30, width: 30}}
        />
        <TextInput
          value={code}
          style={{marginLeft: 10}}
          onChangeText={text => setCode(text)}
          placeholder="Enter OTP"
        />
      </View>

      <TouchableOpacity style={styles.LoginContainer}>
        <Text style={styles.LoginText} onPress={() => confirmCode(code)}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#f2f2f2',
    width: '90%',
    color: '#000',
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  LoginContainer: {
    backgroundColor: '#0000ff',
    width: '80%',
    borderRadius: 10,
    padding: 10,
  },
  LoginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default Login;
