import { ListItemButton, ListItemIcon, ListItemText, List, IconButton } from '@mui/material'
import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

const PAGES = ["Products", "Services", "About Us", "Contact us", "Log In", "Log Out"]
const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <React.Fragment>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List sx={{ width: "200px" }}>
                    {
                        PAGES.map((page, index) => (
                            <ListItemButton onClick={() => setOpenDrawer(false)}>
                                <ListItemIcon>
                                    <ListItemText>
                                        {page}
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItemButton>

                        ))
                    }
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ color: "white", marginLeft: "auto" }}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    )
}

export default DrawerComp
