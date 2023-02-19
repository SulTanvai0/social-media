import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';
import MailIcon from '@mui/icons-material/Mail';
import React, { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))


const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

;



const Navbar = () => {
    const [open, setOpen] = useState(false)
    
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant="h6"  sx={{ display: { xs: "none", sm: "block" } }}>SulTan</Typography>
                <DiamondIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder='search...' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={6} color="error">
                        <NotificationsIcon />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} src="https://scontent.fdac24-3.fna.fbcdn.net/v/t1.6435-9/179021402_1179439532502379_1808053478362545708_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHS7hdDGC-rMsYkIthQnDfW0aYIoPAfMm3Rpgig8B8ybYM6us6rEZyNpynM5b9IgEJ48jTA-y8WZPR3b1VLCviY&_nc_ohc=aIfNPGzbyIcAX_6eYuy&tn=y80EtTL2ytFv3HVm&_nc_ht=scontent.fdac24-3.fna&oh=00_AfAsvCIRYTp5NLzbcyVkQ-GnT5bzE9RJqRBHArHzCDG1yA&oe=63EF91D1" onClick={() => setOpen(true)} />
                </Icons>
                <UserBox>
                    <Avatar sx={{ width: 30, height: 30 }} src="https://scontent.fdac24-3.fna.fbcdn.net/v/t1.6435-9/179021402_1179439532502379_1808053478362545708_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHS7hdDGC-rMsYkIthQnDfW0aYIoPAfMm3Rpgig8B8ybYM6us6rEZyNpynM5b9IgEJ48jTA-y8WZPR3b1VLCviY&_nc_ohc=aIfNPGzbyIcAX_6eYuy&tn=y80EtTL2ytFv3HVm&_nc_ht=scontent.fdac24-3.fna&oh=00_AfCgdR0a5yuqexDY7pBpXh5pqX_kXQJeFhdzB5qqteARoA&oe=63EE4051" onClick={() => setOpen(true)} />
                    <Typography variant="span">John</Typography>
                </UserBox>

            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={''}
                open={open}
                onClose={() => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={''}>Profile</MenuItem>
                <MenuItem onClick={''}>My account</MenuItem>
                <MenuItem onClick={''}>Logout</MenuItem>
            </Menu>

        </AppBar>
    );
};

export default Navbar;