import { signOut } from 'firebase/auth';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  RefreshControl,
  Alert,
  ScrollView
  
} from 'react-native';
import { authentication } from '../../../firebase';
import { batas,Logo,Background,Background1,Home1,Home2,Account1,Account2,Profile,Mobil,Ceklis,Baju } from '../../assets'
import { addDoc, collection,getDocs, setDoc,doc,getDoc,docs,query,where  } from "firebase/firestore/lite";
import {db} from '../../../firebase';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Akun({navigation}) {
  const[users,Setuser]= React.useState([]);
  const[image,Setimage]= React.useState(null);
  const[imagea,Setimagae]= React.useState(null);
  const [refreshing, setRefreshing] = React.useState(false);


  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
 

  


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
    
    

    
  
  const [isSignedin, setSignedIn] = React.useState('true');
  const SignOutUser = ()=>{
    signOut(authentication)
    .then((re)=>{
      setSignedIn(false);
      Alert.alert("Anda Telah Berhasil Logout")
      navigation.replace("Login")
    })
    .catch((err)=>{
      Alert.alert("Database Error")
      console.log(err);
    })
  }
  
    return (
      <SafeAreaView style={styles.container}>

          <View style={styles.header}><Image source={Background} style={styles.header}/></View>
          {users.map(e=>
           e.foto != null && 
          <Image style={styles.avatar} source={{uri:e.foto}}/>
          )
      }
      {users.map(e=>
        e.foto == null && 
        
          <Image style={styles.avatar} source={Profile}/>
          
        )
      }
      
    
          <View style={styles.body}>

          <Text style={styles.name}>{users.map(e=>
            <Text>{e.Nama}</Text>,
            )}</Text>
          <Text style={styles.profile}>{authentication.currentUser?.email}</Text>
          <Text style={styles.profile}>{users.map(e=>
            <Text>{e.Notel}</Text>,
            )}</Text>
          <Text style={styles.profile}>{users.map(e=>
            <Text>{e.Alamat}</Text>,
            )}</Text>
            <View style={styles.bodyContent}>
              
            {/* <TouchableOpacity style={styles.edit} onPress={'Editpro'}> */}
              <TouchableOpacity style={styles.edit} onPress={()=>navigation.navigate('Editpro')}>
                <Text style={styles.teksedit}>Edit Profile</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.logout} onPress={SignOutUser}>
                <Text style={styles.tekslogout}>Logout</Text> 
              </TouchableOpacity>
              
            </View>
            
        </View>
        
      
        </SafeAreaView>
      
    );
  }


const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },  
  scrollView: {
    flex: 1,
   
  },container:{
flex:1
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    alignItems: 'center',
    alignSelf:'center',
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
    Top:10,
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600",
    top:20,
    alignSelf:'center',
  },
  edit: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:10,
    backgroundColor: "#43bcf0",
    borderColor:'black',
    borderWidth:1,
    top:160,
  },
  logout: {
    borderColor:'red',
    backgroundColor: '#d3dded',
    marginTop:10,
    height:45,
    width:250,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    borderRadius:10,
    borderWidth:1,
    top:150,
  },
  header2:{
    height:45,
  },
  tekslogout:{
    color:'red',
  },
  teksedit:{
    color:"black",
  },
  profile:{
    color: "#696969",
    fontWeight: "600",
    top:30,
    alignSelf:'center',
  },
});
