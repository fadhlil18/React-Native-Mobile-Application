import React from "react";
import {Pressable,Button, Text, ImageBackground, View, Image,SafeAreaView, StyleSheet, TextInput} from "react-native";
import { Logo } from '../../assets'
import {Picker} from '@react-native-picker/picker';
export default function Update({navigation}) {

  const [text, onChangeText, OrderID,berat,harga,stat] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [statusa,statusb] = React.useState('');
  const image = { uri: "https://cdn.discordapp.com/attachments/511466864925343744/916519700714913812/background-159244_640.png" };
  const {status,id}=this.props.route.params
  return (
    
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>

      <View style={styles.logofadal}>
      <Image style={styles.logo}
      source={Logo} />
      <Text style={styles.warna}>
        UPDATE TRANSAKSI
      </Text>
      
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
        <Button 
          color="#91b3ba"
          borderRadius="20"
          title="Update"
          onPress={() => Alert.alert('Update')}
        />
      </View>
<Text> {status}</Text>
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
    width:150,
    height:400,
    justifyContent: 'center',
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
  },
  
});

