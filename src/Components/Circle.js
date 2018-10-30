import React, { Component, Fragment } from "react";

import injectSheet from "react-jss";

const styles = {
  circle: props => ({
    position: "absolute",
    width: 50,
    height: 50,
    top: props.y,
    left: props.x,
    backgroundColor: props.bgColor,
    borderRadius: "50%",
    cursor: "pointer"
  }),
  selectableCircle: {
    border: "3px solid black",
    "&:hover": {
      border: "3px solid white"
    }
  },
  selectedCircle: {
    border: "3px solid white"
  }
};

class Circle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, classes, onSelectCircle, selected } = this.props;
    return (
      <div
        className={
          selected
            ? `${classes.circle} ${classes.selectedCircle}`
            : `${classes.circle} ${classes.selectableCircle}`
        }
        onClick={e => {
          e.stopPropagation();
          onSelectCircle(id);
        }}
      />
    );
  }
}

export default injectSheet(styles)(Circle);
