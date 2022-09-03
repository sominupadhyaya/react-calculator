import React , {useReducer} from 'react'

type ActionTypes = {
  ADD_NUMS: string,
  OPERATION: string,
  CLEAR_SCREEN : string,
  DELETE_NUMS : string,
  EVALUATE : string
}
interface State {
  currentOperand : number,
  previousOperand : number,
  operation : string
}

const reducer = (state : State, action) =>{

}

const Calculator = () => {
  const [{currentOperand, previousOperand, operation} , dispatch] = useReducer<State>(reducer , {})
  return (
    <div>
      <div className="previous-operand">{previousOperand} {operation}</div>
      <div className="current-operand">{currentOperand}</div>
      <button className="normal-btns" >1</button>
      <button className="normal-btns" >2</button>
      <button className="normal-btns" >3</button>
      <button className="normal-btns" >4</button>
      <button className="normal-btns" >5</button>
      <button className="normal-btns" >6</button>
      <button className="normal-btns" >7</button>
      <button className="normal-btns" >8</button>
      <button className="normal-btns" >9</button>
      <button className="normal-btns" >0</button>
      <button className="add-btn">+</button>
      <button className="sub-btn">-</button>
      <button className="divide-btn">/</button>
      <button className="multiply-btn">*</button>
    </div>
  )
}
export default Calculator