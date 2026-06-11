import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { StyleSection } from './sections/StyleSection';
import { AttendanceSection } from './sections/AttendanceSection';
import { SocialProofSection } from './sections/SocialProofSection';
import { Footer } from './components/layout/Footer';

export default function App() {
  return (
    <main className="min-h-screen overflow-x-clip bg-ink text-[#F2F2F2]">
      <HeroSection />
      <AboutSection />
      <StyleSection />
      <AttendanceSection />
      <SocialProofSection />
      <Footer />
    </main>
  );
}
