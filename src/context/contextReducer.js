const contextReducer = (state, action) => {
    let transaction;
  switch (action.type) {
    case "DELETE_TRANSACTION":
        transaction=state.filter((x)=>x.id!==action.payload);
        localStorage.setItem('transactions',JSON.stringify(transaction));
       
      return transaction;
    case "ADD_TRANSACTION":
         transaction=[action.payload,...state];
         localStorage.setItem('transactions',JSON.stringify(transaction));
         return transaction;
    default:
        return state;
  }
};

export default contextReducer;
