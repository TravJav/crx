import { Typography, Box } from '@mui/material';
import './ReferralFormHeader.css';

const ReferralFormHeader = () => {
  return (
    <Box className="headerBox"> 
    <Typography variant="h2" className="referralHeader referralList">
        Referral List
      </Typography>
      <Typography variant="h2" className="referralHeader referralList">
        You can add up to five referrals at a time
      </Typography>
    </Box>
  );
};

export default ReferralFormHeader;
