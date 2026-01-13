import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LevelsSection from '@/components/LevelsSection';
import CoursesCarousel from '@/components/CoursesCarousel';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-racing-dark">
      <Header />
      <Hero />
      <LevelsSection />
      <CoursesCarousel />
      <Footer />
    </div>
  );
};

export default Index;
