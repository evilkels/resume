import React from "react";
import { Badge, Card, Text, Title } from "@mantine/core";
import styled from "styled-components";
import Link from "next/link";
import { IconLink } from "@tabler/icons-react";

interface ProjectsBlockProps {
  title: string;
  description: string;
  technologies: string[];
  url: string;
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
  ".link": {
    color: "#228be6",
    display: "flex",
    alignItems: "center",
    gap: "0.3em",
  },
  svg: {
    height: "1.5em",
  },
  ".badges": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "0.2em",
    margin: "1em",
  },
});
const ProjectsBlock: React.FC<ProjectsBlockProps> = ({
  title,
  description,
  technologies,
  url,
}) => {
  return (
    <StyledBlock>
      <Title order={3} className="title1">
        {title}
      </Title>
      <Link href={url} className="link">
        <IconLink /> {url.split("https://")[1]}
      </Link>

      <Text className="description">{description}</Text>
      <div className="badges">
        {technologies.map((item, idx) => (
          <Badge key={idx + 1} color="#228be6">
            {item}
          </Badge>
        ))}
      </div>
    </StyledBlock>
  );
};

export default ProjectsBlock;
