import React from 'react';
import styles from './Card.module.css';
import { MainImage} from '../mainImage/MainImage';

export const Card = () =>{
  return(
<div className={styles.cardContainer}>
 <MainImage/>
</div>
);
}