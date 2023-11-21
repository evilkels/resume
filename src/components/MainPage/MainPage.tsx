import { Badge, Text, Textarea } from "@mantine/core";

import React from "react";
import data from "../../data.json";
import styled from "styled-components";
import BlockTitle from "../Blocks/BlockTitle";
import {
  IconBriefcase,
  IconDevices2,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";
import WorkExperienceBlock from "../Blocks/WorkExperienceBlock";
import EducationBlock from "../Blocks/EducationBlock";
import DetailBlock from "../Blocks/DetailBlock";
import SkillBlock from "../Blocks/SkillBlock";
import LanguageBlock from "../Blocks/LanguageBlock";
import ProjectsBlock from "../Blocks/ProjectsBlock";

type Props = {};

const StyledPage = styled.div({
  width: "100%",
  padding: "1em",
  display: "grid",
  gridTemplateColumns: "2.34fr 1fr",
  background: "white",
  gap: "1em",
});
const MainPage = (props: Props) => {
  return (
    <StyledPage>
      <div>
        <BlockTitle title="Personal Info" icon={<IconUser />}>
          {data.personalInfo.summary.map((s, idx) => (
            <Text m={"1em 0"} key={idx + 1}>
              {s}
            </Text>
          ))}
        </BlockTitle>
        <BlockTitle title="Work experience" icon={<IconBriefcase />}>
          {data.workExperience.map((item) => (
            <WorkExperienceBlock
              key={item.company}
              company={item.company}
              position={item.position}
              startDate={item.startDate}
              endDate={item.endDate}
              description={item.responsibilities}
            />
          ))}
        </BlockTitle>
        <BlockTitle title="Projects" icon={<IconDevices2 />}>
          {data.projects.map((item) => (
            <ProjectsBlock
              key={item.title}
              title={item.title}
              description={item.description}
              technologies={item.technologies}
              url={item.url}
            />
          ))}
        </BlockTitle>
        <BlockTitle title="Education" icon={<IconSchool />}>
          {data.education.map((item) => (
            <EducationBlock
              key={item.school}
              school={item.school}
              degree={item.degree}
              startDate={item.startDate}
              endDate={item.endDate}
              description={item.description}
            />
          ))}
        </BlockTitle>
      </div>
      <div>
        <DetailBlock />
        <SkillBlock data={data.skills} />
        <LanguageBlock data={data.languageSkills} />
      </div>
    </StyledPage>
  );
};

export default MainPage;
