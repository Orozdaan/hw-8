import Button from "./Button"
import Card from "./Card"
import classes from './ErrorModal.module.css'
import  ReactDOM from "react-dom"

const BacDrop = props=>{
    return<div onClick={props.onConfirm} className={classes.backdrop}/>
}
const ModalOverlay = props=>{
    return(
        <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p >{props.message} </p>
        </div>
        <footer className={classes.actions}>
            {props.children}
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>
    )
}


const ErrorModal =(props)=>{
    return(
        <>
              {
                  ReactDOM.createPortal(
                      <BacDrop onConfirm={props.onConfirm}/>,
                      document.getElementById('backdrop-root')
                  )
              }
              {
                  ReactDOM.createPortal(
                      <ModalOverlay title={props.title} onConfirm={props.onConfirm} message={props.message} children={props.children}/>,
                      document.getElementById('modal-root')
                  )
              }
        </>
    )
}
export default ErrorModal