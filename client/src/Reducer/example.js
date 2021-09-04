import { EXAMPLE } from "../Constants/constant";

const initialState = {
    Data: []
}

export default function (state = initialState, action) {
    if (action) {
        switch (action.type) {
            case EXAMPLE:
                return {
                    ...state,
                    Data: action.payload,
                }

            default:
                return state
        }

    }



}