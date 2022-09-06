import React from 'react'
import {ActionTypes} from '../state/action-types'

const Number = ({dispatch , digit}) => {
  return (
    <>
    <button onClick = {() => dispatch({
        type : ActionTypes.ADD_NUMS,
        payload : {
            digit
        }
    })}>{digit}</button>
    </>
  )
}

export default Number