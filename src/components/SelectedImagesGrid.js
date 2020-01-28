import React, { Component } from "react";

class SelectedImagesGrid extends Component {
  componentDidMount() {
    this.props.imageActions.fetchSelectedImages(2270)
  }

  getImageUrl = id => {
    const { picture } = this.props.images.items.find(i => i.id === id);
    return picture;
  };

  handleSaveSelection = () => {
      const authorId = this.props.images.author.id;
      const selectionId = this.props.images.selectionId;
      const selection = this.props.selectedImages.ids;

      this.props.imageActions.saveSelectedImages({
          selectionId,
          authorId,
          selection
      })
  }

  render() {
    return (
      <div style={{ width: 550, height: 500 }}>
        <div style={headerStyle}>
          {this.props.images && this.props.images.cover && (
            <div
              style={{
                height: 80,
                width: 80,
                backgroundImage:
                  "url(" + this.props.images.cover + "/convert?h=125)"
              }}
            ></div>
          )}
          {this.props.images.author && (
            <div style={{ padding: 10 }}>
              <img
                alt=""
                src={this.props.images.author.picture}
                height={20}
                width="auto"
              />
              <h4 style={{ margin: 0 }}>{this.props.images.author.name}</h4>
              <small style={{ margin: 0 }}>
                {new Date(this.props.images.author.createdAt).toLocaleString()}
              </small>
            </div>
          )}
          <button onClick={()=>this.handleSaveSelection()} style={saveButtonStyle}>Save selection</button>
        </div>
        {this.props.selectedImages.isFetching ? (
          <div style={fetchingStyle}>
            <img
              src={require("../images/loading.gif")}
              style={{ height: 50, width: 50 }}
              alt="loading..."
            />
          </div>
        ) : this.props.selectedImages.didInvalidated ? (
          <div style={invalidatedStyle}>
            <p>Somthing went wrong :(</p>
          </div>
        ) : this.props.images.items && this.props.selectedImages.ids.length ? (
          <div style={gridStyle}>
            {this.props.selectedImages && this.props.selectedImages.ids.map(id => (
              <div key={id}
                style={{
                  ...gridTileStyle,
                  backgroundImage:
                    "url(" + this.getImageUrl(id) + "/convert?h=275)"
                }}
              ></div>
            ))}
          </div>
        ) : (
          <div
            style={{
              width: 550,
              height: 500,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFF"
            }}
          >
            <p>Please select images...</p>
          </div>
        )}
      </div>
    );
  }
}

export default SelectedImagesGrid;

const fetchingStyle = {
  width: 550,
  height: 500,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FFF"
};

const invalidatedStyle = {
  width: 550,
  height: 500,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FFF"
};

const headerStyle = {
  height: 80,
  display: "flex",
  backgroundColor: "#FFF",
  boxSizing: "border-box"
};

const saveButtonStyle = {
  backgroundColor: "#9164c8",
  borderRadius: 28,
  border: "1px solid #9164c8",
  lineHeight: 0,
  display: "inline-block",
  cursor: "pointer",
  color: "#ffffff",
  fontSize: 14,
  padding: "16px 31px",
  textDecoration: "none",
  fontWeight: 800,
  fontFamily: "Roboto Mono",
  height: 40,
  marginTop: 20,
  marginLeft: 10
};

const gridTileStyle = {
  height: 275,
  width: 275,
  backgroundColor: "#9164c8",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

const gridStyle = {
  height: 420,
  display: "flex",
  flexWrap: "wrap",
  overflowY: "overlay",
  overflowX: "hidden"
};
