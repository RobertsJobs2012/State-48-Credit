'use server';

export async function submitGetStartedForm(prevState: unknown, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const goal = formData.get('goal');
  const timeline = formData.get('timeline');
  const consequence = formData.get('consequence');
  const commitment = formData.get('commitment');
  const notes = formData.get('notes');

  if (!firstName || !lastName || !email || !phone) {
    return {
      success: false,
      message: 'Please fill out all required fields.',
    };
  }

  console.log('Get Started Quiz Submission:', {
    firstName, lastName, email, phone,
    goal, timeline, consequence, commitment, notes,
  });

  return {
    success: true,
    message: 'Thank you! Your request has been received. A credit specialist will contact you within 24 hours to schedule your free analysis.',
  };
}
