import React, { Component } from "react";

import "../styles/imageItemStyle.css";

class ImageItem extends Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        style={{
          ...imageItemStyle,
          backgroundColor: this.props.isActive ? "#9fa8da" : "",
          backgroundImage: "url(" + this.props.item.picture + "/convert?h=125)"
        }}
        className="image-item"
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          className="overlay"
        >
          {this.props.selectionIndex ? (
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 25,
                backgroundColor: "#9164c8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontWeight: 900,
                fontSize: 20
              }}
            >
              {this.props.selectionIndex}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default ImageItem;

const imageItemStyle = {
  width: 117,
  height: 117,
  paddingLeft: 0,
  boxSizing: "border-box",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  cursor: "pointer",
};
