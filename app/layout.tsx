import { MantineProvider } from "@mantine/core";
import StyledComponentsRegistry from "./registry";
import "@mantine/core/styles.css";
import "../styles/globals.css";
import { theme } from "../theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
