import React from "react";
import { useEffect } from "react";
import { Pressable, Button, Text, ImageBackground, View, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { BottomNavigation } from "react-native-paper";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from '../../../firebase';
import { background4, batas, cek, Logo, Background, Background1, Background3, Home1, Home2, Account1, Account2, Profile, Mobil, Ceklis, Baju } from '../../assets'



export default function Login({ navigation }) {
  const [email, emaila] = React.useState('');
  const [isSignedin, setSignedIn] = React.useState('false');
  const [password, passworda] = React.useState('');



  const SignInUser = async() => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        setSignedIn(true);
        navigation.replace('Home');

      })
      .catch((re) => {
      Alert.alert("Mohon isi email dan password dengan benar  ",re.message)
      })
  }

  // const auth = getAuth();
  // signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user=>{
  //     if(user){
  //       navigation.navigate("HomeScreen")
  //     }
  //   })
  //     return unsubscribe

  //   }, [])

  // const handlelogin = ()=>{

  //   signInWithEmailAndPassword(auth, email, password)
  //   .then(userCredentials=>{
  //     console.log('Logged in With:',user.email);
  //   })
  //   .catch(error=>alert(error.message))
  // }

  return (

    <View style={styles.container}>
      <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
        <View style={styles.logofadal}>
          <Image
            style={styles.logo}
            source={Logo}
          />

          <Text style={styles.id}>Silahkan Masukkan ID</Text>

        </View>
        <View>
          <KeyboardAvoidingView>
            <TextInput
              style={styles.input}
              onChangeText={text => emaila(text)}
              value={email}
              placeholder="Masukkan Email"
            />
          </KeyboardAvoidingView>

          <KeyboardAvoidingView>
            <TextInput

              style={styles.input}
              onChangeText={text => passworda(text)}
              value={password}
              placeholder="Masukkan Password"

              secureTextEntry
            />
          </KeyboardAvoidingView>
        </View>

        <View style={styles.fixToText}>
           <TouchableOpacity style={styles.login} onPress={SignInUser}>
                <Text style={styles.tekslogin}>LOGIN</Text> 
            </TouchableOpacity>
        </View>
        
        <View style={styles.disini}>
          <Text style={styles.akun}>Belum memiliki akun? Silahkan mendaftar terlebih dahulu</Text>

          <View style={styles.fixToText2}>
            <TouchableOpacity onPress={() => navigation.navigate('Daftar')} >
              <Text style={styles.daftar}>Daftar</Text>
            </TouchableOpacity>
          </View>

          {/* <Pressable onPress={onPressFunction}>
      <Text>I'm pressable!</Text>
      </Pressable> https://reactnative.dev/docs/pressable */}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: 'black',
    backgroundColor: 'white',

  },
  container: {
    flex: 1,
  },
  logo: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    flex: 1,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: "center",

  },
  fixToText2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: "center",
    marginTop: 25,
    
  },
  logofadal: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  akun: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    color: 'white',
  },
  disini: {
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  id: {
    color: 'black'
  },
  daftar: {
    color: 'blue',
    fontWeight: 'bold',
    top: -10,
    textDecorationLine: 'underline',
  },
  login: {
    borderColor:'black',
    backgroundColor: 'skyblue',
    marginTop:10,
    height:40,
    width:200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    borderRadius:40,
    borderWidth:1,
    
  },
  tekslogin:{
    color:'black',
    fontWeight:'500',
  },
});

