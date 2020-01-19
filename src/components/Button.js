import React from 'react';
import {connect} from 'react-redux'
import {setPage , selectPage , prevBtn , nextBtn} from "../actions/toDoListAction"

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    selectPage = (e) => {
        this.props.dispatchSelectPage(e.currentTarget.id)
    }

    prevBtn = () => {
        this.props.dispatchPrevBtn(this.props.currentPage)
    }
    
    nextBtn = () => {
        this.props.dispatchNextBtn(this.props.currentPage)
    }
 

    renderButton = () => {
        if(this.props.value.length >= 5 ){
            let totalPage = Math.ceil(this.props.value.length / 5 );
            let arr = [];
            this.props.dispatchSetPage(totalPage)
            for(let i = 0 ; i < totalPage ; i++){
                arr.push(i)
            }
            let renderBtn = arr.map(i => {
                return (
                    <li 
                        className={this.props.currentPage === i+1 ? "pagili current" : "pagili"}  
                        id={i+1}
                        onClick={this.selectPage.bind(this)} >
                            <a href='#'  id={i+1}>{i+1}</a>
                    </li>
                )
            })
            return (
                <div class="pagination1">
                    <div class="previousBtn" onClick={this.prevBtn}>Previous</div>
                    <div class="nextBtn" onClick={this.nextBtn}>Next</div>
                    <ul id="pagin" class="pagin1">
                        {renderBtn}
                    </ul>
               </div>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.renderButton()}
            </React.Fragment>
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
        dispatchSetPage : (totalPage) => dispatch(setPage(totalPage)),
        dispatchSelectPage : (id) => dispatch(selectPage(id)),
        dispatchPrevBtn : (id) => dispatch(prevBtn(id)),
        dispatchNextBtn : (id) => dispatch(nextBtn(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Button);