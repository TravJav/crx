import { Box } from '@mui/material';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import ReferralScreen from './screens/referralScreen';
import Header from './components/Header/Header';
import './App.css'; 

export default function App() {
  const [message, setMessage] = useState('');

  const handleCallback = (dataFromChild) => {
    setMessage(dataFromChild);
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <Box className="appContainer">
      <Header />
      {message && message.type && (
        <Alert severity={message.type}>{message.message}</Alert>
      )}
      <ReferralScreen callback={handleCallback} />
    </Box>
  );
}
