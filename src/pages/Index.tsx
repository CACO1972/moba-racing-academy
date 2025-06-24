
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LevelsSection from '@/components/LevelsSection';
import CoursesSection from '@/components/CoursesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-racing-black">
      <Header />
      <Hero />
      <LevelsSection />
      <CoursesSection />
      <Footer />
    </div>
  );
};

export default Index;
