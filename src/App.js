import { Container } from '@mui/material';
import { useState} from 'react';
import Alert from '@mui/material/Alert';
import ReferralScreen from './screens/referralScreen';
import Header from './components/Header';

export default function App() {
  const [message, setMessage] = useState('');

  const handleCallback = (dataFromChild) => {
    setMessage(dataFromChild);
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <Container
      maxWidth="xg"
      sx={{
        backgroundColor: '#CDE7ED',
        width: '100%',
        paddingTop: 0,
      }}
    >
      <Header />
      {message && message.type && (
        <Alert severity={message.type}>{message.message}</Alert>
      )}
      <ReferralScreen callback={handleCallback}/>
    </Container>
  );
}
