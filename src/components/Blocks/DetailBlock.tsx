import { Text, Title } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconLocation,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

type Props = {};
const StyledBlock = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1em",

  ".icontext": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.3em",
  },
  ".email": {
    color: "#228be6",
    textDecoration: "none",
  },
  ".email:hover": {
    textDecoration: "underline",
  },
  ".links": {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
  },
});

const DetailBlock = (props: Props) => {
  return (
    <StyledBlock>
      <Title order={3}>Details:</Title>
      <Text>29 years old</Text>
      <Text className="icontext">
        <IconLocation /> Located in <strong>Riga, Latvia</strong>
      </Text>
      <Text className="icontext">
        <IconPhone /> +371 26843750
      </Text>
      <Link href="mailto:elvijs.vilkels@gmail.com" className="icontext email">
        <IconMail /> elvijs.vilkels@live.com
      </Link>
      <Title order={3}>Links:</Title>
      <div className="links">
        <Link
          href="https://www.linkedin.com/in/eevilkels/"
          className="icontext email"
        >
          <IconBrandLinkedin /> LinkedIn
        </Link>
        <Link
          href="https://www.facebook.com/elvijsvilkels/"
          className="icontext email"
        >
          <IconBrandFacebook /> Facebook
        </Link>
        <Link
          href="https://www.instagram.com/elviits/"
          className="icontext email"
        >
          <IconBrandInstagram /> Instagram
        </Link>
      </div>
    </StyledBlock>
  );
};

export default DetailBlock;
