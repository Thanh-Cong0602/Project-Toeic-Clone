import { vocabularyConstants } from "../_constants";

export const vocabularyActions = {
   setCurrentCategoryID,
   saveResultPlayGame
}

function setCurrentCategoryID(categoryID) {
   return {
      type: vocabularyConstants.SET_CURRENT_CATEGORY_ID,
      payload: categoryID
   }
}

function saveResultPlayGame(result) {
   return {
      type: vocabularyConstants.SAVE_RESULT_PLAYGAME,
      payload: result
   }
}