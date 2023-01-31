import Button from "./Button";
import {memo} from 'react'
const Form = ({onSubmitHandle,onChangeHandler,todo}) => {
    console.log('Form rendered')
    return(

      <form onSubmit={onSubmitHandle}>
          <input type="text" value={todo} onChange={onChangeHandler}/>
          <Button disable={!todo} text="Ekle" variant="success"/>
      </form>
    )
}
export default memo(Form)
