import styles from './Text.module.css';
import etherium from '../assets/icon-ethereum.svg';
import clock from '../assets/icon-clock.svg';

export const  Text =()=>{
    return(
    <div className={styles.text_container}>
    <div className={styles.h2}>Equilibrium  #3429</div>
    <div className={styles.h3}>Our Equilibrium collection promotes balance and calm.</div>
    <div className={styles.text_container_2}>
     <div className={styles.ethereum} ><img src={etherium} alt="icon" className={styles.img_icon}/>
       0.041 ETH </div> 
     <div className={styles.clock}> <img src={clock} alt="icon" className={styles.img_icon}/> 
       3 days left</div>
    </div>
 </div>
 );
}