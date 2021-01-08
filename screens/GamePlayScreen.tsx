import React, {useRef, useEffect, useState} from "react";
import { StyleSheet, Item, PanResponder, Animated } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { DraggableComp } from "../components/DraggableComp"
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
  const pan = useRef(new Animated.ValueXY()).current;
  const pan2 = useRef(new Animated.ValueXY()).current;
  const [isView3, setIsView3] = useState(false)
  const [location2, setL2] = useState(0)
  // const location2 = useRef(new Animated.ValueXY()).current;

  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, g) => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: (event, gesture) => {
        pan.setValue({ x: gesture.dx, y: gesture.dy });
      },
      // onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: (event, {vx, vy}) => {
        pan.flattenOffset();
        if (event.nativeEvent.locationX > location2) {
          console.log(event.nativeEvent.locationX, location2)
          setIsView3(true)
        } else {
          setIsView3(false)
        }
      }
    })
  )[0];

  const panResponder2 = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e) => {
        pan2.setOffset({
          x: pan2.x._value,
          y: pan2.y._value
        });
      },
      onPanResponderMove: (event, gesture) => {
        pan2.setValue({ x: gesture.dx, y: gesture.dy });
      },
      // onPanResponderMove: Animated.event([null, { dx: pan2.x, dy: pan2.y }]),
      onPanResponderRelease: (event) => {
        pan2.flattenOffset();
        setL2(event.nativeEvent.locationX)
      }
    })
  ).current;

  const view1 = <Animated.View
      style={{
        transform: [{ translateX: pan.x }, { translateY: pan.y }]
      }}
      {...panResponder.panHandlers}
    >
      <View style={styles.box} />
    </Animated.View>

const view3 = <Animated.View
  style={{
    transform: [{ translateX: pan.x }, { translateY: Animated.add(-50, pan.y) }]
  }}
  {...panResponder.panHandlers}
  >
  <View style={styles.box3} />
</Animated.View>

  const view2 = <Animated.View
  style={{
    transform: [{ translateX: pan2.x }, { translateY: pan2.y }]
  }}
  {...panResponder2.panHandlers}
>
  <View style={styles.box2} />
</Animated.View>

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
      <View height="100%" width="100%" >
        {view2}
        {view1}
        {
          isView3 ? view3 : null
        }

        {/* {Animated.subtract(pan.x, pan2.x) ? } */}
        
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
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5
  },
  box2: {
    height: 150,
    width: 150,
    backgroundColor: "lime",
    borderRadius: 5
  },
  box3: {
    height: 50,
    width: 50,
    backgroundColor: "yellow",
    borderRadius: 5
  },
});