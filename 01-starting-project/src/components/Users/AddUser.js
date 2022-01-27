import React, { Fragment } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from'./AddUser.module.css'
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
// import Wrapper from "./Helpers";
const AddUser=(props)=>{
    const [userName, setUserName]=useState('')
    const [age,setAge]=useState('')
    const [error , setError]= useState(null)


    const usernameChangeHandler =(event)=>{
        setUserName(event.target.value)
    }

    const ageChangeHandler =(event)=>{
        setAge(event.target.value)
    }

    const addUserhandler =(event)=>{
        event.preventDefault();
        if (userName.trim().length === 0 || age .trim().length=== 0 ){
            setError({
                title:"Invalid input",
                 message:"Please enter a valid name and age (non empty values)"
            })
            return;
        }
        if(+age<1){
            setError({
                title:"Invalid input",
                message:"Please enter a valid age (>0)"
            })
            return;
        }
        props.onAddUser(userName, age)
        setUserName('')
        setAge('')
    }
    const errorHandler =()=>{
        setError(null)
    }
    return (
        <Fragment>
     {error && <ErrorModal
                title={error.title} 
                message={error.message}
                onConfirm={errorHandler}/>}
 
    <Card className={classes.input}>
    <form onSubmit={addUserhandler}>
        <label htmlFor="username">Username</label>
        <input 
         id="username"
        type="text" 
        value={userName}
        onChange={usernameChangeHandler}/>
        <label htmlFor="age"> Age (years)</label>
        <input 
                id="age"
                type="number"
                value={age} 
                onChange={ageChangeHandler}/>
        <Button type="submit" >Add User</Button>
    </form>
    </Card>
        </Fragment>
    )}
       
export default AddUser