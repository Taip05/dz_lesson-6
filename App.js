import {Box,Typography,Button, Toolbar} from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

 export default function App (){
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-labal="menu sx={{ mr: 2 }}">
          
          <MenuIcon/>
        </IconButton>
        <Typography variant="= "h6 color="inherit" component="div">

        </Typography>
        </Toolbar>
      </AppBar>
      </Box>
  );
 }