import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as imageActions from '../actions/imageActions';
import SelectedImagesGrid from '../components/SelectedImagesGrid';

export default connect(
    state => ({
        images: state.image.images,  
        selectedImages: state.image.selectedImages
    }),
    dispatch => ({
        imageActions: bindActionCreators(imageActions, dispatch)
    })
)(SelectedImagesGrid)