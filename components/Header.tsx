'use client';

import HomeHeader from '@/components/home/HomeHeader';
import ScrollProgress from '@/components/ScrollProgress';

export default function Header() {
  return (
    <>
      <ScrollProgress />
      <HomeHeader rootLinks />
    </>
  );
}
