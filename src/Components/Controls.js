import React, { Component, Fragment } from "react";

import injectSheet from "react-jss";

const styles = {
  controls: {},
  buttons: {
    fontSize: 20,
    fontWeight: 600,
    color: "white",
    background: "#62AB0E",
    border: "2px solid black",
    borderRadius: "50%",
    margin: 4,
    width: 40,
    height: 40,
    cursor: "pointer",
    "&:hover": {
      background: "#94EE31"
    }
  },
  resetButton: {
    padding: "2px 10px",
    borderRadius: "10px",
    marginLeft: 10,
    width: "auto",
    height: "auto"
  }
};

class Controls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, handleZoom, resetZoom, zoomStep } = this.props;
    return (
      <div className={classes.controls}>
        <button
          className={classes.buttons}
          onClick={() => handleZoom(zoomStep)}
        >
          +
        </button>
        <button
          className={classes.buttons}
          onClick={() => handleZoom(-zoomStep)}
        >
          -
        </button>
        <button
          className={`${classes.buttons} ${classes.resetButton}`}
          onClick={() => resetZoom()}
        >
          reset
        </button>
      </div>
    );
  }
}

export default injectSheet(styles)(Controls);
