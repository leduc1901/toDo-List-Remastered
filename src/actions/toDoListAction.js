import * as ActionType from './actionTypes'

export const pressEnter = (value) => {
    return {
        type : ActionType.PRESS_ENTER,
        value
    }
}
export const deleteTask = (id) => {
    return {
        type : ActionType.DELETE_TASK,
        id
    }
}
export const completeTask = (id) => {
    return {
        type : ActionType.COMPLETE_TASK,
        id
    }
}
export const selectPage = (id) => {
    return {
        type : ActionType.SELECT_PAGE,
        id
    }
}
export const setPage = (totalPage) => {
    return {
        type : ActionType.SET_PAGE,
        totalPage
    }
}
export const prevBtn = (id) => {
    return {
        type : ActionType.PREV_BTN,
        id
    }
}
export const nextBtn = (id) => {
    return {
        type : ActionType.NEXT_BTN,
        id
    }
}
export const returnPage = (id) => {
    return {
        type : ActionType.RETURN_PAGE,
        id
    }
}
export const deleteAll = () => {
    return {
        type : ActionType.DELETE_ALL
    }
}