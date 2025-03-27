import React from 'react'
import { industries } from '@/data/industries';

const OnboardingPage = () => {
    // Check if user is already onboarded


  return <main>
    
    <onboardingForm industries={industries} />

    </main>;
};

export default OnboardingPage
