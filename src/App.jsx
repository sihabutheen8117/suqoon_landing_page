import ParticleField from './components/ParticleField';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Methodology from './components/Methodology';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

import FloatingAssistant from './components/FloatingAssistant';

function App() {
  return (
    <div className="app">
      <ParticleField />
      <CursorGlow />
      <ScrollProgress />
      <FloatingAssistant />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Methodology />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
