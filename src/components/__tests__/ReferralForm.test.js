import { render, fireEvent, screen} from '@testing-library/react';
import { ReferralForm } from '../ReferalForm/ReferralForm';

describe('ReferralForm component', () => {
  const mockContactInformation = {
    first: 'John',
    last: 'Doe',
    contactLanguage: 'English',
    phoneNumber: '1234567890',
    email: 'john@example.com',
    address: '123 Example St',
    notesReason: 'Test notes',
  };

  it('renders the form fields with default values', () => {
    const { getByLabelText, getByDisplayValue } = render(
      <ReferralForm referralIndex={1} contactInformation={mockContactInformation} />
    );

    // Check if form fields render with default values
    expect(screen.getByLabelText(/First name/)).toHaveValue('John');
    expect(screen.getByLabelText(/Last name/)).toHaveValue('Doe');
    expect(screen.getByLabelText(/Contact Language/)).toHaveValue('English');
    expect(screen.getByLabelText(/Phone/)).toHaveValue('1234567890');
    expect(screen.getByLabelText(/Email/)).toHaveValue('john@example.com');
    expect(screen.getByDisplayValue('123 Example St')).toBeInTheDocument();
    expect(screen.getByLabelText(/Notes\/Reason/)).toHaveValue('Test notes');
  });

  it('updates the form field when changed', () => {
    const { getByLabelText } = render(
      <ReferralForm referralIndex={1} contactInformation={mockContactInformation} />
    );

    // Simulate changes in the form fields
    fireEvent.change(screen.getByLabelText(/First name/), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByLabelText(/Last name/), { target: { value: 'Smith' } });

    // Verify if the form fields have been updated
    expect(screen.getByLabelText(/First name/)).toHaveValue('Jane');
    expect(screen.getByLabelText(/Last name/)).toHaveValue('Smith');
  });
});
