import React from 'react'
import classes from './Header.module.scss'
import Navbar from '../../components/Navbar/Navbar';
import Intro from '../../components/Intro/Intro';
import BGIntroDesktop from '../../images/bg-pattern-intro-desktop.svg'

const Header = () => {
  return (
    <header className={classes.header}>
        <img src={BGIntroDesktop} alt='Background pattern' className={classes.header__bg}/>
        <Navbar/>
        <Intro/>
    </header>
  )
}

export default Header