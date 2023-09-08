import React from 'react'
import classes from './FeatureAlt.module.scss'
import BGCircle from '../../../images/bg-pattern-circles.svg'
import ImgPhone from '../../../images/illustration-phones.svg'

const FeatureAlt = () => {
  return (
    <div className={classes.feature}>
        <div className={classes.feature__bggroup}>
            <img src={BGCircle} alt='Background circles' className={classes.feature__bgimg} />
        </div>
        <div className={classes.feature__row}>
            <img src={ImgPhone} alt='Mockup of Blogr' className={classes.feature__img}/>
            <div className={classes.feature__column}>
                <h1 className={classes.feature__heading}>State of the Art Infrastructure</h1>
                <p className={classes.feature__text}>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
  This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
            </div>
        </div>
    </div>
  )
}

export default FeatureAlt