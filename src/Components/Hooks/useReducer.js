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
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section className="counter-page">
      <div className="counter-wrapper">
        <h1 className="counter-title">use reducer</h1>
        <p className="counter-value">{state.count}</p>

        <div className="counter-actions">
          <button
            type="button"
            className="counter-btn counter-btn--primary"
            onClick={() => dispatch({ type: 'increment' })}
          >
            INCR
          </button>
          <button
            type="button"
            className="counter-btn counter-btn--ghost"
            onClick={() => dispatch({ type: 'decrement' })}
            disabled={state.count <= 0}
          >
            DECR
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseReducer;