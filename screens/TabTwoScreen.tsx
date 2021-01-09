import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { GameEngine } from "react-native-game-engine";
import { Circle, Ascended } from "./Renderers";
import { MoveCircle } from "./Systems"


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

// export default function TabTwoScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Tab Two</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
//     </View>
//   );
// }

export default function TabTwoScreen() {
  return (
    <GameEngine
      style={styles.container}
      systems={[MoveCircle]}
      entities={{
        1: {position: [40, 200], renderer: <Circle />},
        2: {position: [100, 200], renderer: <Ascended />},
        3: {position: [200, 200], renderer: <Ascended />},
      }}>
     <Text style={styles.title}>Some normal text at 0</Text>
     <Text style={styles.ele}>Some text at elevation 0</Text>
     <Text style={styles.zin}>Some text at Z=0</Text>
    </GameEngine>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    zIndex: 0,
    elevation: 0,
    color: "red"
        
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  ele: {
    fontSize: 30,
    fontWeight: 'bold',
    elevation: 1,
    color: "orange"
  },
  zin: {
    fontSize: 30,
    fontWeight: 'bold',
    zIndex: 0,
    color: "blue"
  }
});

