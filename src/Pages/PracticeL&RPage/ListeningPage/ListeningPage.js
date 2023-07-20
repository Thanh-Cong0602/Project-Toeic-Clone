import React, { useState } from 'react'
import './Listening.css'
import { Headphones } from 'react-bootstrap-icons'
import { Row, Col } from 'antd'
import Image_Part1_1 from '../../../Assets/part1_1.jpg'
import Image_Part1_2 from '../../../Assets/part1_2.jpg'
import Image_Part1_3 from '../../../Assets/part1_3.webp'
import Image_Part1_4 from '../../../Assets/part1_4.jpg'
import Image_Part1_5 from '../../../Assets/part1_5.jpg'
import Image_Part1_6 from '../../../Assets/part1_6.jpg'
import Image_Part1 from '../../../Assets/part1.jpg'
import Image_Part2 from '../../../Assets/part2.jpg'
import Image_Part3 from '../../../Assets/part3.jpg'
import { Link } from 'react-router-dom'
function ListeningPage({ setIsShowPracticePage }) {
   const handleClickToPractice = () => {
      setIsShowPracticePage(true)
   }
   return (
      <>
         <div className='listen-overview'>
            <div className='title'>
               Practice TOEIC Test Online
            </div>
            <div className='icon-title'>
               <div className='icon-headphone'>
                  <Headphones style={{ fontSize: '20px', margin: '4px 0px' }} />
               </div>
               <div className='word'>
                  Listening
               </div>
            </div>
            <div className='main-topic-listen'>
               <Row gutter={[48]} className='tcn'>
                  <Col span={5}>
                     <Link to={"/listenPractice"} onClick={handleClickToPractice}>
                        <div className='item-topic'>
                           <div className='item-image'>
                              <img src={Image_Part1} />
                           </div>
                           <div>Part 1</div>
                        </div>
                     </Link>
                  </Col>
                  <Col span={5}>
                     <Link to={"/listenPractice"} onClick={handleClickToPractice}>
                        <div className='item-topic'>
                           <div className='item-image'>
                              <img src={Image_Part2} />
                           </div>
                           <div>Part 2</div>
                        </div>
                     </Link>
                  </Col>
                  <Col span={5}>
                     <Link to={"/listenPractice"} onClick={handleClickToPractice}>
                        <div className='item-topic'>
                           <div className='item-image'>
                              <img src={Image_Part3} />
                           </div>
                           <div>Part 3</div>
                        </div>
                     </Link>
                  </Col>
                  <Col span={5}>
                     <Link to={"/listenPractice"} onClick={handleClickToPractice}>
                        <div className='item-topic'>
                           <div className='item-image'>
                              <img src={Image_Part1_1} />
                           </div>
                        </div>
                     </Link>
                  </Col>
                  <Col span={5}>
                     <div className='item-topic'>
                        <div className='item-image'>
                           <img src={Image_Part1_4} />
                        </div>
                     </div>
                  </Col>
                  <Col span={5}>
                     <div className='item-topic'>
                        <div className='item-image'>
                           <img src={Image_Part1_5} />
                        </div>
                     </div>
                  </Col>
                  <Col span={5}>
                     <div className='item-topic'>
                        <div className='item-image'>
                           <img src={Image_Part1_6} />
                        </div>
                     </div>
                  </Col>
                  <Col span={5}>
                     <div className='item-topic'>
                        TCN
                     </div>
                  </Col>
               </Row>
            </div>
         </div>
      </>
   )
}

export default ListeningPage
