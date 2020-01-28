import React, { Component } from 'react';
import ImagesSelector from '../components/ImagesSelector';


class ImagesSelectorView extends Component{
    render(){
        return(
            <div className="app-container" style={{display:'flex', alignItems:'center',justifyContent:'center',width:'100vw', height:'100vh'}}>
                <ImagesSelector/>
            </div>
      );

    }
}

export default ImagesSelectorView;