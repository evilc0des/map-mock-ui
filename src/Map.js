import React, { Component, Fragment } from "react";
import Box from "./Components/Box";
import Controls from "./Components/Controls";
import MarkerControl from "./Components/MarkerControl";

class Map extends Component {
  constructor(props) {
    super(props);
    this.box = React.createRef();
    this.state = {
      zoom: 1,
      circles: [],
      selectedCircle: null
    };
  }

  //Function to move the circles
  moveCircle = e => {
    if (this.state.selectedCircle === null) return; //Return if no circle is selected

    let pageX;
    let pageY;
    let box = e.currentTarget;

    //Calculating the location of the target for moving the circle. The algorithm also takes into account the current zoom to evaluate the position from the click event.
    if (e.touches) {
      //handling touch devices
      pageX =
        (e.touches[0].pageX -
          box.offsetLeft +
          box.parentElement.scrollLeft -
          30) /
        this.state.zoom;
      pageY =
        (e.touches[0].pageY -
          box.offsetTop +
          box.parentElement.scrollTop -
          30) /
        this.state.zoom;
    } else {
      pageX =
        (e.pageX - box.offsetLeft + box.parentElement.scrollLeft - 30) /
        this.state.zoom;
      pageY =
        (e.pageY - box.offsetTop + box.parentElement.scrollTop - 30) /
        this.state.zoom;
    }
    //We change the X and Y coordinates of the selected Circle
    let circles = [...this.state.circles];
    circles[this.state.selectedCircle] = {
      x: pageX,
      y: pageY
    };
    this.setState({
      circles: circles,
      selectedCircle: null
    });
  };

  addCircle = e => {
    //A new circle is created and pushed to state
    this.setState({
      circles: [
        ...this.state.circles,
        {
          x: null,
          y: null,
          //bgColor: `hsla(${Math.random() * 360}, 100%, 50%, 1)`, //HSL can be used to get more vibrant colors but the color space is a lot more restricted
          bgColor: `rgb(${Math.random() * 255}, ${Math.random() *
            255}, ${Math.random() * 255})` //Creating Random colors
        }
      ]
    });
  };

  //Function to select the circle
  selectCircle = i => {
    if (i !== this.state.selectedCircle)
      this.setState({
        selectedCircle: i
      });
  };

  //Function to set the zoom. Takes a step parameter to calculate next zoom
  handleZoom = step => {
    if (this.state.zoom === this.props.maxZoom && step > 0) return;
    if (this.state.zoom === 1 && step < 0) return;
    this.setState({
      zoom: this.state.zoom + step
    });
  };

  //Function to reset the zoom.
  resetZoom = () => {
    this.setState({
      zoom: 1
    });
  };

  render() {
    return (
      <Fragment>
        <Controls
          handleZoom={this.handleZoom}
          resetZoom={this.resetZoom}
          zoomStep={this.props.zoomStep}
        />
        <Box
          ref={this.box}
          zoom={this.state.zoom}
          circles={this.state.circles}
          moveCircle={this.moveCircle}
          selected={this.state.selectedCircle}
          onSelectCircle={this.selectCircle}
        />
        <MarkerControl onAddMarker={this.addCircle} />
      </Fragment>
    );
  }
}

export default Map;
