import React,{useState} from 'react';
import styles from './AddUser.module.css'
import Button from '../Button/Button';
import Card from '../Card/Card';
const AddUser=(props)=>{
const [userInput,setUserInput]=useState('')
const [userAge,setUserAge]=useState('')
const userData={
    id:Math.random().toString(),
    name:userInput,
    age:+userAge
}

const submitHandler=(event)=>{
    event.preventDefault();
   
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
    <Button/>
    </form>
    
    </Card>

    )
}

export default AddUser;