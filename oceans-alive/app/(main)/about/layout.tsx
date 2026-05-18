import AboutSubNav from '@/components/common/AboutSubNav';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AboutSubNav />
      {children}
    </>
  );
}
