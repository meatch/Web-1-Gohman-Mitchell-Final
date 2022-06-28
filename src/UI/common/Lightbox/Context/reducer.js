import { actionTypes } from './actionTypes.js';

/*---------------------------
| State Updater (reducer)
---------------------------*/
const reducer = (state, action) => {

    switch(action.type) {
        case actionTypes.LB_SHOW_MODAL_UPDATE: {
            return {
                ...state,
                showModal: action.showModal,
            };
        }

        default: {
            return {...state}
        }
    }
}

export default reducer;