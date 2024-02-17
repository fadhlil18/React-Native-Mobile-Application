import React from "react";
import {Pressable,Button, Text, ImageBackground, View, Image,SafeAreaView, StyleSheet, TextInput, TouchableHighlight,TouchableOpacity,PermissionsAndroid,Alert} from "react-native";
import { useEffect, useState } from 'react';
import { Logo,Background,Background1,Background3,Home1,Home2,Account1,Account2,Profile,Mobil,Ceklis,Baju } from '../../assets'
import { authentication } from '../../../firebase';
import { addDoc, collection,getDocs, setDoc,doc,getDoc,docs,query,where,updateDoc } from "firebase/firestore/lite";
import {db} from '../../../firebase';
// import  {launchCamera, launchImageLibrary}  from 'react-native-image-picker';
import  {launchCamera}  from 'react-native-image-picker';
import { getStorage, ref, getDownloadURL,uploadBytes} from "firebase/storage";
export default function Editpro({navigation}) {
  


  const [text, onChangeText, OrderID,berat,harga,stat] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const[users,Setuser]= React.useState([]);
  const[imageb,Setimage]= React.useState([]);
  const [order_id, ida] = React.useState('');
  const [namaa,namab] = React.useState('');
  const [alamata,alamatb] = React.useState('');
  const [notela,notelb] = React.useState('');

  const defaultimg = {Profile}
  const [image, setimage] = useState(null)



  
  const requestCameraPermission = async () => {
    const grantedcamera = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
    {
      title: "App Camera Permission",
      message:"App needs access to your camera ",
      buttonNeutral: "Ask Me Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK"
    }
  );
  const grantedstorage = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    {
      title: "App Camera Permission",
      message:"App needs access to your camera ",
      buttonNeutral: "Ask Me Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK"
    }
  );
  if (grantedcamera === PermissionsAndroid.RESULTS.GRANTED && grantedstorage ===  PermissionsAndroid.RESULTS.GRANTED) {
    console.log("Camera & storage permission given");
    const option={
      cropping : true,
      saveToPhotos:true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
     
    }
   
    launchCamera(option, res=>{
        if(res.didCancel){
          console.log("Permission Tidak Dijinkan")
        }else if(res.errorCode){ 
         console.log(res.errorMessage)
        }else {
          const data = res.assets[0]
          setimage(data)
         console.log(data) 
         let uri = data.uri;
         const storage = getStorage();
   
         const refa = ref(storage,'images')
          uploadBytes(refa,data.uri)
        
        }
        
      })
   
  }
  }
  
 
  useEffect(() => {
    const getUsers = async()=> {
      const docRef = doc(db, "user", authentication.currentUser?.uid);
      const docSnap = await getDoc(docRef);
      const items=[]
      items.push(docSnap.data())
     Setuser(items);
     
    };
      getUsers(); 
     
    }, []);
  
 

    const update =async ()=>{  
      await updateDoc(doc(db,"user",authentication.currentUser?.uid), {
      Alamat: alamata,
      Nama: namaa,
      Notel: notela,
      foto:image.uri
    })

    
  navigation.replace('Home')
  Alert.alert("Data berhasil Ditambahkan")};

  return (
    
    <View style={styles.container}>
      
    <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
    
      <View style={styles.bg}>
      
      <Text style={styles.teks}> Foto Profile</Text>
      {
        image != null &&
        <Image style={styles.foto} source={{uri:image.uri}}/>
      }
      {
        image == null && 
        
          <Image style={styles.foto} source={Profile}/>
          
        
      }
      {/* <Image style={styles.foto} source={{uri:image.uri==null?defaultimg:image}} />  */}
       
        <TouchableOpacity onPress={ requestCameraPermission}>
      <Text style={styles.edit}> Edit Foto </Text>
      </TouchableOpacity>
     
      <Text style={styles.nama} > Nama Lengkap </Text> 
      {users.map(e=>
      <TextInput style={styles.isi} onChangeText={(text) => namab(text)} value={namaa} placeholder={e.Nama} /> )}
      <Text style={styles.nama}> Nomor Telepon </Text> 
      {users.map(e=>
      <TextInput style={styles.isi} onChangeText={(text) => notelb(text)} value={notela} placeholder={e.Notel} /> )}
      <Text style={styles.nama}> Alamat </Text>
      {users.map(e=>
      <TextInput style={styles.isi} onChangeText={(text) => alamatb(text)} value={alamata} placeholder={e.Alamat} />)}
      
      
      <TouchableOpacity style={styles.tengah} onPress={update} >         
        
        <View style={styles.button}>           
        <Text style={{color: 'black', fontSize: 18,}}> 
        UPDATE 
        </Text>         
        </View>
        </TouchableOpacity>
        
      </View >

    

      
      </ImageBackground>
    </View>
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  foto: {
    width:100,
    height:100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:100/2,
  },
  image: {
    flex: 1,
  },
  bg: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 10,
  },
  teks:{
    left:13,
    fontWeight: 'bold',
    bottom:4,
  },
  edit:{
    top:5,
    left:20,
    color: '#545454',
  },
  nama:{
    fontWeight: 'bold',
    top:50,
    fontSize:15,
  },
  isi:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    top:50,
    fontSize:15,
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "lightgreen",
    padding: 10,
    borderColor: 'black',
    height: 50,
    width: 230,
    borderWidth: 1,
    borderRadius:10,
  },
  tengah:{
    top:150,
    alignItems: "center",
    justifyContent: 'center',
  },
  logout:{
    width:50,
    height:50,
    
  }
});

