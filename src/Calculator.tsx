import React , {useReducer} from 'react'
import { ActionTypes } from './state/action-types'
import {Actions} from './state/actions'
import {State} from './state/state'



const reducer = (state : State, action  : Actions) =>{
  switch(action.type){
    case ActionTypes.ADD_NUMS:
      
  }
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