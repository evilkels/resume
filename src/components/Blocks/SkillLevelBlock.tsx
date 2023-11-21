import { Progress } from "@mantine/core";
import React from "react";

type Props = {
  value: number;
};

const SkillLevelBlock = (props: Props) => {
  const { value } = props;

  return <Progress value={value * 20} />;
};

export default SkillLevelBlock;
