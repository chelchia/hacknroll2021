import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";

const RADIUS = 30;

function Circle(props) {
  const x = props.position[0] - RADIUS / 2;
  const y = props.position[1] - RADIUS / 2;
  return (
    <View style={[styles.circle, { left: x, top: y }]} />
  );
}

function Square(props) {
  const x = props.position[0] - RADIUS / 2;
  const y = props.position[1] - RADIUS / 2;
  return (
    <View style={[styles.square, { left: x, top: y }]} />
  );
}

class Finger extends PureComponent {
  render() {
    const x = this.props.position[0] - RADIUS / 2;
    const y = this.props.position[1] - RADIUS / 2;
    return (
      <View style={[styles.finger, { left: x, top: y }]} />
    );
  }
}

function Ascended(props) {
  const x = props.position[0] - RADIUS / 2;
  const y = props.position[1] - RADIUS / 2;
  return (
    <View style={[styles.ascend, { left: x, top: y }]} />
  );
}

const styles = StyleSheet.create({
  circle: {
    borderColor: "#CCC",
    borderWidth: 4,
    borderRadius: RADIUS * 2,
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: "black",
    position: "absolute",
    elevation: 0,
    zIndex: 0,
  },
  square: {
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: "black",
    position: "absolute"
  },
  finger: {
    borderColor: "#CCC",
    borderWidth: 4,
    borderRadius: RADIUS * 2,
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: "pink",
    position: "absolute"
  },
  ascend: {
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: "pink",
    position: "absolute",
    zIndex: 3,
    elevation: 3,
  },

});

export { Circle, Square, Finger, Ascended };
