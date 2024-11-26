// src/app/page.tsx
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Expertise } from './components/Expertise';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Testimonials } from './components/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <Services />
      <Expertise />
      <Certifications />
      <Testimonials />  {/* Add this line */}
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}