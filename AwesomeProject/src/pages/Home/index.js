import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  RefreshControl
} from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { authentication } from '../../../firebase';
import { background4, batas, cek, Logo,Background,Background1,Background3,Home1,Home2,Account1,Account2,Profile,Mobil,Ceklis,Baju } from '../../assets'
import { addDoc, collection,getDocs, setDoc,doc,getDoc,docs,query,where  } from "firebase/firestore/lite";
import {db} from '../../../firebase';
import { useEffect, useState } from 'react';
export default function Prof({navigation}) { 
  const[users,Setuser]= React.useState([]);
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
  
    return (
      
      <View style={styles.container}>
          <ImageBackground source={batas} resizeMode="cover" style={styles.flek}>
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
            <Text style={styles.profil}>{users.map(e=>
            <Text>{e.Nama}</Text>,
            )}</Text>
           <Text style={styles.profil}>{users.map(e=>
            <Text>{e.Alamat}</Text>,
            )}</Text>
            <Text style={styles.profil}>{users.map(e=>
            <Text>{e.Notel}</Text>,
            )}</Text>
            <Text style={styles.profil}>{authentication.currentUser?.email}</Text>
          </ImageBackground>
          
          <ImageBackground resizeMode="cover" style={styles.back}>
          {/* Menu */}
          
          <View style={[styles.konten, { backgroundColor: "skyblue" }]}>
              
            <View style={styles.menu}>
            <TouchableOpacity onPress={()=>navigation.navigate('GPS')}>
            <Image style={styles.mobil} source={Mobil}/>
            </TouchableOpacity>
            <Text style={styles.teks}>Jemput Pakaian</Text>
          </View>
          <View style={styles.menu}>
          <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
            <Image style={styles.ceklis} source={Ceklis}/>
            </TouchableOpacity>
            <Text style={styles.teks}>List Transaksi</Text>
          </View>
          </View>
          {/* Menu */}
          <Image style={styles.cek} source={cek}/>
          {/* --Box Harga-- */}
          <View style={styles.price}>
          <Text style={styles.list}>Price List</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
          <View style={[styles.box, { backgroundColor: "skyblue" }]}>
            <Text style={styles.harga}>Senin</Text>
            <Image style={styles.baju} source={Baju}/>
            <Text style={styles.harga}>Rp.7000/Kilogram</Text>
          </View>
          <View style={[styles.box, { backgroundColor: "skyblue" }]}>
            <Text style={styles.harga}>Selasa</Text>
            <Image style={styles.baju} source={Baju}/>
            <Text style={styles.harga}>Rp.7000/Kilogram</Text>
          </View>
          <View style={[styles.box, { backgroundColor: "skyblue" }]}>
            <Text style={styles.harga}>Rabu</Text>
            <Image style={styles.baju} source={Baju}/>
            <Text style={styles.harga}>Rp.7000/Kilogram</Text>
          </View>
          <View style={[styles.box, { backgroundColor: "skyblue" }]}>
            <Text style={styles.harga}>Kamis</Text>
            <Image style={styles.baju} source={Baju}/>
            <Text style={styles.harga}>Rp.7000/Kilogram</Text>
          </View>
          <View style={[styles.box, { backgroundColor: "skyblue" }]}>
            <Text style={styles.harga}>Jumat</Text>
            <Image style={styles.baju} source={Baju}/>
            <Text style={styles.harga}>Rp.7000/Kilogram</Text>
          </View>
          <View style={[styles.box, { backgroundColor: "skyblue" }]}>
            <Text style={styles.harga}>Sabtu</Text>
            <Image style={styles.baju} source={Baju}/>
            <Text style={styles.harga}>Rp.7000/Kilogram</Text>
          </View>
          <View style={[styles.box, { backgroundColor: "skyblue" }]}>
            <Text style={styles.harga}>Minggu</Text>
            <Image style={styles.baju} source={Baju}/>
            <Text style={styles.harga}>Rp.7000/Kilogram</Text>
          </View>
          </ScrollView>
          </View>
          {/* --Box Harga-- */}
          </ImageBackground>
      </View>
    );
  }


const styles = StyleSheet.create({
  header:{
    height:200,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 200/2,
    borderWidth: 2,
    borderColor: "white",
    left:20,
    position: 'absolute',
    marginTop:20,
  },
  name:{
    alignItems: 'center',
    alignSelf:'center',
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
    Top:10,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  list:{
    fontSize:28,
    color: "black",
    fontWeight: "600",
    top:20,
    left:25,
    top:-10,
    marginTop:100,
  },
  harga:{
    color:'black',
  },
  baju:{
    width:50,
    height:50,
    top:1,
  },
  box:{
    width:150,
    height:100,
    marginLeft:20,
    borderRadius:10,
    alignItems:'center',
  },
  konten:{
    flexDirection: 'row',
    width:400,
    height:160,
    borderRadius:20,
    alignSelf:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'grey',
    top:-65,
  },
  menu:{
    padding:30,
    width:169,
    height:150,
    marginLeft:20,
    top:-10,
    alignItems:'center',
  },
  teks:{
    color:'black',
    alignSelf:'center',
    alignItems:'center',
  },
  mobil:{
    width:100,
    height:90,
  },
  ceklis:{
    width:70,
    height:90,
  },
  flek:{
    height:200,
    borderRadius:20,
    paddingLeft:20,
  },
  profil:{
    left:120,
    top:20,
    marginTop:5,
    color:"black",
    fontWeight:'500',
  },
  price:{
    top:-100,
  },
  cek:{
    top:-45,
    height:150,
    width:250,
    alignSelf:'center',
  },
});
