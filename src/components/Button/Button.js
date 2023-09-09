import styles from './Button.module.css'

const Button=(props)=>{


    return(
        <div>
           <button type="submit" className={styles.button} onClick={props.btn}>{props.children}</button>
        </div>
     );
}

export default Button;