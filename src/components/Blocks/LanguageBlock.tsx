import { Title, Text } from "@mantine/core";
import React, { FC } from "react";
import styled from "styled-components";
import SkillLevelBlock from "./SkillLevelBlock";

type Props = {
  data: {
    language: string;
    proficiency: string;
  }[];
};
const StyledBlock = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "1em",
  ".title": {
    margin: "1em",
  },
  ".lang": {
    width: "100%",
    padding: "0 1em",
  },
});
const LanguageBlock: FC<Props> = ({ data }) => {
  return (
    <StyledBlock>
      <Title order={3} className="title">
        Languages:
      </Title>
      {data.map((item, idx) => (
        <div key={idx + 1} className="lang">
          <Title order={5} key={idx + 1}>
            {item.language}
          </Title>
          <Text>{item.proficiency}</Text>
        </div>
      ))}
    </StyledBlock>
  );
};

export default LanguageBlock;
