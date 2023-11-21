import { Title } from "@mantine/core";
import React, { FC } from "react";
import styled from "styled-components";
import SkillLevelBlock from "./SkillLevelBlock";

type Props = {
  data: {
    category: string;
    details: {
      name: string;
      level: number;
    }[];
  }[];
};
const StyledBlock = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "1em",
  ".title": {
    marginTop: "1em",
  },
  ".skills": {
    width: "80%",
    padding: "0 1em",
  },
  ul: {
    width: "80%",
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    padding: 0,
    gap: "0.5em",
  },
});
const SkillBlock: FC<Props> = ({ data }) => {
  return (
    <StyledBlock>
      <Title order={3} className="title">
        Skills:
      </Title>
      {data.map((item, idx) => (
        <div className="skills" key={idx + 1}>
          <Title order={5} key={idx + 1}>
            {item.category}
          </Title>
          <ul key={idx + 1}>
            {item.details.map((item, idx) => (
              <>
                <li key={idx + 1}>{item.name}</li>
                <SkillLevelBlock value={item.level} />
              </>
            ))}
          </ul>
        </div>
      ))}
    </StyledBlock>
  );
};

export default SkillBlock;
