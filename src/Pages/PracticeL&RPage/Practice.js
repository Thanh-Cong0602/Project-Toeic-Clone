import React, { useState } from 'react'
import ListeningPage from './ListeningPage/ListeningPage'
import ListeningPracticePage from './ListeningPracticePage/ListeningPracticePage'
import PlayGameListenPage from './PlayGameListenPage/PlayGameListenPage'
function Practice() {
   const [isShowPracticePage, setIsShowPracticePage] = useState(false)
   const [isShowListeningPage, setIsShowListeningPage] = useState(false)
   return (
      <div>
         {!isShowPracticePage ? (
            <>
         <ListeningPage setIsShowPracticePage={setIsShowPracticePage} />
            </>
         ): (
            <>
         <ListeningPracticePage setIsShowListeningPage = {setIsShowListeningPage} />
            </>
         )}
      </div>
   )
}

export default Practice
