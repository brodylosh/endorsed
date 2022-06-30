import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

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
          <Button color="inherit" onClick={() => navigate('/athletes')}>
            Athletes
          </Button>
          <Button color="inherit" onClick={() => navigate('/deals')}>
            Deals
          </Button>
          <Button color="inherit" onClick={() => navigate('/collaborators')}>
            Collaborators
          </Button>
          <Button color="inherit" onClick={() => navigate('/login')}>
            Login
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
