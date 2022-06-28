import { actionTypes } from './actionTypes.js';

/*---------------------------
| Actions (Action Creators)
---------------------------*/
export const showModalUpdate = (showModal) => {
    return {
        type: actionTypes.LB_SHOW_MODAL_UPDATE,
        showModal: showModal,
    };
}