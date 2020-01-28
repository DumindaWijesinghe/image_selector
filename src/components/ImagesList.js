import React, { Component } from "react";
import ImageItem from "./ImageItem";

class ImagesList extends Component {
  componentDidMount() {
    this.props.imageActions.fetchImages();
  }

  handleImageItemClick = id => {
    const index = this.props.selection.findIndex(s => s === id);

    if (index === -1) {
      this.props.imageActions.imageSelected(id);
    } else {
      this.props.imageActions.imageDeselected(id);
    }
  };

  getSelectionIndex = id => {
    const index = this.props.selection.findIndex(s => s === id);
    return index === -1 ? null : index + 1;
  };

  render() {
    return (
      <div style={{ ...imageListStyle }}>
        {this.props.isFetching ? (
          <div style={fetchingStyle}>
            <img
              src={require("../images/loading.gif")}
              style={{ height: 50, width: 50 }}
              alt="loading..."
            />
          </div>
        ) : this.props.didInvalidated ? (
          <div style={invalidatedStyle}>
            <p>Somthing went wrong :(</p>
          </div>
        ) : (
          this.props.items.map(item => (
            <ImageItem
              item={item}
              selectionIndex={this.getSelectionIndex(item.id)}
              key={item.id}
              onClick={() => this.handleImageItemClick(item.id)}
            />
          ))
        )}
      </div>
    );
  }
}

export default ImagesList;

const invalidatedStyle = {
  width: 250,
  height: 500,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FFF"
};

const fetchingStyle = {
  width: 250,
  height: 500,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FFF"
};

const imageListStyle = {
  width: 250,
  height: 500,
  display: "flex",
  backgroundColor: "#E2E6F2",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.08)",
  overflowY: "overlay",
  overflowX: "hidden",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  alignContent: "stretch",
  flexWrap: "wrap",
  boxSizing: "border-box"
};
