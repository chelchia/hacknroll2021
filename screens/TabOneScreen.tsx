import * as React from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';

import { GameEngine } from "react-native-game-engine";
import { Circle, Square } from "./Renderers";
import { MoveCircle } from "./Systems";
import GameBoard from "./GameBoard";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const gridImgUrl = require('../assets/images/bluegrid.jpg');
// const gridImgUrl = { uri: "https://reactjs.org/logo-og.png" };

// export default function TabOneScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Tab One</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       <EditScreenInfo path="/screens/TabOneScreen.tsx" />
//     </View>
//   );
// }

{/* <Image source={gridImgUrl} style={styles.gridImg}/> */}


export default function TabOneScreen() {
  return (
    <GameEngine
      style={styles.gamecontainer}
      systems={[MoveCircle]}
      entities={{
        1: { position: [40,  300], renderer: <Square />}, //-- Notice that each entity has a unique id (required)
        2: { position: [100, 300], renderer: <Square />}, //-- and a renderer property (optional). If no renderer
        3: { position: [160, 300], renderer: <Square />}, //-- is supplied with the entity - it won't get displayed.
      }}
      onEvent={}>
      
    </GameEngine>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gamecontainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  gridImg: {
    // flex: 1,
    // resizeMode: "cover",
    // justifyContent: "center",
    position: "absolute",
    top: 250,
    left: 15,
    width: 330,
    height: 330,
    opacity: 0.5,
  },
});
