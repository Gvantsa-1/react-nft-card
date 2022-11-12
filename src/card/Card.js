import React from 'react';
import styles from './Card.module.css';
import { MainImage} from '../mainImage/MainImage';
import { Text } from '../text/Text';
import {Footer} from '../footer/Footer'

export const Card = () =>{
  return(
<div className={styles.cardContainer}>
 <MainImage/>
 <Text/>
 <Footer/>
</div>
);
}