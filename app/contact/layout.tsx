import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | State 48 Credit',
  description: 'Contact State 48 Credit for a free credit analysis. Our Arizona-based team is ready to help you restore your credit score.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
