import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component{

    renderList(){
        return this.props.books.map((book)=>{
            return(
                <li key={book.title} 
                    className="list-group-item"
                    onClick={()=> this.props.selectBook(book)}>
                    {book.title}
                </li>
            );
        });
    }

    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return {
        books:state.books
    };
}

// anything returned from this function will end up as props on the BookList container
function  mapDispatchToProps(dispatch){
    //whenever selectbook is called, the result should be passed to all of our reducer
    return bindActionCreators({selectBook: selectBook}, dispatch);
    
}

// Promote BookList from a component to a container
// It needs to know about this new dispatch method -> selectBook
// Make is available as props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);