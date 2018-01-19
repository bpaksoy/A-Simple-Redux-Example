import React, { Component } from "react"
import { connect } from 'react-redux';
import actions from '../actions';


class Comments extends Component{
 constructor(props){
   super(props)
   this.state = {

   }
 }
handleInput(event){
  const value = event.target.value;
  this.setState({
    currentComment: value
  })
}

getComment(commenter, event){
    event.preventDefault();
    let text = this.refs.text;
   //create a new object to send to commentReducer
    const newComment = {
      name: commenter,
      comment: this.state.currentComment
    }
    //send the new object to the commentReducer
    text.value = "";
    this.props.addComment(newComment)

}


render(){
 //get the currentUser state from the reducer
  const user = this.props.users.currentUser;
  let commenter;
  {(user)? commenter = user.name : "" }
 // get the comments from the commentReducer
  const comments = this.props.comment[commenter];

  return(
    <div>
     <h2>Hello {(user)? user.name : "" }</h2>
      <form>
       <h4>Post Something Here</h4>
       <input ref="text" onChange={this.handleInput.bind(this)} type="text"/>
       <button onClick={this.getComment.bind(this, commenter)}>Submit</button>
      </form>
      {
        (comments)? <p>{commenter} says: {comments.map((comment, i)=> <li key={i}>{comment.text}</li>)}</p> : ""
      }


    </div>
  )
 }
}


// get the user state from the store to bind it to the comment
const stateToProps = (state) => {
	return {
    users: state.users,
    comment: state.comment
	}
}

const dispatchToProps = (dispatch) => {
	return {
    addComment: (comment) => dispatch(actions.addComment(comment))
	}
}

export default connect(stateToProps, dispatchToProps)(Comments);
