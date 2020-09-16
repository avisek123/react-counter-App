import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Tooltip from "@material-ui/core/Tooltip";
import "./styles.css";
const App = () => {
  const [state, setState] = useState(1);
  const handleClick = () => {
    setState(state + 1);
  };
  const handleClick1 = () => {
    if (state > 0) {
      setState(state - 1);
    } else {
      alert("Sorry , Zero limit reached");
    }
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{state}</h1>
          <div className="btn-div">
            <Tooltip title="Increment">
              <Button onClick={handleClick} className="btn-green">
                <AddIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Decrement">
              <Button className="btn-red" onClick={handleClick1}>
                <RemoveIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
