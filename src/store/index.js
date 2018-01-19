import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import  userReducer  from '../reducers/userReducer';
import  commentReducer  from '../reducers/commentReducer';


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a store with one reducer: userReducer. When
	adding more reducers, make sure to include them in
	line 3 (above) and line 18 (below):
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var store
export default {

	configureStore: (initialState) => { // initialState can be null

		const reducers = combineReducers({ // insert reducers here
			users: userReducer,
      user: userReducer,
      comment: commentReducer
		})

		if (initialState){
			store = createStore(
			    reducers,
			    initialState,
			    applyMiddleware(thunk)
			)

			return store
		}

		store = createStore(
		    reducers,
		    applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {
		return store
	}
}
