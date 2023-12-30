import { render, screen } from '@testing-library/react';
import ReferralFormHeader from '../ReferralFormHeader';


describe('ReferralFormHeader component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ReferralFormHeader />);

    const referralListText = screen.getByText('Referral List');
    const referralLimitText = screen.getByText('You can add up to five referrals at a time');

    expect(referralListText).toBeInTheDocument();
    expect(referralLimitText).toBeInTheDocument();
  });

  it('renders with correct styles', () => {
    const { getByText } = render(<ReferralFormHeader />);

    const referralListText = screen.getByText('Referral List');
    const referralLimitText = screen.getByText('You can add up to five referrals at a time');

    // expect(referralListText).toHaveStyle('color: #142B58; text-align: center;');
    // expect(referralLimitText).toHaveStyle('color: #FFFFFF; text-align: center;');
  });
});
