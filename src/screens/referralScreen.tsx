import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { createSvgIcon } from '@mui/material/utils';
import { IContactInformation } from '../components/interfaces'
import { useState, useEffect} from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    IconButton,
    Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';

import { ReferralForm } from '../components/ReferalForm/ReferralForm';
import existingReferrals from '../components/utils/names_constants'
import ReferralFormHeader from '../components/ReferralFormHeader/ReferralFormHeader';


const PlusIcon = createSvgIcon(
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>,
    'Plus',
);
interface ReferralScreenProps {
    callback: Function;
  }

export default function ReferralScreen({ callback }: ReferralScreenProps) {
    const [contactInfoArray, setContactInfoArray] = useState<IContactInformation[]>(existingReferrals);

    useEffect(() => {
        try {
            const contacts: IContactInformation[] = contactInfoArray;
            setContactInfoArray(contacts);
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    }, []);

    const addNewReferral = () => {
        const newReferral: IContactInformation = {
            name: 'New Referral',
            first: '',
            last: '',
            phoneNumber: '',
            contactLanguage: 'English',
            address: '123 Fake Street Canada',
            positiveQuote: 'Great addition!',
            indexColour: '#ABCDEF',
            notesReason: "",
            email: ""
        };
        if (contactInfoArray.length >= 5) {
            console.log('cannot add more referrals according to business specifications');
            callback({"type": "error", "message": "Cannot add more than five referrals"});
        } else {
            setContactInfoArray(prevState => [...prevState, newReferral]);
        }
    };

    const handleDelete = (indexToDelete: number) => {
        const updatedContacts = contactInfoArray.filter((_, index) => index !== indexToDelete);
        setContactInfoArray(updatedContacts);
    };

    const handleReferralSubmission = () => {
        // TODO to implement grab all the form values
        // perform http request here. i.e
        // axios.post(BASE_URL, body={ourData})
        // .then((res) =>{  perform the callback alert logic and other post-actions or screen changes with the nav})
        //.catch((error) => {console.log('handle errors and user flow from here')})
        callback({"type": "success", "message": "Success! You have submitted 5 pending referrals. You will be notified once they've been approved"});
    }


    const renderReferralList = contactInfoArray.map((contactInfo, index) => (
        <Accordion key={index}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-content`}
                sx={{
                    marginTop: '6px',
                }}
                id={`panel${index + 1}-header`}
            >
                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <div style={{ backgroundColor: contactInfo.indexColour, borderRadius: '4px', width: '40px', marginRight: '8px' }}>
                        <Typography style={{ color: 'white', textAlign: 'center' }}>{index + 1}</Typography>
                    </div>
                    <Typography style={{ textAlign: 'left', flex: '1',          
                        fontFamily: 'Montserrat',
                        fontSize: '20px',
                        fontWeight: 400,
                        lineHeight: '24px',
                        letterSpacing: '0em',
                        color: '#3A719B'}}>
                        {contactInfo.name}
            </Typography>
                    <div style={{ marginLeft: 'auto' }}>
                        <IconButton aria-label="delete" style={{ color: '#0B2B5B' }} onClick={() => handleDelete(index)}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <React.Fragment>
                    <ReferralForm referralIndex={{ referralIndex: index + 1 }} contactInformation={contactInfo} />
                </React.Fragment>
            </AccordionDetails>
        </Accordion>
    ));

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
            </AppBar>
            <Container
                component="main"
                maxWidth="sm"
                sx={{
                    mb: 4,
                    padding: '20px',
                }}
            >
                        <ReferralFormHeader />
                {renderReferralList}


                <Button
                    variant="text"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0B2B5B',
                    }}
                    onClick={() => {
                        addNewReferral();
                    }}
                >
                    <PlusIcon sx={{ marginRight: '8px' }} />
                    <span style={{ marginLeft: 'auto' }}>ADD ANOTHER REFERRAL</span>
                </Button>
            </Container>
            <Container
                component="main"
                maxWidth="sm"
                sx={{
                    mb: 4,
                    padding: '20px',
                }}
            >
            <Button
                onClick={handleReferralSubmission}
                variant="contained"
                size="small"
                sx={{
                    borderRadius: '20px',
                    fontSize: '1.5rem',
                    width: '100%',
                    backgroundColor: '#0B2B5B',
                    color: '#fff',
                    
                }}
            >
                SEND REFERRALS
            </Button>

            </Container>
        </React.Fragment>
    );
}

export { };