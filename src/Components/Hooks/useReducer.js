import { useReducer } from 'react';
import './useState.css';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count > 0 ? state.count - 1 : 0 };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [, dispatch] = useReducer(reducer, initialState);

  return null;
};

export default UseReducer;