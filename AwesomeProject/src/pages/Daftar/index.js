import React from "react";
import {Pressable,Button, Text, ImageBackground, View, Image,SafeAreaView, StyleSheet, TextInput,Alert,TouchableOpacity,  } from "react-native";
import { BottomNavigation } from "react-native-paper";
import {db} from '../../../firebase';
import { addDoc, collection,getDocs, setDoc,doc } from "firebase/firestore/lite";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {authentication} from '../../../firebase'; 
import firestore from "@react-native-firebase/app";
import { background4, batas, cek, Logo, Background, Background1, Background3, Home1, Home2, Account1, Account2, Profile, Mobil, Ceklis, Baju } from '../../assets'


export default function Daftar({navigation}) {

  const [email, emaila] = React.useState('');
  const [alamat,alamata] = React.useState('');
  const [pass,passa] = React.useState('');
  const [nama,namaa] = React.useState('');
  const [notel, notela] = React.useState('');
  const image = { uri: "https://cdn.discordapp.com/attachments/511466864925343744/916519700714913812/background-159244_640.png" };
   
  
  
  // const SignupUser = async() =>{
   
  //   createUserWithEmailAndPassword(authentication,email,pass).then((cred)=>{
      
  //     addDoc(collection(db, "users",cred.user.uid),{
  //       Nama:nama,
  //       Alamat:alamat,
  //     Notel:notel,
        
  //     }), 
        
        
      
  //     console.log("Document written with ID: ", docRef.id); 
  //     }
  //   )
  // }

  const SignupUser = async() =>{
   
    createUserWithEmailAndPassword(authentication,email,pass)
    .then(cred=>{
      setDoc(doc(db,"user",cred.user.uid),{
        Nama:nama,
        Notel:notel,
        Alamat:alamat,
      })
      
      
      Alert.alert("Anda Berhasil Mendaftar")
      console.log(cred)
      navigation.replace('Login')
      
    })
    .catch((cred)=>{
      console.log(cred);
      Alert.alert("Mohon isi email dan password dengan benar  ")
    })
  }
// const SignupUser = async() =>{
   
//   const credential = await createUserWithEmailAndPassword(authentication,email,pass);
//   const {uid} = credential;
//   const user={
//     Nama:nama,
//     Alamat:alamat,
//   Notel:notel,
//   };
//   await db.collection("user").doc("test").set(user);
  
 
// }

  // const SignupUser = async() =>{
   
  //   createUserWithEmailAndPassword(authentication,email,pass)
  //   .then((re)=>{
      
  //     console.log(re)
      
  //   })
  //   .catch((re)=>{
  //     console.log(re);
  //   })
  // }
  // const citiesRef = collection(db, "cities")
  // const docRef =async ()=>{  
  //   await addDoc(collection(db, 'user').doc(creda.user.uid).set({
  //   name: nama,
  //   Alamat: alamat,
  // }));
  // console.log("Document written with ID: ", docRef.id);
  // }


  return (
    
    <View style={styles.container}>
    <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
    <View style={styles.logofadal}>
    <Image
      style={styles.logo}
      source={Logo}
    />
    </View>
   
    <TextInput
      style={styles.input}
      onChangeText={text=>namaa(text)}
      value={nama}
      placeholder="Nama"
    />
   
    <TextInput
      style={styles.input}
      onChangeText={text=>alamata(text)}
      value={alamat}
      placeholder="Alamat"
    />
    <TextInput
      style={styles.input}
      onChangeText={text=>notela(text)}
      value={notel}
      placeholder="No Telepon"
      keyboardType="numeric"
    />



    <TextInput
      style={styles.input}
      onChangeText={text=>emaila(text)}
      value={email}
      placeholder="Email"
    />




    
    <TextInput
      
      style={styles.input}
      onChangeText={text=>passa(text)}
      value={pass}
      placeholder="Masukkan Password" 
      secureTextEntry
    />
 



    <View style={styles.fixToText}>
      <TouchableOpacity style={styles.login} onPress={SignupUser}>
         <Text style={styles.tekslogin}>DAFTAR</Text> 
      </TouchableOpacity>
    </View>
    </ImageBackground>
  </View>
);
}
;

const styles = StyleSheet.create({
input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
  borderRadius:10,
  borderColor:'black',
  backgroundColor:'white',
},
container: {
  flex: 1,
},
logo: {
  width:150,
  height:150,
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
  color:'white',
},
logofadal: {
  alignItems: 'center',
  justifyContent: 'center',
},
ButtonDaftar:{
  backgroundColor: "black",
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
  borderRadius:10,
  borderWidth:1,
  
},
tekslogin:{
  color:'black',
  fontWeight:'500',
},
});