import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as imageActions from '../actions/imageActions';
import ImagesList from '../components/ImagesList';

export default connect(
    state => ({
        ...state.image.images,  
        selection: state.image.selectedImages.ids
    }),
    dispatch => ({
        imageActions: bindActionCreators(imageActions, dispatch)
    })
)(ImagesList)