import { MEDIA_QUERY } from './../actions';

const INIT_STATE = {
    mediaQuery: '',
    width: null,
    height: null,
};

export const media = (state = INIT_STATE, action) => {
    switch (action.type) {
        case MEDIA_QUERY:
            return {
                ...state,
                width: action.width,
                height: action.height,
                mediaQuery: action.mediaQuery,
            };
        default:
            return state;
    }
};
