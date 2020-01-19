import React from 'react';
import Item from "./Item"
class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <ul class="todoList" id="todoList">   
                <Item/>
		    </ul>
        )
    }
}



export default List;