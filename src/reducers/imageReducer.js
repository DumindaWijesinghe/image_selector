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
    SELECTION_SAVE_FAILED

} from '../actions/actionTypes'

const imagesReducer = (state = {
    images: {
        isFetching: false,
        didInvalidated: false,
        items: [],
        author: {},
        cover: ""
    },
    selectedImages: {
        isFetching: false,
        didInvalidated: false,
        ids: []
    }
}, action) => {
    switch (action.type) {
        case IMAGES_REQUESTED:
            return {
                ...state,
                images: {
                    isFetching: true
                }
            }
        case IMAGES_COMPLETED:
            return {
                ...state,
                images: {
                    items: action.payload.entries,
                    author: action.payload.author,
                    cover: action.payload.cover,
                    selectionId: action.payload.id
                }
            }
        case IMAGES_FAILED:
            return {
                ...state,
                images: {
                    didInvalidated: true
                }
            }
        case SELECTED_IMAGES_REQUESTED:
            return {
                ...state,
                selectedImages: {
                    ...state.selectedImages,
                    isFetching: true
                }
            }
        case SELECTED_IMAGES_COMPLETED:
            return {
                ...state,
                selectedImages: {
                    isFetching: false,
                    ids: action.payload.selection
                }
            }
        case SELECTED_IMAGES_FAILED:
            return {
                ...state,
                selectedImages: {
                    ...state.selectedImages,
                    isFetching: false,
                    didInvalidated: true,
                }
            }
        case IMAGE_SELECTED:
            return {
                ...state,
                selectedImages:{
                    ids: [...state.selectedImages.ids, action.payload]
                }
            }
        case IMAGE_DESELECTED:
            return {
                ...state,
                selectedImages:{
                    ids: [...state.selectedImages.ids.filter(id => id !== action.payload)]
                }
            }
        case SELECTION_SAVE_REQUESTED:
            return {
                ...state,
                selectedImages: {
                    ...state.selectedImages,
                    isFetching: true
                }
            }
        case SELECTION_SAVE_COMPLETED:
            return {
                ...state,
                selectedImages: {
                    isFetching: false,
                    ids: action.payload.selection
                }
            }
        case SELECTION_SAVE_FAILED:
            return {
                ...state,
                selectedImages: {
                    ...state.selectedImages,
                    isFetching: false,
                    didInvalidated: true,
                }
            }
        default:
            return state;

    }
};

export default imagesReducer;