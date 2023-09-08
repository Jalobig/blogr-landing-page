import React from 'react'
import classes from './FeatureLeft.module.scss'
import ImgEditor from '../../../images/illustration-editor-desktop.svg'

const FeatureLeft = () => {
  return (
    <div className={classes.feature}>
        <h1 className={classes['feature__heading--1']}>Designed for the future</h1>
    <div className={classes.feature__row}>
        <div className={classes.feature__column}>
            <h2 className={classes['feature__heading--2']}>Introducing an extensible editor</h2>
            <p className={classes.feature__text}>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog.</p>
            <h2 className={classes['feature__heading--2']}>Robust content management</h2>
            <p className={classes.feature__text}>Flexible content management enables users to easily move through posts. Increase the usability of your blog 
  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
        </div>
        <img src={ImgEditor } alt='Editor Illustration' className={classes.feature__bg}/>
    </div>
    </div>
  )
}

export default FeatureLeft