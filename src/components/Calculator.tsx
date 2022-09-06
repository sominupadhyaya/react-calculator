import React , {useReducer} from 'react'
import { ActionTypes } from '../state/action-types'
import {Actions} from '../state/actions'
import {State} from '../state/state'
import {Number} from "./Numbers"



const Calculator = () => {
  function reducer(state : State, action  : Actions){
    switch(action.type){
      case ActionTypes.ADD_NUMS:
        return {
          ...state ,
          currentOperand : `${currentOperand} ${action.payload}`
      }
    }
  }
  const [{currentOperand, previousOperand, operation} , dispatch] = useReducer<State>(reducer , {})
  return (
    <div>
      <div className="previous-operand">{previousOperand} {operation}</div>
      <div className="current-operand">{currentOperand}</div>
      <Number className="normal-btns" digit="1" dispatch={dispatch}/>
      <Number className="normal-btns" digit="2" dispatch={dispatch}/>
      <Number className="normal-btns" digit="3" dispatch={dispatch}/>
      <Number className="normal-btns" digit="4" dispatch={dispatch}/>
      <Number className="normal-btns" digit="5" dispatch={dispatch}/>
      <Number className="normal-btns" digit="6" dispatch={dispatch}/>
      <Number className="normal-btns" digit="7" dispatch={dispatch}/>
      <Number className="normal-btns" digit="8" dispatch={dispatch}/>
      <Number className="normal-btns" digit="9" dispatch={dispatch}/>
      <Number className="normal-btns" digit="0" dispatch={dispatch}/>
      <Operations className="add-btn" operation="+" dispatch={dispatch}/>
      <Operations className="sub-btn" operation="-" dispatch={dispatch}/>
      <Operations className="divide-btn" operation="/" dispatch={dispatch}/>
      <Operations className="multiply-btn" operation="*" dispatch={dispatch}/>
    </div>
  )
}

export default Calculator