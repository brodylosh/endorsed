import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from '@mui/material';
// import BorderColorIcon from '@mui/icons-material/BorderColor';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          {/* <BorderColorIcon /> */}
        </IconButton>
        <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
          Endorsed
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Athletes</Button>
          <Button color="inherit">Deals</Button>
          <Button color="inherit">Collaborators</Button>
          <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
