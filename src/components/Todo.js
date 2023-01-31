import {memo} from "react";

const Todo = ({todo,count}) => {
    console.log('todo rendered')
  return(
      <li>{ count+1 +'. '+todo}</li>
  )
}
export default memo(Todo)
