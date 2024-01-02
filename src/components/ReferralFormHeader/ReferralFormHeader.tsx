import { Typography, Box, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';

import './ReferralFormHeader.css';

const ReferralFormHeader = () => {
  return (
    <Box className="headerBox">
      <Typography variant="h2" className="referralHeader referralList">
        Referral List
      </Typography>
      <Typography variant="h2" className="referralHeader referralList">
        You can add up to five referrals at a time
        <Tooltip title='Only a maximum of five referrals can be submitted at a given time, anymore than that will need to be inlcluded in a separate submission.'>
          <IconButton>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </Typography>
    </Box>
  );
};

export default ReferralFormHeader;
