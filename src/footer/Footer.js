import styles from './Footer.module.css';
import avatar from '../assets/image-avatar.png'
export const Footer =()=>{
return(
<div className={styles.footer}>
    
   <img src={avatar} alt="icon" className={styles.avatar}/> 
   <span className={styles.creation}>Creation of</span>
   <span className={styles.text_hover}>Jules Wyvern</span>

</div>

);
}