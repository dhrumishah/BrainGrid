import React from "react";
import Split from "react-split";
import ProblemDescription from "./Problemdescription/ProblemDescription";
import Playground from "./Playground/Playground";
type Props = {};

const Workspace = (props: Props) => {
  return (
    <Split className="split" minSize={0}>
      <ProblemDescription />
      <Playground />
    </Split>
  );
};

export default Workspace;
