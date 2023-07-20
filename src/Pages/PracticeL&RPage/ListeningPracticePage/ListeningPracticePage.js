import React from 'react'
import './ListeningPracticePage.css'
import { Headphones } from 'react-bootstrap-icons'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
function ListeningPracticePage() {
   return (
      <div className='listen-practice-overview'>
         <div className='title'>
            Start your TOEIC Listening Practice Test Now !!!
         </div>
         <div className='icon-title'>
            <div className='icon-headphone'>
               <Headphones style={{ fontSize: '20px', margin: '4px 0px' }} />
            </div>
            <div className='word'>
               Listening
            </div>
         </div>
         <div className='main-practice-items'>
            <Row gutter={[32, 16]}>
               <Col span={7}>
                  <div className='lesson-item'>
                     Lesson 1
                  </div>
                  <div className='lesson-item'>
                     Lesson 1
                  </div>
                  <div className='lesson-item'>
                     Lesson 1
                  </div>
                  <div className='lesson-item'>
                     Lesson 1
                  </div>
               </Col>
               <Col span={17} className='test-items'>
                  <Row gutter={[32, 32]}>
                     <Col span={4}>
                        <Link to={"/playGameListen"}>
                           <div className='test-item'>
                              123
                           </div>
                        </Link>
                     </Col>
                     <Col span={4}>
                        <div className='test-item'>
                           123
                        </div>
                     </Col>
                     <Col span={4}>
                        <div className='test-item'>
                           123
                        </div>
                     </Col>
                     <Col span={4}>
                        <div className='test-item'>
                           123
                        </div>
                     </Col>
                     <Col span={4}>
                        <div className='test-item'>
                           123
                        </div>
                     </Col>
                     <Col span={4}>
                        <div className='test-item'>
                           123
                        </div>
                     </Col>
                     <Col span={4}>
                        <div className='test-item'>
                           123
                        </div>
                     </Col>
                     <Col span={4}>
                        <div className='test-item'>
                           123
                        </div>
                     </Col>
                     <Col span={4}>
                        <div className='test-item'>
                           123
                        </div>
                     </Col>
                     <Col span={4}>
                        <div className='test-item'>
                           123
                        </div>
                     </Col>
                     <Col span={4}>
                        <div className='test-item'>
                           123
                        </div>
                     </Col>
                     <Col span={4}>
                        <div className='test-item'>
                           123
                        </div>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </div>
      </div>
   )
}

export default ListeningPracticePage
