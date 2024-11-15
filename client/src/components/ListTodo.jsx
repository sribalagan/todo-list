import React,{Fragment,useEffect,useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import  EditTodo from './EditTodo';


export const ListTodo = () => {

    const [todos,setTodos] = useState([]);

    const deleteTodo = async(id)=>{
        const deleteTodo = await fetch(`http://localhost:5001/todos/${id}`,{
            "method" : "DELETE"
        });
        setTodos(todos.filter(todo => todo.todo_id !== id));
    }
    const getTodo =async()=>{
        try {
            
           const response = await fetch("http://localhost:5001/todos")
           const jsonData = await response.json();
            setTodos(jsonData)
        } catch (err) {
            console.error(err.message)
        }

    }
    useEffect( () => {
        
        getTodo()

    },[]);
    
  return (
<Fragment>
    <h1 className='text-center mt-5'>LIST TODO</h1>
    <table className="table mt-5">
    <thead>
      <tr>
        <th>DESCRIPTION</th>
        <th>EDIT</th>
        <th>DELETE</th>
      </tr>
    </thead>
    <tbody>
      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>*/}
      {todos.map(todo =>(
        <tr key={todo.todo_id}>
            <td>{todo.description}</td>
            <td><EditTodo todo={todo}/></td>
            <td><button className='btn btn-danger' onClick={()=> deleteTodo(todo.todo_id)}>delete</button></td>
        </tr>
      )

      )}
    </tbody>
  </table>
  </Fragment>
  )
}
