import * as ActionType from '../actions/actionTypes';

const defaultState = {
    value : [{ val : "1", isDone : false}],
    currentPage : 1,
    totalPage : 1,
    listPage : []
}

export default function toDoListReducer(state = defaultState , action){
   switch(action.type){
       case ActionType.PRESS_ENTER:
            if(action.value == ""){
                return state
            }else{
                return Object.assign({}, state , {
                    value : state.value.concat({val : action.value  , isDone : false}),
                    currentPage : state.totalPage
                });
            }
        case ActionType.DELETE_TASK:
            let newValue = Object.assign([], state.value);
                newValue.splice(action.id , 1)
                return Object.assign({}, state ,{
                    value : newValue
                });  
        case ActionType.COMPLETE_TASK:
            let newState = JSON.parse(JSON.stringify(state))
            newState.value[action.id] = {
                ...state.value[action.id] , 
                isDone : !newState.value[action.id].isDone 
            }
            return newState 
        case ActionType.SET_PAGE:
            if(action.totalPage > state.totalPage){
                return Object.assign({}, state , {
                    totalPage : action.totalPage,
                    currentPage : action.totalPage
                });
            }
            return Object.assign({}, state , {
                totalPage : action.totalPage,
            });
        case ActionType.SELECT_PAGE:
            return Object.assign({}, state , {
                currentPage : parseInt(action.id)
            })
        case ActionType.PREV_BTN:
                if(action.id == 1){
                    return state
                }else{
                    return Object.assign({}, state , {
                        currentPage : action.id - 1
                    });
                }
        case ActionType.NEXT_BTN:
                if(action.id == state.totalPage){
                    return state
                }else{
                    return Object.assign({}, state , {
                        currentPage : action.id + 1
                    });
                }
        case ActionType.RETURN_PAGE:
            return Object.assign({}, state , {
                currentPage : action.id - 1
            })
        case ActionType.DELETE_ALL:
            console.log(1)
            return Object.assign({}, state , {
                value : [],
            })
        default:
            return state
   } 
}