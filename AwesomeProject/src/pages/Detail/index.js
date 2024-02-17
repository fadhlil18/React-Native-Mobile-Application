import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Alert
  
} from 'react-native';
import { Logo,Background,Background1,Background3,Home1,Home2,Account1,Account2,Profile,Mobil,Ceklis,Baju,Plus,Mesincuci } from '../../assets'
import { addDoc, collection,getDocs, setDoc,doc,getDoc,docs,query,where,deleteDoc  } from "firebase/firestore/lite";
import {db} from '../../../firebase';
import { useEffect, useState } from 'react';
export default function Akun({navigation}) {
  const[data,Setdata]= React.useState([]);

  useEffect(() => {
    const getData = async()=> {
      const docRef = collection(db, "DataLaundry");
      const docSnap = await getDocs(docRef);  
      const items=[]
      Setdata(docSnap.docs.map((doc)=>({...doc.data(),id: doc.id})));
    
     
    };
      getData(); 
    }, []);
    console.log(data)

    const deleted = (id) => {
      deleteDoc(doc(db, "DataLaundry",id))
      Alert.alert("Data berhasil Dihapus");
      navigation.replace('Detail')
    }
    return (
      <View> 
         <ImageBackground source={Background} resizeMode="cover" style={styles.header}>
            <Text style={styles.list}>List Tranksasi</Text>
        <TouchableOpacity onPress={() => navigation.replace('Tambah') }>
            <Image style={styles.tambah} source={Plus}/>
             </TouchableOpacity>
           </ImageBackground>
              <ScrollView showsHorizontalScrollIndicator={false} pagingEnabled={true}></ScrollView>
             
        {data.map(e=>
         
        <View style={[styles.box, { backgroundColor:  "#35a3de" }]}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Update',{ID:e.id,status:e.status})}>
        <Image style={styles.cuci1} source={Baju}  /></TouchableOpacity>
      <Text style={styles.teks} >Order ID:    {e.order_id}{"\n"}
      Berat:         {e.Berat} Kg{"\n"}
      harga:         {e.Harga}{"\n"}
      Status:        {e.status}{"\n"} </Text>
      <TouchableOpacity onPress={()=>deleted(e.id)}>
        <Image style={styles.cuci2} source={Mesincuci} value={e.id}  />
        </TouchableOpacity>
      </View>
         
      )
     
    }    
    </View>
    
  //       <ImageBackground source={Background} resizeMode="cover" style={styles.header}>
  //          <Text style={styles.list}>List Transkasi</Text>
  //      <TouchableOpacity onPress={() => navigation.replace('Tambah') }>
  //          <Image style={styles.tambah} source={Plus}/>
  //           </TouchableOpacity>
  //         </ImageBackground>
  //            <ScrollView showsHorizontalScrollIndicator={false} pagingEnabled={true}>
            
  //  <View style={[styles.box, { backgroundColor:  "#35a3de" }]}>
  //  <Image style={styles.cuci1} source={Baju}/>
  
  //  <View style={{ flexDirection:'column'}}>
  //  <Text style={styles.teks}>Order ID #1          </Text>
  //  <Text style={styles.teks}>Berat  : 5 KG        </Text>
  //  <Text style={styles.teks}>Harga  : Rp. 35.000  </Text>
  //  <Text style={styles.teks}>Status : Selesai     </Text>
  //    </View>
  //    <Image style={styles.cuci2} source={Mesincuci}/>
  //  </View>
            
  //  <View style={[styles.box, { backgroundColor: "#35a3de" }]}>
  //  <Image style={styles.cuci1} source={Baju}/>
  //    <View style={{ flexDirection:'column'}}>
  //  <Text style={styles.teks}>Order ID #1          </Text>
  //  <Text style={styles.teks}>Berat  : 5 KG        </Text>
  //  <Text style={styles.teks}>Harga  : Rp. 35.000  </Text>
  //  <Text style={styles.teks}>Status : Selesai     </Text>
  //    </View>
  //    <Image style={styles.cuci2} source={Mesincuci}/>
  //  </View>
            
  //  <View style={[styles.box, { backgroundColor: "#35a3de" }]}>
  //  <Image style={styles.cuci1} source={Baju}/>
  //    <View style={{ flexDirection:'column'}}>
  //  <Text style={styles.teks}>Order ID #1          </Text>
  //  <Text style={styles.teks}>Berat  : 5 KG        </Text>
  //  <Text style={styles.teks}>Harga  : Rp. 35.000  </Text>
  //  <Text style={styles.teks}>Status : Selesai     </Text>
  //    </View>
  //    <Image style={styles.cuci2} source={Mesincuci}/>
  //  </View>
            
  //  <View style={[styles.box, { backgroundColor: "#35a3de" }]}>
  //  <Image style={styles.cuci1} source={Baju}/>
  //    <View style={{ flexDirection:'column'}}>
  //  <Text style={styles.teks}>Order ID #1          </Text>
  //  <Text style={styles.teks}>Berat  : 5 KG        </Text>
  //  <Text style={styles.teks}>Harga  : Rp. 35.000  </Text>
  //  <Text style={styles.teks}>Status : Selesai     </Text>
  //    </View>
  //   <Image style={styles.cuci2} source={Mesincuci}/>
  //  </View>
  
  //  </ScrollView>
  //   </View>
   
     
  );

}




      {/* 
       
      </View> */}
      
     
  //     <View >
  //         <ImageBackground source={Background} resizeMode="cover" style={styles.header}>
  //           <Text style={styles.list}>List Transkasi</Text>
  //           <TouchableOpacity onPress={() => navigation.replace('Tambah') }>
  //           <Image style={styles.tambah} source={Plus}/>
  //           </TouchableOpacity>
  //         </ImageBackground>

         
          
  //         {/* --Box Harga-- */}
          
  //         <ScrollView showsHorizontalScrollIndicator={false} pagingEnabled={true}>
            
  //           <View style={[styles.box, { backgroundColor: "#35a3de" }]}>
  //           <Image style={styles.cuci1} source={Baju}/>
  //             <View style={{ flexDirection:'column'}}>
  //             <Text style={styles.teks}>{data.map((aw)=>{
  //             <Text style={styles.teks} >Text</Text>
  //           })}       </Text> 
              
  //             <Text style={styles.teks}>{data.map((aw)=>{
  //             <Text style={styles.teks} >Text</Text>
  //           })}       </Text>
  //              <Text style={styles.teks}>{data.map((aw)=>{
  //             <Text style={styles.teks} >Text</Text>
  //           })}       </Text>
  //              <Text style={styles.teks}>text{data.map((aw)=>{
  //             <View style={styles.teks} >Text</View>
  //           })}       </Text> 
  //             </View>
  //             <Image style={styles.cuci2} source={Mesincuci}/>
  //           </View>
                      

  //           </ScrollView>
  //         {/* --Box Harga-- */}
      
  //     </View>
     
  //   );
  // }


