import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Grid } from '@mui/material';
import { fetch_address_lookup } from '../utils/project_utils';
import { IContactInformation } from '../interfaces';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './ReferralForm.css';


interface LocationInfo {
  display_name: string;
  city?: string;
  country?: string;
  country_code?: string;
  state?: string;
  state_district?: string;
  suburb?: string;
  ward?: string;
}

interface ReferralFormProps {
  referralIndex: any;
}

export const ReferralForm: React.FC<{
  referralIndex: ReferralFormProps;
  contactInformation: IContactInformation;
}> = ({ referralIndex, contactInformation }) => {
  const [inputValue, setInputValue] = useState(contactInformation.address || '');
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<LocationInfo[]>([]);

  const handleAddressChange = (newValue: string) => {
    setInputValue(newValue);
  };

  const handleAutocompleteChange = (event: React.ChangeEvent<{}>, newValue: LocationInfo | null) => {
    if (newValue) {
      setInputValue(newValue.city || '');
    } else {
      setInputValue('');
    }
  };

  async function fetchData(input: string) {
    try {
      const response = await fetch_address_lookup(input);;
      if (!response) {
        throw new Error('Error: No response received');
      }
      if (!response.ok) {
        throw new Error(`Error: Response not okay - Status: ${response.status}`);
      }
  
      const data = await response.json();
      if (!data) {
        throw new Error('Error: Response data is undefined');
      }
  
      setSuggestions(data);
    } catch (error) {
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        console.error('Unknown error occurred');
      }
    }
  }


  useEffect(() => {
    if (inputValue) {
      fetchData(inputValue);
    }
  }, [inputValue]); 

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="firstName"
            name="firstName"
            label={
              <span>
                First name{' '}
                <span className="redAsterisk">*</span>
              </span>
            }
            fullWidth
            autoComplete="given-name"
            variant="standard"
            defaultValue={contactInformation.first || ''}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            id="lastName"
            name="lastName"
            label={
              <span>
                Last name{' '}
                <span className="redAsterisk">*</span>
              </span>
            }
            fullWidth
            autoComplete="family-name"
            variant="standard"
            defaultValue={contactInformation.last || ''}
          />
        </Grid>

        <Grid item xs={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker 
      label={
        <span>
        Date of Birth{' '}
        <span className="redAsterisk">*</span>
        </span>
        }
      />
    </LocalizationProvider>





        </Grid>

        <Grid item xs={6}>
          <TextField
            id="language"
            name="language"
            label={
              <span>
                Contact Language{' '}
                <span className="redAsterisk">*</span>
              </span>
            }
            fullWidth
            autoComplete="family-name"
            variant="standard"
            defaultValue={contactInformation.contactLanguage || ''}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="phone"
            name="phone"
            label={
              <span>
                Phone{' '}
                <span className="redAsterisk">*</span>
              </span>
            }
            fullWidth
            variant="standard"
            defaultValue={contactInformation.phoneNumber || ''}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            id="email"
            name="email"
            label={
              <span>
                Email{' '}
                <span className="redAsterisk">*</span>
              </span>
            }
            fullWidth
            autoComplete="family-name"
            variant="standard"
            defaultValue={contactInformation.email || ''}
          />
        </Grid>
    
      <Grid item xs={12}>
      <Autocomplete
        id="address"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => {
          setOpen(false);
          setInputValue('');
        }}
        onChange={handleAutocompleteChange}
        value={null} // Set value correctly
        options={suggestions}
        getOptionLabel={(option: LocationInfo | null) => (option && option.city) || ''}
        renderInput={(params) => (
          <TextField
            {...params}
            id="address"
            name="address"
            label={
              <span>
                Address{' '}
                <span className="redAsterisk">*</span>
              </span>
            }
            value={inputValue}
            onChange={(e) => handleAddressChange(e.target.value)}
            InputProps={{
              ...params.InputProps,
              style: { width: '100%' },
            }}
          />
        )}
      />
      <TextField
        id="notes_reason"
        name="notes_reason"
        label="Notes/Reason"
        fullWidth
        variant="standard"
        inputProps={{
          maxLength: 10,
          style: { width: '100%' },
        }}
        style={{ width: '100%' }}
        defaultValue={contactInformation.notesReason || ''}
      />
            </Grid>
          </Grid>
    </React.Fragment>
  );
};
