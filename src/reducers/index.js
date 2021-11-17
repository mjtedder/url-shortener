const reducer = (state = {}, action) => {
    switch(action.type) {
        case "GET_URL":
            return { ...state, loading: true };
        case "SET_URL":
            return { ...state, url: action.url, loading: false }
        default:
            return state;
    }
};

export default reducer;