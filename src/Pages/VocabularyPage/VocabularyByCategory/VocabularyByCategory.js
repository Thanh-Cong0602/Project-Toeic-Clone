import React, {useState } from 'react'
import PlayGamePage from '../PlayGamePage/PlayGamePage';
import LexicalPage from '../LexicalPage/LexicalPage';

function VocabularyByCategory() {
   const [isshowPlayGame, setIsShowPlayGame] = useState(false);
   return (
      <div>
         {!isshowPlayGame ? (
            <LexicalPage
               setIsShowPlayGame={setIsShowPlayGame}  
            />
         ) : (
            <PlayGamePage 
            setIsShowPlayGame={setIsShowPlayGame}  
            />
         )}
      </div>
   )
}

export default VocabularyByCategory
