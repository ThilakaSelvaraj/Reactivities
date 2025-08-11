import { Group } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Container, MenuItem, Typography, LinearProgress } from "@mui/material";
import MenuItemLink from "../shared/component/MenuItemLink";
import { NavLink } from "react-router";
import { Observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore";

// type Props={
//     openForm:()=>void
// }

export default function NavBar() {

    const {uiStore}=useStore()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ 
                backgroundImage: 'linear-gradient(135deg,#182a73 0%,#218aae 69%,#20a7a3 89%)',
                position:'relative'
             }}>
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
                             <MenuItemLink to='counter'>
                            Counter</MenuItemLink>
                        </Box>
                         <Box>
                             <MenuItemLink to='error'>
                            Errors</MenuItemLink>
                        </Box>
                        <Box>
                            <MenuItem >
                            User Menu
                            </MenuItem>
                        </Box>
                        
                    </Toolbar>
                </Container>

                <Observer> 
                   {()=>uiStore.isLoading?(
                    <LinearProgress 
                    color="secondary"
                    sx={{
                        position:'absolute',
                        left:0,
                        right:0,
                        bottom:0,
                        height:10
                    }} />
                   ):null}
                </Observer>

            </AppBar>
        </Box>
    );
}