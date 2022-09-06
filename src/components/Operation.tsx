import React from "react"
import {ActionTypes} from '../state/action-types'

const Operation = ({dispatch, operation}) =>{
  return (
    <>
    <button onClick = {() => dispatch({
        type : ActionTypes.OPERATION,
        payload : {
            operation
        }
    })}>{operation}</button>
    </>
  )
}



export default Operation