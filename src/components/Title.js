import React from 'react';
import {connect} from 'react-redux'
import { pressEnter , deleteAll} from '../actions/toDoListAction'


class Title extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle : true
        };
    }

    toggle = () => {
        this.setState({
            toggle : !this.state.toggle
        })
    }

    showInput = () => {
        if(this.state.toggle){
            return (
                <input type="text"  id="name" onKeyUp={this.pressEnter} placeholder="[Add New Todo]"/>
            )
        }
    }

    pressEnter = (e) => {
        if(e.keyCode === 13){
            this.props.dispatchPressEnter(e.target.value)
            document.getElementById('name').value = "";
        }
    } 

    

    render() {
        return (
            <>
            <h1>To-Do List<i class="removeall" onClick={this.props.dispatchDeleleAll}>Clear</i><i class="add" onClick={this.toggle}>+</i></h1>
		    {this.showInput()}
          </>
        )
    }
}

function mapStateToProps(state) {
    return {
      
    }
  }

function mapDispatchToProps(dispatch){
    return {
        dispatchPressEnter : (value) => dispatch(pressEnter(value)),
        dispatchDeleleAll : () => dispatch(deleteAll())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Title);