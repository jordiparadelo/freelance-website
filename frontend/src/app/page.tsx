import { type Metadata } from 'next';
import HomePage from '@/components/pages/HomePage';
import { HOME_METADATA } from '@/app/seo.config';

export const metadata: Metadata = HOME_METADATA;

export default function Home() {
  return <HomePage />;
}
