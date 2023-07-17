import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Row, Col } from 'antd'
import Logo from '../../Assets/vo_dien.jpg'
import { SearchOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userActions } from '../../Redux/_actions';
import { BellFilled } from '@ant-design/icons'
import { MenuOutlined } from '@ant-design/icons'
import { SettingTwoTone } from '@ant-design/icons'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import Cookies from 'js-cookie';
function Navbar() {
   const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);
   const username = Cookies.get('username')
   const [isDropdownVisible, setDropdownVisible] = useState(false);
   const dispatch = useDispatch()
   const handleLogout = () => {
      dispatch(userActions.logout());
   }
   const toggleDropdown = () => {
      setDropdownVisible(!isDropdownVisible);
    };
    useEffect(() => {

    }, [isDropdownVisible])
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
                  {!isLoggedIn ? (
                     <>
                        <Link to={"/login"}>
                           <div >
                              Login
                           </div>
                        </Link>
                     </>
                  ) :
                  (
                     <>
                        <div className='login-success'>
                           <div className='logo-user'>
                                 <img src={Logo} alt='Logo' />
                              </div>
                              <div className='username'>
                                 {username}
                              </div>
                              <div className=''>
                                 <BellFilled />
                              </div>
                              <div className='menu-infor' >
                                 <MenuOutlined onClick={toggleDropdown}/>
                              </div>
                           </div>
                              {isDropdownVisible && (
                                 <div className="menu-login-dropdown">
                                 <Link>
                                    <div className='menu-dropdown-item'>
                                       <div className='icon'>
                                          <UserOutlined />
                                       </div>
                                       Profile
                                    </div>
                                 </Link>
                                 <Link>
                                    <div className='menu-dropdown-item'>
                                       <div className='icon'>
                                          <SettingTwoTone />
                                       </div>
                                       Setting
                                    </div>
                                 </Link>
                                 <Link to={"/"} onClick={handleLogout}>
                                    <div className='menu-dropdown-item'>
                                       <div className='icon'>
                                          <LogoutOutlined />
                                       </div>
                                       Logout
                                    </div>
                                 </Link>
                              </div>
                              )}
                        </>
                     )}
               </Col>
            </Row>
         </div>
      </>
   )
}

export default Navbar
