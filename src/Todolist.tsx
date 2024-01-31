import React,{useState} from 'react'
import './App.css';

interface item{
    id:number,
    text:string,
    completed:boolean
  }

const Todolist:React.FC=()=>{

    const[todos,setTodos]=useState<item[]>([
        {id:1,text:"work 1",completed:false},
        {id:2,text:"work 2",completed:false},
    ])

    const[input,setInput]=useState<string>("");

    const handleToggle=(id:number)=>{
       setTodos(
        todos.map((todo)=>{
            if(todo.id===id){
                return {...todo,completed:!todo.completed}
            }
            return todo;
        })
       );
    };

    const handleClick=()=>{
        const newtodo: item={id:Date.now(),text:input,completed:false};
        setTodos([...todos,newtodo]);
    };
    return(
        <div className="main-container">
            
        <h1 className="header">Todo List</h1>
    
        <ul>
        {todos.map((todo)=>(
            <li  key={todo.id} onClick={()=>handleToggle(todo.id)}  style={{textDecoration:todo.completed ? "line-through" : "none"}}>{todo.text}</li>
        )
        )}
        </ul>
    
        <input type="text" placeholder="WRITE the WORK" onChange={(e)=>setInput(e.currentTarget.value)} />
    
        <button onClick={handleClick}>ADD</button>
      
        </div>
    )
}
export default Todolist;