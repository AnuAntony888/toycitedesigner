
import React from "react";
import { useState, useEffect } from "react";
import { Drawer } from "@mui/material";


import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TableRow from "@mui/material/TableRow";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {navItems} from './Header'
const ResponsiveHeader = () => {
  const [openDrawer, setopenDrawer] = useState(false);
  return (
    <div>
      <IconButton onClick={() => setopenDrawer(!openDrawer)} sx={{float:'right'}}>
        <MenuIcon sx={{ color:'#FFEF05' ,float:'right'}} />
      </IconButton>

      <Drawer
        open={openDrawer}
        onClose={() => setopenDrawer(false)}
        PaperProps={{
          sx: { width: "300px", bgcolor: "rgba(0, 0, 0, 0.7)", color: "#FFEF05" },
        }}
      >
        <List>
          <CloseIcon
            onClick={() => setopenDrawer(false)}
            sx={{ float: "right", marginRight: "10px" }}
          ></CloseIcon>
          
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "left" ,color:'#FFEF05'}}>
                <ListItemText primary={item}     onClick={() => setopenDrawer(false)}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        
      </Drawer>
    </div>
  );
};

export default ResponsiveHeader;
