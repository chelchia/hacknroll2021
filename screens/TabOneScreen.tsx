import * as React from 'react';
import { StyleSheet } from 'react-native';

import { GameEngine } from "react-native-game-engine";
import { Circle } from "./Renderers";
import { MoveCircle } from "./Systems"


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

// export default function TabOneScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Tab One</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       <EditScreenInfo path="/screens/TabOneScreen.tsx" />
//     </View>
//   );
// }
export default function TabOneScreen() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab One</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <GameEngine
        style={styles.container}
        systems={[MoveCircle]}
        entities={{
          1: { position: [40,  200], renderer: <Circle />}, //-- Notice that each entity has a unique id (required)
          2: { position: [100, 200], renderer: <Circle />}, //-- and a renderer property (optional). If no renderer
          3: { position: [160, 200], renderer: <Circle />}, //-- is supplied with the entity - it won't get displayed.
        }}>

      </GameEngine>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
});
