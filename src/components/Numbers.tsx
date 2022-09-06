import React from 'react'
import {State}from "../state/state"
import {ActionTypes} from '../state/action-types.ts'

const Numbers = ({dispatch , digit} ) => {
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

export default Numbers