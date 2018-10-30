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

  moveCircle = e => {
    if (this.state.selectedCircle === null) return;

    let pageX;
    let pageY;
    let box = e.currentTarget;

    if (e.touches) {
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
    this.setState({
      circles: [
        ...this.state.circles,
        {
          x: null,
          y: null,
          //bgColor: `hsla(${Math.random() * 360}, 100%, 50%, 1)`,
          bgColor: `rgb(${Math.random() * 255}, ${Math.random() *
            255}, ${Math.random() * 255})`
        }
      ]
    });
  };

  selectCircle = i => {
    if (i !== this.state.selectedCircle)
      this.setState({
        selectedCircle: i
      });
  };

  handleZoom = step => {
    if (this.state.zoom === this.props.maxZoom && step > 0) return;
    if (this.state.zoom === 1 && step < 0) return;
    this.setState({
      zoom: this.state.zoom + step
    });
  };

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
