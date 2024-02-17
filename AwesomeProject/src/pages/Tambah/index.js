import React from "react";
import {TouchableOpacity, Pressable,Button, Text, ImageBackground, View, Image,SafeAreaView, StyleSheet, TextInput,Alert } from "react-native";
import { Background,Logo } from '../../assets'
import {db} from '../../../firebase';
import { addDoc, collection,getDocs, setDoc,doc } from "firebase/firestore/lite";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {authentication} from '../../../firebase'; 
import {Picker} from '@react-native-picker/picker';
import { BottomNavigation } from "react-native-paper";


export default function tambah ({navigation}) {

 
  const [order_id, ida] = React.useState('');
  const [berat,berata] = React.useState('');
  const [harga,hargaa] = React.useState('');
  const [statusa,statusb] = React.useState('');
  const [notel, notela] = React.useState('');
  
  const docRef =async ()=>{  
    await addDoc(collection(db, "DataLaundry"), {
    order_id: order_id,
    Berat: berat,
    Harga : harga,
    status : statusa,
    uid : authentication.currentUser?.uid
    
  });
  Alert.alert("Data Berhasil Ditambahkan")
  navigation.replace("Detail")
  console.log("Document written with ID: ", docRef.id);}

  return (
    
    <View style={styles.container}>
    <ImageBackground source={Background} resizeMode="cover" style={styles.image}>

      <View style={styles.logofadal}>
      <Image style={styles.logo}
      source={Logo}  />
      <Text style={styles.warna}>
        TAMBAH TRANSAKSI
      </Text>
      </View >
      
      <View style={styles.TextInput}>
      <TextInput
        style={styles.input}
        onChangeText={text=>ida(text)}
        value={order_id}
        placeholder="Order ID"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={text=>berata(text)}
        value={berat}
        placeholder="Berat"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={text=>hargaa(text)}
        value={harga}
        placeholder="Harga"
        keyboardType="numeric"
      />
   <Picker style={styles.inputa}
        selectedValue={statusa}
        onValueChange={(itemValue, itemIndex) =>
          statusb(itemValue)}>
        <Picker.Item label="Status" value="" />
        <Picker.Item label="Diproses" value="Diproses" />  
        <Picker.Item label="Dikeringkan" value="Dikeringkan" />  
        <Picker.Item label="DiSetrika" value="DiSetrika" />  
        <Picker.Item label="Diantar" value="Diantar" />  
   </Picker>

      </View>
      <View style={styles.fixToText}>
      <TouchableOpacity style={styles.button} onPress={docRef}>
                <Text style={styles.teks}>Tambah</Text> 
      </TouchableOpacity>
       
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
    borderRadius:20,
    borderColor:'black',
    backgroundColor:'white'
  },
  inputa: {
    height: 40, 
    padding: 10,
    margin: 12,
   justifyContent: 'center',
    color:'black',
    backgroundColor:'white',
    flexDirection: 'row',
    alignItems: 'center',
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
  TextInput: {
    padding: 10,
  },
  image: {
    flex: 1,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: "center",
    
  },
  logofadal: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  warna:{
    padding:10,
    color:'black',
    fontWeight:'500'
  },
  button:{
    borderColor:'black',
    backgroundColor: 'skyblue',
    marginTop:40,
    height:40,
    width:200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    borderRadius:10,
    borderWidth:1,
  },
  teks:{
    color:'black',
  },
});
