import React from 'react'
import {ActionTypes} from '../state/action-types.ts'

const Number = ({dispatch , digit} ) => {
  return (
    <>
    <button onClick = {() => dispatch({
        type : ActionTypes.AddAction,
        payload : {
            digit
        }
    })}>{digit}</button>
    </>
  )
}

export default Number