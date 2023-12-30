import { Typography, Box } from '@mui/material';
import { css } from '@emotion/react';

const headerStyles = css`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
`;

const ReferralFormHeader = () => {
  return (
    <Box py={2}> 
      <Typography variant="h2" 
            sx={{
              textAlign: 'center',
              ...headerStyles,
              color: '#142B58',
              paddingTop: '10px',
            }}>
        Referral List
      </Typography>
      <Typography variant="h2" sx={{
          textAlign: 'center',
          ...headerStyles,
          color: '#FFFFFF',
          paddingTop: '10px',
        }}>
        You can add up to five referrals at a time
      </Typography>
    </Box>
  );
};

export default ReferralFormHeader;
