import Card from "../UI/Card"
import classes from './UserList.module.css'
import Button from'../UI/Button'
import ErrorModal from "../UI/ErrorModal"
import { useState } from "react"
const UsetList =(props)=>{
    
    const [del, setDel] = useState(null)
    const[data,setData]=useState([])



    const windowHandler=(event)=>{
        setData(props.users.filter((user)=>user.id !=event.target.id))
        setDel({
            title:'delete user',
            message:"Are you sure?"
        })

    }

    const deleteHandler=(e)=>{
        if(e.target.type==='button'){
            props.getData(data)
            setDel(null)
        }
       
    }
    const cancelHandler=()=>{
        setDel(null)
    }

    return(
       <div>
            {del && <ErrorModal  title={del.title}  message={del.message} onConfirm={deleteHandler}><Button onClick={cancelHandler}>Cancel
                </Button>
                </ErrorModal>  }
            <Card className ={classes.users}>
            <ul>
                {props.users.map((user)=>(
                <li key ={user.id}>
                    {user.name} ({user.age}years old)
                    <Button onClick={windowHandler} id={user.id}>Delete
                    </Button>
                    
                </li>
                ))}
            </ul>
        </Card>
       </div>
    )
}
export default UsetList;
