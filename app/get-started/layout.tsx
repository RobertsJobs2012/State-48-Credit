import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started With Credit Repair in Phoenix AZ | State 48 Credit',
  description: 'Start your free credit repair consultation with State 48 Credit. Takes 2 minutes. No commitment. Serving Phoenix, Tucson, Mesa & all of Arizona.',
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
