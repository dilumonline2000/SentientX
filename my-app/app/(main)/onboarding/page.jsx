import React from 'react'
import { getUserOnboardingStatus } from '@/actions/user';
import { industries } from '@/data/industries';
import { redirect } from "next/navigation";


const OnboardingPage = async () => {
    // Check if user is already onboarded
    const { isOnboarded } = await getUserOnboardingStatus();

    if (isOnboarded) {
      redirect("/dashboard");
    }


  return (
  
    <main>
    <onboardingForm industries={industries} />
    </main>
    );
};

export default OnboardingPage;
