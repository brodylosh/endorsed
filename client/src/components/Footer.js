import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@mui/material/Button';

function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        style={{
          backgroundColor: 'white',
          color: '#454545',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Button
                component={Link}
                to="/athletes"
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Athletes
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                component={Link}
                to="/deals"
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Deals
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                component={Link}
                to="/collaborators"
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Collaborators
              </Button>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            <span className="logo-text">endorsed</span>
            <sup> &reg; {new Date().getFullYear()}</sup>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
