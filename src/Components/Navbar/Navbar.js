import React from 'react'
import './Navbar.css'
import { Row, Col } from 'antd'
import Logo from '../../Assets/vo_dien.jpg'
import { SearchOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

function Navbar() {
   return (
      <>
         <div className='navbar'>
            <Row>
               <Col span={2}>
                  <Link to={"/"}>
                  <div className='logo'>
                     <img src={Logo} alt='Logo' />
                  </div>
                  </Link>
               </Col>
               <Col span={16} className='center'>
                  <Row gutter={[12, 0]}>
                     <Col span={8}>
                        <div className='search-bar'>
                           <input type='text' placeholder='Search...' />
                           <SearchOutlined className='search-icon' style={{ fontSize: '20px' }} />
                        </div>
                     </Col>
                     <Col span={4}>
                        <Link >
                           <div className='navbar-item'>
                              Vocabulary
                           </div>
                        </Link>
                     </Col>
                     <Col span={4}>
                        <Link >
                           <div className='navbar-item'>
                              Grammar
                           </div>
                        </Link>
                     </Col>
                     <Col span={4}>
                        <Link >
                           <div className='navbar-item'>
                              Blog
                           </div>
                        </Link>
                     </Col>
                     <Col span={4}>
                        <Link >
                           <div className='navbar-item'>
                              Test
                           </div>
                        </Link>
                     </Col>
                  </Row>
               </Col>
               <Col span={6} className='right-navbar'>
                  <Link to={"/login"}>
                     <div >
                        Login
                     </div>
                  </Link>
               </Col>
            </Row>
         </div>
      </>
   )
}

export default Navbar
