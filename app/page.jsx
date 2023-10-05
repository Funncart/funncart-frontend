import {
  HeroSection,
  Statistics,
  Features,
  SocialMedia,
  BecomeSeller,
  Testimonials,
} from '@/clients/Home';

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <Statistics />
      <Features />
      <Testimonials />
      <SocialMedia />
      <BecomeSeller />
    </>
  );
}
