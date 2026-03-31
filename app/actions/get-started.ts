'use server';

export async function submitGetStartedForm(prevState: any, formData: FormData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const goal = formData.get('goal');

  // Basic validation
  if (!firstName || !lastName || !email || !phone || !goal) {
    return {
      success: false,
      message: 'Please fill out all required fields.',
    };
  }

  // In a real application, you would send an email or save to a database here
  console.log('Get Started Form Submission:', { firstName, lastName, email, phone, goal });

  return {
    success: true,
    message: 'Thank you! Your request has been received. A credit specialist will contact you shortly to schedule your free analysis.',
  };
}
