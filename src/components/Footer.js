import React from "react";
import { Box, Stack, Typography, Link } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import CodeIcon from "@mui/icons-material/Code";

const Footer = () => (
  <Box
    mt="80px"
    bgcolor="#FFF3F4"
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mt: "41px",
      pb: "40px",
    }}
  >
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "100px", height: "41px" }} />
    </Stack>

    <Typography variant="body1" sx={{ mb: 0.5 }}>
      Designed & Coded by
    </Typography>
    <Typography variant="h6" component="div">
      <Link
        href="https://www.linkedin.com/in/vaibhav-singh-8a35a5163/"
        target="_blank"
        rel="noreferrer"
        sx={{
          color: "primary.main",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        Vaibhav Singh
      </Link>
    </Typography>
  </Box>
);

export default Footer;
