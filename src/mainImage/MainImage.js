
import React from 'react'
import styles from './MainImage.module.css';
import view from '../assets/icon-view.svg';
export const MainImage =()=>{
return (
<div className={styles.imgContainer}>
<img className={styles.img} alt="img"src={require('../assets/main.jpg')}/>
<div className={styles.hover}><img className={styles.imgView} src={view}/></div>

</div>
);
}