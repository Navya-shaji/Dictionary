
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { TextField, MenuItem, Container, Box } from "@mui/material";
import React from "react";
import "./Header.css";
import Data from "../Data/data";

function Header({ category, setCategory, word, setWords,setMeanings }) {
  const HandleChange = (e) => {
    setCategory(e.target.value);
    setWords("");
    setMeanings([]);
  };

  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
      background: {
        default: "#f5f5f5",
        paper: "#ffffff",
      },
    },
    typography: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: "2.5rem",
        "@media (max-width:600px)": {
          fontSize: "2rem",
        },
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            margin: "8px",
            width: "100%",
            maxWidth: "320px",
            "& label.Mui-focused": {
              color: "#3f51b5",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#3f51b5",
              },
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className="header-container">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "30px 0",
            width: "100%",
            backgroundColor: theme.palette.background.paper,
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <h1 className="header-title">{word ? word : "WordWise"}</h1>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              padding: "10px",
            }}
          >
            <div>
            <TextField
              id="standard-basic"
              label="Search a Word"
              variant="outlined"
              className="text-field"
              value={word}
              onChange={(e) => setWords(e.target.value)}
              sx={{
                margin: "10px",
                minWidth: { xs: "250px", md: "300px" },
              }}
            />
           </div>
           <div>
            <TextField
              id="outlined-select-currency"
              select
              label="Select Language"
              value={category}
              onChange={HandleChange}
              defaultValue="English"
              helperText="Please select your language"
              className="text-field"
              sx={{
                margin: "20px",
                minWidth: { xs: "250px", md: "300px"  },
                marginTop: "43px",
              }}
            >

              {Data.map((option) => (
                <MenuItem key={option.label} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Header;
