import Topbar from "@/components/Topbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";
import React from "react";

type Props = {};

const ProblemPage = (props: Props) => {
  return (
    <div>
      <Topbar problemPage />
      <Workspace />
    </div>
  );
};

export default ProblemPage;
