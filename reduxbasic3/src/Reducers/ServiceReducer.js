import * as Actions from "../Actions/ActionTypes";

const serviceReducer = (state = {isLoading: false, error: undefined, data: {}}, action) => {

    switch (action.type) {
        case Actions.SERVICE_PENDING:
        return 

        case Actions.SERVICE_ERROR:
        return

        case Actions.SERVICE_SUCCESS:
        return

        default:
        return
    }
};

export default serviceReducer;