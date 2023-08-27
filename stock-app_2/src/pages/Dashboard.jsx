import React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseLine from "@mui/material/CssBaseLine"

import ToolBar from "@mui/material/ToolBar"
import Button from "@mui/material/Button"
import Typograghy from "@mui/material/Typography"

function Dashboard () {
    const currentUser = true

    return (
        <Box sx={{ display: "flex"}}>
            s
            <CssBaseLine />
            <AppBar position="fixed"  >
                <ToolBar>
                    <Typograpgh variant="h6" component="div" sx={{flexGrow: 1}}  >
                        STOCK APP
                    </Typograpgh>
                    {currentUser && <Button 
                     color="inherit" >Logout
                     </Button>}
                </ToolBar>

            </AppBar>

            
        </Box>

    )
}

export default Dashboard