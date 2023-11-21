import React from "react";
import { Card, Text, Title } from "@mantine/core";
import styled from "styled-components";

interface EducationBlockProps {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  description?: string[];
}
const StyledBlock = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  ".title1": {
    marginBottom: "0.5em",
  },
  ".title": {
    margin: "0.1em",
  },
  ".date": {
    color: "gray",
    marginTop: "0.3em",
  },
  p: {
    margin: "0.3em",
  },
  margin: "1em 0",
});
const EducationBlock: React.FC<EducationBlockProps> = ({
  school,
  degree,
  startDate,
  endDate,
  description,
}) => {
  return (
    <StyledBlock>
      <Title order={3} className="title1">
        {school}
      </Title>
      <Title order={5} className="title">
        {degree}
      </Title>
      <Text className="date">
        {startDate} - {endDate}
      </Text>
      {description &&
        description.map((item, idx) => <Text key={idx + 1}>{item}</Text>)}
    </StyledBlock>
  );
};

export default EducationBlock;
