import {memo} from 'react'
import Todo from './Todo'

const Todos = ({todos}) => {
    console.log('Todos rendered')
   return(
       <ul>
           {
                todos.map((item,index) => (
               <Todo key={index} todo={item} count={index}/>
               ))
           }
       </ul>
   )
}
export default memo(Todos)
