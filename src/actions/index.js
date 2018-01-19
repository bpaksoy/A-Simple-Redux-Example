export default {
  selectCurrentUser : (user) => {
    return{
      type: "USER_SELECTED",
      data: user
    }
  },
  addComment: (comment) => {
    return {
    type: "ADD_COMMENT",
    data: comment
   }
  }
}
