import { FC } from "react";
import { Header } from "./common/header/Header";
import { Cards } from "./components/main";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "./theme/ThemeContextProvider";
import { Charts } from "./components/main/charts/Charts";
import { Users } from "./components/main/users/Users";
import { TableData } from "./components/main/tableData/TableData";
import { Footer } from "./common/footer/Footer";

export const App: FC = () => {

  const { theme } = useThemeContext()

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Cards />
      <Charts />
      <Users />
      <TableData />
      <Footer />
    </ThemeProvider>
  )
};

