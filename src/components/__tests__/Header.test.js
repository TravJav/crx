import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header'; // Adjust the path to the actual location of your Header component

describe('Header component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Header />);

    const patientReferralText = screen.getByText('Patient Referral Form');
    const concussionRxText = screen.getByText('ConcussionRx');

    expect(patientReferralText).toBeInTheDocument();
    expect(concussionRxText).toBeInTheDocument();
  });

});