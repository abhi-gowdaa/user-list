import React,{useState} from 'react';
import styles from './AddUser.module.css'
import Button from '../Button/Button';
import Card from '../Card/Card';
import ErrorModel from '../ErrorModal/ErrorModel';

const AddUser=(props)=>{
const [userInput,setUserInput]=useState('')
const [userAge,setUserAge]=useState('')
const [error,setError]=useState(false)
const userData={
    id:Math.random().toString(),
    name:userInput,
    age:+userAge
}

const errorBtnHandler=()=>{
    setError(false)
}


const submitHandler=(event)=>{
    event.preventDefault();
    if (userInput.trim().length===0 || userAge.trim().length===0 ){
        setError({
            title:'Invalid input',
            message:'Please enter a valid name and age (should not be empty )'
        })
        return;
        }
    if(+userAge<1){
        setError({
            title:'Invalid age',
            message:'Please enter a valid age '
       
        })
        return;
    }    
   
    props.onEntry(userData)
}

console.log(userData)
const nameHandler=(event)=>{
    setUserInput(event.target.value)

}
const ageHandler=(event)=>{
    setUserAge(event.target.value)
}

// const inputChangeHandler=(index,value)=>{
//     setUserInput((prevInput)=>{
//         return{
//             ...prevInput,
            
//             [index]:+value
//         }
//     })
      
// }  


    return(
        <div>
{error && <ErrorModel msg={error} btn={errorBtnHandler}/>}
<Card>
    <form onSubmit={submitHandler}>
    <label className={styles.label}>Username</label>
    <input 
           type="text"
            className={styles.input}
            onChange={nameHandler}
            />
    <label className={styles.label}>Age (Years) </label>
    <input type='Number' 
          className={styles.input}
          onChange={ageHandler}></input>
    <Button>Add user</Button>
    </form>
    
    </Card>
    </div>
    )
}

export default AddUser;