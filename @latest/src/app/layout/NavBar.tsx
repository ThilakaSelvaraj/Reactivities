import { Group } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Container, MenuItem, Typography } from "@mui/material";
import MenuItemLink from "../shared/component/MenuItemLink";
import { NavLink } from "react-router";

// type Props={
//     openForm:()=>void
// }

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundImage: 'linear-gradient(135deg,#182a73 0%,#218aae 69%,#20a7a3 89%)' }}>
                <Container maxWidth='xl'>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <MenuItem component={NavLink} to='/' sx={{display:'flex',gap:3}}>
                            <Group fontSize="large"/>
                                <Typography variant="h4" fontWeight='bold'>Reactivities</Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{display:'flex'}}>
                            <MenuItemLink to='/activities'>
                            Activities</MenuItemLink>
                        </Box>
                        <Box>
                            <MenuItemLink to='createActivity'>
                            Create Activity</MenuItemLink>
                        </Box>
                        <Box>
                            <MenuItem >
                            User Menu
                            </MenuItem>
                        </Box>
                        
                    </Toolbar>
                </Container>

            </AppBar>
        </Box>
    );
}