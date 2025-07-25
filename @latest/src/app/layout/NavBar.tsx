import { Group } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Container, MenuItem, Typography, Button } from "@mui/material";

type Props={
    openForm:()=>void
}

export default function NavBar({openForm}:Props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundImage: 'linear-gradient(135deg,#182a73 0%,#218aae 69%,#20a7a3 89%)' }}>
                <Container maxWidth='xl'>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <MenuItem sx={{display:'flex',gap:3}}>
                            <Group fontSize="large"/>
                                <Typography variant="h4" fontWeight='bold'>Reactivities</Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{display:'flex'}}>
                            <MenuItem sx={{fontSize:'1.2rem',fontWeight:'bold',textTransform:'uppercase'}}>
                            Activities</MenuItem>
                        </Box>
                        <Box>
                            <MenuItem sx={{fontSize:'1.2rem',fontWeight:'bold',textTransform:'uppercase'}}>
                            About</MenuItem>
                        </Box>
                        <Box>
                            <MenuItem sx={{fontSize:'1.2rem',fontWeight:'bold',textTransform:'uppercase'}}>
                            Contact</MenuItem>
                        </Box>
                        <Button size="large" variant="contained" color="warning"
                        onClick={openForm} >Create Activity</Button>
                    </Toolbar>
                </Container>

            </AppBar>
        </Box>
    );
}