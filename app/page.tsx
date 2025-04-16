import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Landing from '@/components/Landing';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid ">
        <Landing />
        <Experience />
        <Projects />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}