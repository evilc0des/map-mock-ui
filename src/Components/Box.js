import React, { Component, Fragment } from "react";
import Circle from "./Circle";

import injectSheet from "react-jss";

const styles = {
  box: {
    left: 0,
    width: "70vw",
    height: "80vh",
    backgroundColor: "#EDC8A7",
    border: "3px solid black",
    overflow: "auto",
    boxSizing: "border-box"
  },
  boxContent: props => ({
    position: "relative",
    width: "calc(70vw - 8px)",
    height: "calc(80vh - 8px)",
    overflow: "hidden",
    transform: `scale(${props.zoom}, ${props.zoom})`,
    transformOrigin: "0% 0%",
    boxSizing: "border-box"
  })
};

class Box extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes,
      circles,
      moveCircle,
      onSelectCircle,
      selected
    } = this.props;
    return (
      <div className={classes.box}>
        <div className={classes.boxContent} onClick={moveCircle}>
          {circles.map((c, i) => (
            <Circle
              x={c.x}
              y={c.y}
              key={i}
              id={i}
              bgColor={c.bgColor}
              onSelectCircle={onSelectCircle}
              selected={i === selected}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Box);
