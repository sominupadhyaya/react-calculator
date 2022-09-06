import React from "react"
import {ActionTypes} from './actions-types.ts'

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