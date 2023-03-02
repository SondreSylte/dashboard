import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant = "h5">
                Hva er poenget med denne siden?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Vet ikke enda.
            </Typography>
        </AccordionDetails>
        </Accordion>  

        <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant = "h5">
                Hvordan laget du denne siden?
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                React!! og Javasript!
            </Typography>
        </AccordionDetails>
        </Accordion> 

        <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant = "h5">
                Flere spm...
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Det er ikke et spørsmål.
            </Typography>
        </AccordionDetails>
        </Accordion> 

        <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant = "h5">
                An important question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Dette er en viktig tekst.
            </Typography>
        </AccordionDetails>
        </Accordion> 

        <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant = "h5">
                An important question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Dette er en viktig tekst.
            </Typography>
        </AccordionDetails>
        </Accordion> 

        <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant = "h5">
                An important question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Dette er en viktig tekst.
            </Typography>
        </AccordionDetails>
        </Accordion>     
    
    </Box>
  );
};

export default FAQ;
