import React from "react";
import Split from "react-split";
import ProblemDescription from "./Problemdescription/ProblemDescription";
type Props = {};

const Workspace = (props: Props) => {
  return (
    <Split className="split">
      <ProblemDescription />
      <div>The code</div>
    </Split>
  );
};

export default Workspace;