//    <View >
//           <ImageBackground source={Background} resizeMode="cover" style={styles.header}>
//             <Text style={styles.list}>List Transkasi</Text>
//             <TouchableOpacity onPress={() => navigation.replace('Tambah') }>
//             <Image style={styles.tambah} source={Plus}/>
//             </TouchableOpacity>
//           </ImageBackground>

  


const styles = StyleSheet.create({
  list:{
    fontSize:22,
    color: "black",
    fontWeight: "600",
    top:25,
    alignSelf:'center',
  },
  row: {
    display:'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: "space-between"
  },
  aktif:{
    fontSize:28,
    color: "black",
    fontWeight: "600",
    left:20,
  },
  cuci1:{
    width:50,
    height:50,
    top:1,
    left:20,
  },
  cuci2:{
    width:50,
    height:50,
    top:1,
    left:130,
  },
  box:{
    width:375,
    height:80,
    marginTop:5,
    borderRadius:10,
    alignItems:'center',
    alignSelf:'center',
    flexDirection: 'row',
  },
  teks:{
    color:'black',
    alignSelf:'center',
    left:80,
  },
  header:{
    height:90,
    flek:'1',
  },
  tambah:{
    width:50,
    height:50,
    top:-10,
    left:320,
    position:'absolute',
  },
});

