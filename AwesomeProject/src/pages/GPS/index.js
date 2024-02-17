




import React, { Component,Location,PermissionsAndroid } from 'react'
import { Text, View,StyleSheet,TouchableHighlight} from 'react-native'
import MapView,{Marker} from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';


export default function aw({navigation}) {

  
  

    
    
    
    return(
            
            <View style={styles.container}>
            <View style={styles.wrapper}>
                
             <MapView style={styles.map}
             showsScale={true}
             showsCompass={true}
             showsPointsOfInterest={true}
             showsBuildings={true}
             showsUserLocation={true}
             followUserLocation={true}
             zoomEnabled={true}
             pitchEnabled={true}
             showsCompass={true}
             showsBuildings={true}
             showsTraffic={true}
             showsIndoors={true} initialRegion={{
                 latitude:-6.573215,
                 longitude:106.808322,
                 latitudeDelta:0.001,
                longitudeDelta:0.001
          
           }} > 
           <Marker coordinate={ {  latitude:-6.573215,
           longitude:106.808322,} }/>
           </MapView>
            <View style={[styles.box, { backgroundColor: "#87CEFA" }]}>
             <Text style={styles.teks}>Laundry dalam Proses Penjemputan</Text>
             <Text style={styles.teks}>Silahkan Tunggu</Text>
             <TouchableHighlight style={styles.tengah}>         
               <View style={styles.button}>           
               <Text style={{color: 'black', fontSize: 18,}}> OK </Text>         
               
               </View>
             </TouchableHighlight>
             </View>
             </View >
         
        

        
         
           
        
    </View>
   );
}
const styles = StyleSheet.create({
   wrapper:{
       ...StyleSheet.absoluteFillObject
   },
   map:{
    ...StyleSheet.absoluteFillObject
   },
   container:{
       flex :1
   },
   button: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#1E90FF",
    padding: 10,
    borderColor: 'black',
    height: 50,
    width: 200,
    borderWidth: 1,
    borderRadius:25,
  },
  tengah:{
    marginTop:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  teks:{
    justifyContent:'center',
    alignSelf:'center',
    alignItems: 'center',
    color:'black',
  },
  box:{
    borderRadius:10,
    height:120,
    top:640,
  },});















// import React, { Component } from 'react';
// import { Dimensions, StyleSheet } from 'react-native';
// import MapView from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';

// const { width, height } = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// const LATITUDE = 37.771707;
// const LONGITUDE = -122.4053769;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// const GOOGLE_MAPS_APIKEY = 'AIzaSyCvlNIbKiVoyUYOAwxsYwjNp7M8_XV0SoQ';

// class Example extends Component {

//   constructor(props) {
//     super(props);

//     // AirBnB's Office, and Apple Park
//     this.state = {
//       coordinates: [
//         {
//           latitude: 37.3317876,
//           longitude: -122.0054812,
//         },
//         {
//           latitude: 37.771707,
//           longitude: -122.4053769,
//         },
//       ],
//     };

//     this.mapView = null;
//   }

//   onMapPress = (e) => {
//     this.setState({
//       coordinates: [
//         ...this.state.coordinates,
//         e.nativeEvent.coordinate,
//       ],
//     });
//   }

//   render() {
//     return (
//       <MapView
//         initialRegion={{
//           latitude: LATITUDE,
//           longitude: LONGITUDE,
//           latitudeDelta: LATITUDE_DELTA,
//           longitudeDelta: LONGITUDE_DELTA,
//         }}
//         style={StyleSheet.absoluteFill}
//         ref={c => this.mapView = c}
//         onPress={this.onMapPress}
//       >
//         {this.state.coordinates.map((coordinate, index) =>
//           <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
//         )}
//         {(this.state.coordinates.length >= 2) && (
//           <MapViewDirections
//             origin={this.state.coordinates[0]}
//             waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): undefined}
//             destination={this.state.coordinates[this.state.coordinates.length-1]}
//             apikey={GOOGLE_MAPS_APIKEY}
//             strokeWidth={3}
//             strokeColor="hotpink"
//             optimizeWaypoints={true}
//             onStart={(params) => {
//               console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
//             }}
//             onReady={result => {
//               console.log(`Distance: ${result.distance} km`)
//               console.log(`Duration: ${result.duration} min.`)

//               this.mapView.fitToCoordinates(result.coordinates, {
//                 edgePadding: {
//                   right: (width / 20),
//                   bottom: (height / 20),
//                   left: (width / 20),
//                   top: (height / 20),
//                 }
//               });
//             }}
//             onError={(errorMessage) => {
//               // console.log('GOT AN ERROR');
//             }}
//           />
//         )}
//       </MapView>
//     );
//   }
// }

// export default Example;




















