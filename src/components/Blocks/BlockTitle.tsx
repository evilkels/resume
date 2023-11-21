import { Title, Text, Divider } from "@mantine/core";
import styled from "styled-components";

interface BlockTitleProps {
  icon: JSX.Element;
  title: string;
  children: React.ReactNode;
}
const StyledBlock = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  ".title": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "1.2em",
    margin: "0",
  },
  ".children": {
    marginLeft: "1.2em",
    lineHeight: "1.5em",
    fontSize: "0.756rem",
    // padding: "1em 0",
  },
  ".divi": {
    height: "1px",
    background: "lightgray",
    width: "100%",
    margin: "0",
  },
});
export default function BlockTitle({
  icon: Icon,
  title,
  children,
}: BlockTitleProps) {
  return (
    <StyledBlock>
      <div className="title">
        {Icon}
        <Title order={3}>{title}</Title>
      </div>
      <Divider my="sm" variant="solid" color="lightgray" className="divi" />

      <div className="children">{children}</div>
    </StyledBlock>
  );
}
