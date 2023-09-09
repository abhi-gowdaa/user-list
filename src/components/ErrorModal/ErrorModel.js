
import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from './ErrorModel.module.css'

const ErrorModel=(props)=>{



    return(
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.msg.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.msg.message}</p>
            </div>
            <footer className={styles.actions}>
             <Button btn={props.btn}>okay</Button>
            </footer>
        </Card>

    );

}


export default ErrorModel;