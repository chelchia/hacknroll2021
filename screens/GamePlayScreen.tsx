import React, {useRef, useEffect} from "react";
import { StyleSheet, Item } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { GameEngine } from "react-native-game-engine"
import Svg, { Circle, Rect, ClipPath, Defs } from 'react-native-svg';

const Draggable = ({ children, dragObject, onDragStart, onDragEnd }) => {
  const onDragStarting = (e) => {
    // Get the block coordinates
    let currentTargetRect = e.currentTarget.getBoundingClientRect();
    // Find the offset of the mouse from those coordinates
    const offset = [
      e.clientX - currentTargetRect.left, 
      e.clientY - currentTargetRect.top
    ];

    // Pass the drag data
    onDragStart({ dragObject, offset });
  };

  const onDragEnding = (e) => {
    e.stopPropagation();
    onDragEnd();
  };

  return (
    <View draggable={true} onDragStart={onDragStarting} onDragEnd={onDragEnding}>
      {children}
    </View>
  );
};


function Rectangle(props) {
  const {x, y, height, width} = props;
  return (
    <Rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill="green"
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
          <Defs>
            <ClipPath>
            <Rectangle x="100" y="100" width="100" height="100" />
            </ClipPath>
          </Defs>
          <Rectangle x="30" y="150" width="360" height="100" />
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
