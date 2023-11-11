import { Toolbar, Tabs, Tab, Button, useMediaQuery, useTheme, Typography } from '@mui/material'
import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerComp from './DrawerComp';

const PAGES = ["Products", "Services", "About Us", "Contact us"]
const Header = () => {
    const [value, setValue] = useState("Value");
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(isMatch);
    return (
        <React.Fragment>
            <AppBar sx={{ background: "#063970" }}>
                <Toolbar>
                    <ShoppingCartCheckoutIcon />
                    {
                        isMatch ? (
                            <>
                                <Typography sx={{ marginLeft: "10px", fontSize: "1.2rem" }}>
                                    SHOPPEE
                                </Typography>
<DrawerComp />                            </>
                        ) : (
                            <>
                                <Tabs textColor="inherit" value={value} onChange={(e, value) => setValue(value)} indicatorColor="primary">
                                    {
                                        PAGES.map((page, index) => (
                                            <Tab key={index} label={page} />

                                        ))
                                    }
                                </Tabs>
                                <Button sx={{ marginLeft: "auto" }} variant="contained">Login</Button>
                                <Button sx={{ marginLeft: "10px" }} variant="contained">Log Out</Button>
                            </>
                        )
                    }

                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header
