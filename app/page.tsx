"use client";
import Head from "next/head";
import React, { useRef } from "react";
import styled from "styled-components";
import PersonalInfoCard from "../src/components/InfoCard/InfoCard";
import MainPage from "../src/components/MainPage/MainPage";
import Footer from "../src/components/Footer/Footer";
import { PDFExport } from "@progress/kendo-react-pdf";
import data from "../src/data.json";

const StyledMain = styled.div({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "white !important",
  margin: "1em",
  // borderRadius: "10px",
});

const Index = () => {
  const pdfExportComponent = useRef(null);
  const exportPDF = () => {
    if (pdfExportComponent?.current) {
      // @ts-ignore
      pdfExportComponent?.current?.save?.();
    }
  };
  const { personalInfo } = data;
  return (
    <>
      <Head>
        <title>Resume page</title>
        <meta name="description" content="Elvijs Resume page" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
      </Head>

      <main style={{ background: "gray" }}>
        <button onClick={() => exportPDF()}>
          Export PDF &lcedil; &kcedil;
        </button>
        <PDFExport ref={pdfExportComponent} paperSize="A4" scale={0.4}>
          <StyledMain id="export">
            <PersonalInfoCard
              fullName={personalInfo.name}
              profession={personalInfo.profession}
              imageSrc={personalInfo.image}
            />
            <MainPage />
          </StyledMain>
        </PDFExport>
      </main>
      <Footer />
    </>
  );
};

export default Index;
