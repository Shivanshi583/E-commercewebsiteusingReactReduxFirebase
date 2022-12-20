import React,{useRef,useEffect} from 'react';
import './header.css';
import {Container,Row} from 'reactstrap';
import {useSelector} from "react-redux";
import logo from "../../Assets/Images/eco-logo.png";
import userIcon from "../../Assets/Images/user-icon.png";

import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion';


const nav__links=[
  {
    path:'home',
    display:'Home'
  },
  {
    path:'shop',
    display:'Shop'
  },
  {
    path:'cart',
    display:'Cart'
  },
]

const Header = () => {
  const headRef = useRef(null);
  const menuRef=useRef(null);
  const totalQuantity = useSelector(state=>
    state.cart.totalQuantity
    )


  const stickyHeaderFunc =() =>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop >80 || document.documentElement.scrollTop
        >80){
          headRef.current.classList.add("sticky__header")
        }
        else{
          headRef.current.classList.remove("sticky__header")
        }
    });
  };
  useEffect(()=>{
    stickyHeaderFunc()

    return ()=> window.removeEventListener('scroll',stickyHeaderFunc)

  });

  const menuToggle =() => menuRef.current.classList.
  toggle('active__menu');

  return <header className='header' ref={headRef}>
        <Container>
         <Row>
          <div className='nav_wrapper'>
         <div className='logo'>
          <img src={logo} alt="logo"/>
          
          <div>
            <h1> MarketPlace </h1>
         </div>
         </div>
          <div className='navigation' ref={menuRef} 
          onClick={menuToggle}>
            <ul className='menu'>

              {
                nav__links.map((item,index)=>(
                  <li className='nav__item' key={index}>
                    <NavLink to={item.path}  className={(navClass)=>navClass.isActive? 'nav__active':''}>{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
        <div className='nav__icons'>
          <span className='fav__icon'>
            <i class="ri-heart-line"></i>
            <span className='badge'>2</span>
            </span>
          <span className='cart__icon'>
            <i class="ri-shopping-bag-line"></i>
            <span className='badge'>{totalQuantity}</span>
            </span>
          <span><motion.img  whileTap={{ scale: 1.2}} src={userIcon} alt="usericon"/>
          </span>
          <div className="mobile__menu">
          <span onClick={menuToggle}>
            <i class="ri-menu-line"></i>
            </span>
        </div>
        </div>

       


          </div>
         </Row>

        </Container>

  </header>
}

export default Header
