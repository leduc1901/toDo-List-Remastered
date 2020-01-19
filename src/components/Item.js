import React from 'react';
import { connect } from 'react-redux'
import { deleteTask , completeTask , returnPage} from '../actions/toDoListAction'

class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    deleteState = (e) => {
        e.stopPropagation();
        this.props.dispatchDeleteTask(e.currentTarget.id)
    }
 
    completeTask = (e) => {
        this.props.dispatchCompleteTask(e.currentTarget.id)
    }

    fetchData = () => {
        let startRange;
        let endRange;
        if(this.props.totalPage >= 1){
            startRange = (this.props.currentPage*5) -5;
            endRange =  this.props.currentPage*5
        }else{
            startRange = 0;
            endRange = this.props.value.length - 1
        }
        let item = this.props.value.slice(startRange , endRange).map((val , i) => {
            return (
                <li className={val.isDone ? 'item completed' : 'item'} onDoubleClick={this.completeTask.bind(this)} id={ startRange + i} >
                <span data-id={i} id={startRange + i} onClick={this.deleteState.bind(this)} >
                    <i class='fa fa-trash' >  </i>
                </span>
                {val.val}
            </li>
            )     
        })
        if(this.props.currentPage != 1 && this.props.currentPage != 0 && item.length == 0){
            this.props.dispatchReturnPage(this.props.currentPage)
        }  
        return item
    }

    render() {
        
        return (
            <>
            {this.fetchData()}
            </>
        )
    }
}

function mapStateToProps(state){
    return {
        value : state.value,
        currentPage : state.currentPage,
        totalPage : state.totalPage,
        listPage : state.listPage
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatchDeleteTask : (id) => dispatch(deleteTask(id)),
        dispatchCompleteTask : (id) => dispatch(completeTask(id)),
        dispatchReturnPage : (id) => dispatch(returnPage(id))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Item);