'use server';

export async function submitContactForm(prevState: any, formData: FormData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');

  // Basic validation
  if (!name || !email || !phone) {
    return {
      success: false,
      message: 'Please fill out all required fields.',
    };
  }

  // In a real application, you would send an email or save to a database here
  console.log('Contact Form Submission:', { name, email, phone, message });

  return {
    success: true,
    message: 'Thank you for reaching out. A specialist will contact you shortly.',
  };
}
