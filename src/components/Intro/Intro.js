import React from 'react'
import classes from './Intro.module.scss'
import CTAButton from '../Buttons/CTAButton/CTAButton';
import ClearButton from '../Buttons/ClearButton/ClearButton';
const Intro = () => {
  return (
    <div className={classes.intro}>
        <h1 className={classes.intro__heading}>A modern publishing platform</h1>
        <p className={classes.intro__text}>Grow your audience and build your online brand</p>
        <div className={classes.intro__row}>
            <CTAButton>Start for free</CTAButton>
            <ClearButton>Learn More</ClearButton>
        </div>
    </div>
  )
}

export default Intro