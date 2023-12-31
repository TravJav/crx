import { render, screen } from '@testing-library/react';
import Header from '../Header/Header';

describe('Header component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Header />);

    const patientReferralText = screen.getByText('Patient Referral Form');
    const concussionRxText = screen.getByText('ConcussionRx');

    expect(patientReferralText).toBeInTheDocument();
    expect(concussionRxText).toBeInTheDocument();
  });

});