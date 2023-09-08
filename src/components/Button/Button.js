import styles from './Button.module.css'

const Button=()=>{

    return(
        <div>
           <button type="submit" className={styles.button}>Add user</button>
        </div>
     );
}

export default Button;