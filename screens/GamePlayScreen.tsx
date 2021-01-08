import React, {useRef, useEffect} from "react";
import { StyleSheet, Item } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { GameEngine } from "react-native-game-engine"
import Svg, { Circle, Rect, ClipPath, Defs, Polygon } from 'react-native-svg';


function Rectangle(props) {
  const {x, y, height, width, fill} = props;
  return (
    <Rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
    />
  );
}


function Polygon2(props) {
  const {points, fill, stroke, strokeWidth} = props;
  return (
    <Polygon2
      points={points}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  );
}


export default function GamePlayScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.pauseIconRow}>
        <AntDesign
          style={{ marginTop: 20, marginLeft: 20 }}
          name="pause"
          size={24}
          color="black"
        />
      </View>
      <View height="100%" width="100%">
        <Svg height="1000" width="1000">
          {/* <Defs>
            <ClipPath>
            <Rectangle x="100" y="100" width="100" height="100" />
            </ClipPath>
          </Defs> */}
          <Polygon points="20,60 20,80 50,70" />
          <Rectangle x="30" y="150" width="360" height="100" fill="black"/>
          <Rectangle x="50" y="150" width="360" height="100" fill="black"/>
          <Rectangle x="50" y="150" width="340" height="100" fill="yellow"/>

          <Rectangle x="30" y="350" width="360" height="100" fill="black"/>
          <Rectangle x="50" y="400" width="360" height="100" fill="black"/>
          <Rectangle x="50" y="400" width="340" height="50" fill="yellow"/>

          <Rectangle x="30" y="550" width="360" height="50" fill="black"/>
          <Rectangle x="50" y="580" width="360" height="50" fill="black"/>

          <Rectangle x="50" y="580" width="340" height="20" fill="yellow"/>

          <Rectangle x="70" y="580" width="100" height="100" fill="black"/>
          <Rectangle x="70" y="600" width="100" height="30" fill="yellow"/>
          <Rectangle x="70" y="580" width="100" height="20" fill="black"/>
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pauseIconRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});