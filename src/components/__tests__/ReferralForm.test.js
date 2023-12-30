import { render, screen } from '@testing-library/react';
import ReferralForm from '../ReferralForm';

test('renders referral form', () => {
  render(<ReferralForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
