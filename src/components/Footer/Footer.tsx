import { Divider, Text } from "@mantine/core";
import { IconCopyright } from "@tabler/icons-react";
import { FC } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "1em",
  padding: "1em",
  margin: "1em",
  // background: "white",
});

const Footer: FC = () => {
  return (
    <StyledFooter>
      <IconCopyright />
      <Text>{new Date().getFullYear()}</Text>
      <Text>Elvijs Ernests Viļķels</Text>
    </StyledFooter>
  );
};

export default Footer;
