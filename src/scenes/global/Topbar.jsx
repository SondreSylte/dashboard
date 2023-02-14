

import { Box, IconButton, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";


const Topbar = () => {
    const theme = useTheme(); //using mui material
    const colors = tokens(theme.palette.mode); //every time we use a color its gonna determine the color we want.
    const colorMode = useContext(ColorModeContext);

    //<Box> is similar to <Div>, but you can put CSS properties directly into the element.
    //Pros: Very convenient.
    //Cons: The components can be long.
    //For normal elements, the suggested way to write CSS is using the sx={{}}
    return <Box display="flex" justifyContent="space-between" p={2}>
        {/* SEARCH BAR to the left on top bar */}
        <Box 
        display="flex" 
        backgroundColor={colors.primary[400]} //primary color we would like to use.
        borderRadius= "3px"
        >
            <InputBase sx={{ ml: 2, flex: 1}} placeholder = "Search" />  
            <IconButton>
                <SearchIcon type="button" sx={{ p: 1 }} />
            </IconButton>
        </Box>

        {/* ICONS to the right on top bar*/}
        <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? (
                <DarkModeOutlinedIcon />
            ) : (
                <LightModeOutlinedIcon />
            )}
        
        </IconButton>
        <IconButton>
            < NotificationsOutlinedIcon />
            
        </IconButton> 
        <IconButton>
            <SettingsOutlinedIcon  />
        </IconButton> 
        <IconButton>
            <PersonOutlinedIcon />
        </IconButton>   
        </Box>    
    </Box>
 }

 export default Topbar;