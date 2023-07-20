import React, { useEffect, useState } from 'react'
import './LexicalPage.css'
import { useSelector } from 'react-redux';
import { getVocabularyByCategory } from '../../../Api/Service/vocabulary.service'
import { toast } from "react-toastify";
import { VolumeUp } from 'react-bootstrap-icons';
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

function LexicalPage({ setIsShowPlayGame }) {
   const currentCategory = useSelector(state => state.vocabulary.currentCategory)
   const [vocabularyList, setVocabularyList] = useState([]);
   const resultfromPlayGame = useSelector(state => state.vocabulary.saveResultPlayGame)
   const handleSpeakVocabulary = (word) => {
      const value = new SpeechSynthesisUtterance(word)
      window.speechSynthesis.speak(value)
   }
   console.log(currentCategory)
   useEffect(() => {
      getVocabularyByCategory(`vocabularies/getByCategoryId?categoryId=${currentCategory.categoryID}`).then((res => {
         setVocabularyList(res.data.data)
      })).catch((err) => {
         toast.error(err.response.data.message, { autoClose: 2000 })
      })
   }, [])
   return (
      <>
         <div className='main-study-view-lexical'>
            <div className='main-study-flex'>
               <div className='study-layout-left' data-aos = "fade-right" data-aos-delay="400">
                  <div className='title'>
                     <h2>{currentCategory.categoryName}</h2>
                  </div>
                  <div className='showResult'>
                     <div className='result'>
                        {!resultfromPlayGame ? (
                           <>
                              0/12
                              <div className=''>
                                 Result
                              </div>
                           </>
                        ) : (
                           <>
                              {resultfromPlayGame} / 12
                              <div className=''>
                                 Result
                              </div>
                           </>
                        )}
                     </div>
                  </div>
               </div>
               <div className='study-layout-right'>
                  <div className='flash-card-overview' data-aos = "fade-left" data-aos-delay="400">
                     <h2>Overview</h2>
                     <div className='overview-all-items'>
                        {
                           vocabularyList.map((item, index) => (
                              <div className='overview-item' key={item.id}>
                                 <div className='overview-item-left'>
                                    <span className='word'>{item.word}</span>
                                    <span className='pronounce'>{item.pronounce}</span>
                                    <span>{item.mean}</span>
                                 </div>
                                 <div className='audio' onClick={() => { handleSpeakVocabulary(item.word) }}>
                                    <VolumeUp fontSize={25} />
                                 </div>
                              </div>
                           ))
                        }
                     </div>

                     <input type='submit' className='btn-playGame' value={"Play game"}
                        onClick={() => setIsShowPlayGame(true)} />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default LexicalPage
