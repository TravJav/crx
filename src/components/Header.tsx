import { Typography, Box } from '@mui/material';

const Header = () => {
  const headerStyles = {
    fontFamily: 'Montserrat',
    fontSize: '30px',
    fontWeight: 500,
    lineHeight: '85px',
    letterSpacing: '0em',
    textAlign: 'center',
    color: '0B2B5B',
    backgroundColor: '#FFFFFF',
  };

  return (
    <Box py={0}>
      <Typography variant="h2" sx={headerStyles}>
        Patient Referral Form
      </Typography>
      <Typography variant="h3" sx={headerStyles}>
        ConcussionRx
      </Typography>
    </Box>
  );
};

export default Header;
