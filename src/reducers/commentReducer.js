
var initialState = {
   "Banu Yilmaz":
      [
       {text: "I like sunny Fridays"}
      ],
  "Bilge Yilmaz":
      [
        {text: "I hate popcorn"},
        {text: "I love Banu"},
       ],
    "Atif Akin":
      [
        {text: "I hate pizza"}
        ],
  "Jay Jay Johanson":
      [
        {text: "I hate sushi"}
      ]
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state);


	switch (action.type) {

    case "ADD_COMMENT":
     //console.log("comment object:", action.data.comment);
     let currentUser = action.data.name.trim();
     // if the user exists push new comment to the array else create a new user with a new comment array
     (newState[currentUser])? newState[currentUser].push({text: action.data.comment}) : newState[currentUser] = [{text: action.data.comment}];
     //console.log("newState", newState);
     return newState;

		default:
			return state;
	}
}
