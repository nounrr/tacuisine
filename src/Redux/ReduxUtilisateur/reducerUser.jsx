const initialState = {
    users: [],
    error: null, // To store error messages
  };
  
  const utilisateursReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USERS_SUCCESS':
        return {
          ...state,
          users: action.payload,
          error: null, // Clear any previous error
        };
      case 'FETCH_USERS_ERROR':
        return {
          ...state,
          error: action.payload, // Store the error message
        };
      case 'CREATE_USER':
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      case 'UPDATE_USER':
        return state.map((user) =>
          user.id === action.payload.id ? { ...user, ...action.payload } : user
        );
      case 'DELETE_USER':
        return state.filter((user) => user.id !== action.payload);
      default:
        return state;}
    }

  export default utilisateursReducer;
  