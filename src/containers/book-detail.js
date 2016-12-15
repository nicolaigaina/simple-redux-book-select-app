import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
    render(){

        if(!this.props.book){
            return <p>No book selected</p>;
        }

        return(
            <div>
                <h3>Details for: {this.props.book.title}</h3>
                <p>Pages: {this.props.book.pages}</p>
            </div>
        );
    };
}

function mapStateToProps(state){

    // the returned object has to be the same as if we want to use it in the upper BookDetail componet -> this.props.book

    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);