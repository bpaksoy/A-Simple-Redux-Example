
var initialState = {
	all: [
    {
      name: "Banu Yilmaz",
      city: "Jersey City",
      state: "NJ"
    },
    {
      name: "Bilge Yilmaz",
      city: "Jersey City",
      state: "NJ"
    },
    {
      name: "Atif Akin",
      city: "NY",
      state: "NY"
    },
    {
      name: "Jay Jay Johanson",
      city: "NY",
      state: "NY"
    }
  ],

	currentUser: null // signed in user
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)

	switch (action.type) {

    case "USER_SELECTED":
     //console.log("currentUser: ", action.data)
     newState['currentUser'] = action.data
     //console.log("newState", newState);
     return newState;

		default:
			return state;
	}
}
