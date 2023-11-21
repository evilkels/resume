import React from "react";
import { Title, Text } from "@mantine/core";
import styled from "styled-components";

interface EmploymentProps {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description?: string[];
}
const StyledBlock = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",

  ".date": {
    color: "gray",
    marginTop: "0.3em",
  },
  p: {
    margin: "0.3em",
  },
  margin: "1em 0",
});
const WorkExperienceBlock: React.FC<EmploymentProps> = ({
  company,
  position,
  startDate,
  endDate,
  description,
}) => {
  return (
    <StyledBlock>
      <Title order={3}>
        {position} at &quot;{company}&quot;
      </Title>
      {/* <Text>{position}</Text> */}
      <Text className="date">
        {startDate} - {endDate ? endDate : "Present"}
      </Text>
      {description &&
        description.map((item, idx) => <Text key={idx + 1}>{item}</Text>)}
    </StyledBlock>
  );
};

export default WorkExperienceBlock;
