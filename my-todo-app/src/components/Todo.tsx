import { useState } from "react"
import styles from './Todo.module.css'


interface TodoProps {
  todos: { name: string; completed: boolean }[];
  setTodos: React.Dispatch<React.SetStateAction<{ name: string; completed: boolean }[]>>;
}

function Todo({todos, setTodos}: TodoProps) {
    const [todo, setTodo] = useState({name: "", completed: false})
    


    function handleSubmit(e: any){
        e.preventDefault()
        setTodos([...todos, { name: todo.name, completed: false }]);
        setTodo({name: "", completed: false})
    }

    function handleDelete(index: any){
      setTodos(todos.filter((_, i) => i !== index))
    }

    function handleComplete(index: any){
      const updatedTodos = todos.map((todo, i)=> i === index? {...todo, completed: !todo.completed}: todo)
      setTodos(updatedTodos)
    }

    
    

  return (
    <div>
      <form className={styles.todoForm } onSubmit={(handleSubmit)}>
        <div className={styles.inputContainer}><input className={styles.todotasks} placeholder="Enter todo tasks..." onChange={(e)=>setTodo({...todo, name: e.target.value})} value={todo.name} type="text" />
        <button className={styles.inputButton} type="submit">Add</button></div>
      </form>
      <div className={styles.todoList}> 
      {todos.map((item, index)=>(
        <div className={styles.todoItems}>
          <div className={styles.items} key={index}>
            <input type="checkbox" checked={item.completed} onChange={() => handleComplete(index)}/>
            {item.name}
            <span>
              <button className={styles.deleteItem} onClick={()=>handleDelete(index)}>delete</button>
           </span></div>
          <hr className={styles.hrLine} />
          
       </div>))}
      </div>
      
    </div>
  )
}
export default Todo