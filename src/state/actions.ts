import { ActionTypes } from "./action-types";


interface AddAction{
    type : ActionTypes.ADD_NUMS,
    payload : number
}

interface ClearScreen{
    type : ActionTypes.CLEAR_SCREEN
}

interface DeleteNumbers{
    type : ActionTypes.DELETE_NUMS
    payload : number
}

interface Evaluate{
    type : ActionTypes.EVALUATE
    payload : number
}

interface Operation{
    type : ActionTypes.OPERATION
    payload : string
}

export type Actions = AddAction | ClearScreen | Evaluate | Operation | DeleteNumbers 