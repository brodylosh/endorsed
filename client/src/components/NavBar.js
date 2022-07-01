import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Athletes', 'Deals', 'Collaborators'];
const settings = ['Profile', 'Edit', 'Deals', 'Logout'];

function NavBar({ currentUser, setCurrentUser }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // function logOut() {
  //   setCurrentUser(null);
  //   fetch('/logout', {
  //     method: 'DELETE',
  //   });
  // }

  return (
    <AppBar position="sticky" style={{ backgroundColor: '#2f2f2f' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'bindhu',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              paddingLeft: '5px',
            }}
          >
            endorsed
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            ></IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'bindhu',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            endorsed
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                component={Link}
                to={`/${page.toLowerCase()}`}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {currentUser ? (
            <Box sx={{ flexGrow: 0, display: { marginRight: '5rem' } }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={currentUser.image} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box
              sx={{
                flexGrow: 0,
                display: { marginRight: '5rem', xs: 'none', md: 'flex' },
              }}
            >
              <Button
                component={Link}
                to="/login"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Log In
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;

// import { useNavigate } from 'react-router-dom';
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Stack,
//   Button,
// } from '@mui/material';
// // import BorderColorIcon from '@mui/icons-material/BorderColor';

// function NavBar({ currentUser }) {
//   const navigate = useNavigate();

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <IconButton size="large" edge="start" color="inherit" aria-label="logo">
//           {/* <BorderColorIcon /> */}
//         </IconButton>
//         <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
//           Endorsed
//         </Typography>
//         <Stack direction="row" spacing={2}>
//           <Button color="inherit" onClick={() => navigate('/athletes')}>
//             Athletes
//           </Button>
//           <Button color="inherit" onClick={() => navigate('/deals')}>
//             Deals
//           </Button>
//           <Button color="inherit" onClick={() => navigate('/collaborators')}>
//             Collaborators
//           </Button>
//           {currentUser ? (
//             <></>
//           ) : (
//             <Button color="inherit" onClick={() => navigate('/login')}>
//               Login
//             </Button>
//           )}
//         </Stack>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default NavBar;
