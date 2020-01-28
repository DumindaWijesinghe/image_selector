import {
    IMAGES_REQUESTED,
    IMAGES_COMPLETED,
    IMAGES_FAILED,
    SELECTED_IMAGES_REQUESTED,
    SELECTED_IMAGES_COMPLETED,
    SELECTED_IMAGES_FAILED,
    IMAGE_SELECTED,
    IMAGE_DESELECTED,
    SELECTION_SAVE_REQUESTED,
    SELECTION_SAVE_COMPLETED,
    SELECTION_SAVE_FAILED,
} from './actionTypes'

import axios from 'axios';

export const fetchImages = () => {
    return dispatch => {
        dispatch(fetchImagesRequested())

        axios.get("https://dev-pb-apps.s3-eu-west-1.amazonaws.com/collection/CHhASmTpKjaHyAsSaauThRqMMjWanYkQ.json")
        .then(res=>{
            dispatch(fetchImagesCompleted(res.data))
        })
        .catch(err=>{
            dispatch(fetchImagesFailed(err))
        })
    }
}

const fetchImagesRequested = () =>  ({
    type: IMAGES_REQUESTED   
})

const fetchImagesCompleted = (images) =>  ({
    type: IMAGES_COMPLETED,
    payload: images
})

const fetchImagesFailed = (err) =>  ({
    type: IMAGES_FAILED,
    payload: err   
})

export const fetchSelectedImages = id => {
    return dispatch => {
        dispatch(fetchSelectedImagesRequested())

        axios.get(`http://localhost:2010/v1/selection/${id}`)
        .then(res=>{
            dispatch(fetchSelectedImagesCompleted(res.data.data))
        })
        .catch(err=>{
            dispatch(fetchSelectedImagesFailed(err))
        })
    }
}

const fetchSelectedImagesRequested = () =>  ({
    type: SELECTED_IMAGES_REQUESTED   
})

const fetchSelectedImagesCompleted = (selection) =>  ({
    type: SELECTED_IMAGES_COMPLETED,
    payload: selection
})

const fetchSelectedImagesFailed = (err) =>  ({
    type: SELECTED_IMAGES_FAILED,
    payload: err   
})

export const imageSelected = (id) => ({
    type: IMAGE_SELECTED,
    payload: id
})

export const imageDeselected = (id) => ({
    type: IMAGE_DESELECTED,
    payload: id
})

export const saveSelectedImages = ({selectionId, authorId, selection}) => {
    return dispatch => {
        dispatch(saveSelectionRequested());
        
        axios.post("http://localhost:2010/v1/selection",{
            selectionId,
            authorId,
            selection,
        })
        .then(res=>{
            dispatch(saveSelectionCompleted(res.data.data))
        })
        .catch(err=>{
            dispatch(saveSelectionFailed(err))
        })
    }
}

const saveSelectionRequested = () =>  ({
    type: SELECTION_SAVE_REQUESTED   
})

const saveSelectionCompleted = (selection) =>  ({
    type: SELECTION_SAVE_COMPLETED,
    payload: selection
})

const saveSelectionFailed = (err) =>  ({
    type: SELECTION_SAVE_FAILED,
    payload: err 
})




