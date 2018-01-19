import React, { Component } from "react";
import { connect } from 'react-redux'
import actions from '../actions'

class Users extends Component{
 constructor(props){
   super(props)
   this.state = {}
  }

getProfileInfo(user, event){
  if(event){
    event.preventDefault();
    console.log("User clicked", user);
    //send clicked user to userReducer
    this.props.selectCurrentUser(user);
  }
}

render(){
  //get all users and current user from userreducer
  const users = this.props.users.all;

  return(
    <div>
     <h2>User Component Here</h2>
       <ul>{users.map( (user, i) => <li key={i}><a onClick={this.getProfileInfo.bind(this, user)} href="#">{user.name}</a></li>)}</ul>
    </div>
  )
 }
}

// get all state from the store
const stateToProps = (state) => {
	return {
    users : state.users
	}
}

//dipatch the action to update state on userReducer

const dispatchToProps = (dispatch) => {
	return {
      selectCurrentUser: (user) => dispatch(actions.selectCurrentUser(user))
	}
}

export default connect(stateToProps, dispatchToProps)(Users);
