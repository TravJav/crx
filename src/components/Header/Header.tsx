import { Typography, Box } from '@mui/material';
import './Header.css';

const Header = () => {
  return (
    <Box className="headerContainer">
      <Typography variant="h2" className="headerTypography">
        Patient Referral Form
      </Typography>
      <Typography variant="h3" className="headerTypography">
        ConcussionRx
      </Typography>
    </Box>
  );
};

export default Header;
