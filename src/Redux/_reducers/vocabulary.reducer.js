import { vocabularyConstants } from "../_constants";

const initialState = {
   currentCategoryID: "",
   saveResultPlayGame: 0
}

export function vocabulary(state = initialState, action) {
   switch (action.type) {
      case vocabularyConstants.SET_CURRENT_CATEGORY_ID:
         return {
            ...state,
            currentCategoryID: action.payload
         }
      case vocabularyConstants.SAVE_RESULT_PLAYGAME:
         return {
            ...state,
            saveResultPlayGame: action.payload
         }
      default:
         return state
   }
}