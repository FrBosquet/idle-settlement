import { useCallback, useEffect, useReducer, useRef } from "react";
import { ProgressBar } from "./components/ProgressBar";
import { reducer } from "./game";
import { addDay } from "./game/day";
import "./styles.css";

const DAY_LAST = 5000;

export default function App() {
  const timer = useRef(null);
  const [state, dispatch] = useReducer(reducer);

  const updateState = useCallback(() => {
    dispatch(addDay());
  }, []);

  useEffect(() => {
    dispatch({ type: "INIT" });

    if (timer.current) {
      clearInterval(timer.current);
    }

    timer.current = setInterval(() => {
      updateState();
    }, DAY_LAST);
  }, []);

  return (
    <div className="App">
      <h1>Welcome to your settlement</h1>
      <ProgressBar duration={DAY_LAST} />
      <h3>day {state?.day}</h3>
      <h3>you have {state?.settlers.amount} settlers</h3>
      <div className="settler-table">
        {state?.settlers.list.map(({ name }) => (
          <span>{name}</span>
        ))}
      </div>
    </div>
  );
}
