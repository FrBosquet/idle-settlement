import { useCallback, useEffect, useReducer, useRef } from "react";
import { ProgressBar } from "./components/ProgressBar";
import { Settler } from "./components/Settler";
import { reducer } from "./game";
import { addDay } from "./game/day";
import { addResource } from "./game/resources";
import { setJob } from "./game/settler";
import { useInterval } from "./hooks/useInterval";
import "./styles.css";

const DAY_LAST = 5000;

export default function App() {
  const [state, dispatch] = useReducer(reducer);

  useInterval(() => {
    const list = state?.settlers.list || [];

    list.forEach((settler) => {
      switch (settler.job) {
        case "GATHER":
          dispatch(addResource("food", 1));
          break;
        case "WOODCUT":
          dispatch(addResource("wood", 1));
          break;
        default:
          return;
      }
    });

    dispatch(addDay());
  }, DAY_LAST);

  useEffect(() => dispatch({ type: "INIT" }), []);

  const handleSetJob = (id, job) => dispatch(setJob(id, job));

  return (
    <div className="App">
      <h1>Welcome to your settlement</h1>
      <ProgressBar duration={DAY_LAST} />
      <h3>day {state?.day}</h3>
      <h3>you have {state?.settlers.amount} settlers</h3>
      <div className="settler-table">
        {state?.settlers.list.map((settler) => (
          <Settler setJob={handleSetJob} settler={settler} key={settler.name} />
        ))}
      </div>
      <div>resources {JSON.stringify(state?.resources)}</div>
    </div>
  );
}
