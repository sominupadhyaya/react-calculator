import React , {useReducer} from 'react'
import { ActionTypes } from '../state/action-types'
import {Actions} from '../state/actions'
import {State} from '../state/state'
import Number from "./Number"
import Operation from "./Operation"



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
      <Number  digit="1" dispatch={dispatch}/>
      <Number  digit="2" dispatch={dispatch}/>
      <Number  digit="3" dispatch={dispatch}/>
      <Number  digit="4" dispatch={dispatch}/>
      <Number  digit="5" dispatch={dispatch}/>
      <Number  digit="6" dispatch={dispatch}/>
      <Number  digit="7" dispatch={dispatch}/>
      <Number  digit="8" dispatch={dispatch}/>
      <Number  digit="9" dispatch={dispatch}/>
      <Number  digit="0" dispatch={dispatch}/>
      <Operation  operation="+" dispatch={dispatch}/>
      <Operation  operation="-" dispatch={dispatch}/>
      <Operation  operation="/" dispatch={dispatch}/>
      <Operation  operation="*" dispatch={dispatch}/>
    </div>
  )
}

export default Calculator