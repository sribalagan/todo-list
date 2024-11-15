import React,{Fragment,useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';

const InputTodo = () =>{

    const [description,setDescription] = useState("");
    const onSubmitForm = async(e)=>{
       e.preventDefault();
        try {
           const body = { description };
           const response = await fetch("http://localhost:5001/todos",{
            method : "POST",
            headers:{"Content-type" : "application/json"},
            body:JSON.stringify(body)
           });
           window.location = '/';
        } catch (err) {
            console.error(err)
        }
    }
return(
    <Fragment>
    <h1 className="text-center mt-5">TODO LIST</h1>
    <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
        <button className="btn btn-success">ADD</button>
    </form>
    </Fragment>
)
}

export default InputTodo;