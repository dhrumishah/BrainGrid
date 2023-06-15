import React, { useState } from "react";
import Split from "react-split";
import ProblemDescription from "./Problemdescription/ProblemDescription";
import Playground from "./Playground/Playground";
import { Problem } from "@/utils/types/problem";
import Confetti from "react-confetti";
type WorkSpaceProps = {
  problem: Problem;
};

const Workspace: React.FC<WorkSpaceProps> = ({ problem }) => {
  const [success, setSuccess] = useState(false);
  const [solved, setSolved] = useState(false);
  return (
    <Split className="split" minSize={0}>
      <ProblemDescription problem={problem} _solved={solved} />
      <Playground
        problem={problem}
        setSuccess={setSuccess}
        setSolved={setSolved}
      />
      {success && <Confetti gravity={0.3} tweenDuration={4000} />}
    </Split>
  );
};

export default Workspace;
