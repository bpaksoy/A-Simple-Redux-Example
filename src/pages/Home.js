import React, {Component} from "react";
import Users from "../components/Users";
import Comments from "../components/Comments";

class Home extends Component{
  render() {
    return(
      <div className="container">
        <div className="row">
         <div className="col-md-4">
          <Users/>
         </div>
        <div className="col-md-4">
          <Comments/>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;
