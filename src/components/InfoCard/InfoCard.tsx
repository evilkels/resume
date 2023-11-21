import React from "react";
import { Avatar, Card, Text, Image, Title } from "@mantine/core";
import styled from "styled-components";

type PersonalInfoCardProps = {
  fullName: string;
  profession: string;
  imageSrc: string;
};

const StyledCard = styled(Card)({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  // margin: "1em 2em",
  padding: "1em 2em",
  gap: "1em",
  img: {
    height: "100px",
    width: "100px",
    borderRadius: "20%",
  },

  ".title": {
    // // fontFamily: "DejaVu Sans, Arial, sans-serif",
    // fontFamily: "Arial Unicode MS",
  },
});

const PersonalInfoCard: React.FC<PersonalInfoCardProps> = ({
  fullName,
  profession,
  imageSrc,
}) => {
  return (
    <StyledCard shadow="sm">
      <Image src={imageSrc} alt={fullName} />
      <div>
        <Title order={1} className="title">
          {fullName}
        </Title>
        <Text size="lg">{profession}</Text>
      </div>
    </StyledCard>
  );
};

export default PersonalInfoCard;
