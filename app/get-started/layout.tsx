import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started | Free Credit Analysis | State 48 Credit',
  description: 'Book your free credit analysis with State 48 Credit. No commitment, no credit card required. See exactly what we can remove from your report today.',
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
