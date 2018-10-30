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
    borderRadius: 12,
    margin: 4,
    cursor: "pointer",
    "&:hover": {
      background: "#94EE31"
    }
  }
};

class MarkerControl extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, onAddMarker } = this.props;
    return (
      <div className={classes.controls}>
        <button className={classes.buttons} onClick={onAddMarker}>
          Add Marker
        </button>
      </div>
    );
  }
}

export default injectSheet(styles)(MarkerControl);
