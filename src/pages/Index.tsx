import { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail } from 'lucide-react';
import DesktopNavbar from '@/components/desktop-navbar';

// Import pages
import Home from './Home';
import About from './About';
import ProjectsIndex from './ProjectsIndex';
import ProjectDetail from './ProjectDetail';
// import Experiments from './Experiments'; // commented out for future use
import Contact from './Contact';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // derive current page from location for nav highlighting
  const pathname = location.pathname;
  let currentPage = 'home';
  if (pathname === '/' || pathname === '') currentPage = 'home';
  else if (pathname.startsWith('/projects')) currentPage = 'projects';
  // else if (pathname.startsWith('/experiments')) currentPage = 'experiments';
  else if (pathname.startsWith('/about')) currentPage = 'about';
  else if (pathname.startsWith('/contact')) currentPage = 'contact';
  const navigation = [
    { name: 'Home', id: 'home' },
    // { name: 'Experiments', id: 'experiments' }, // commented out for future use
    { name: 'About', id: 'about' },
        { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavigation = (pageId: string) => {
    // map page id to route
    const map: Record<string, string> = {
      home: '/',
      projects: '/projects',
      // experiments: '/experiments', // commented out for future use
      about: '/about',
      contact: '/contact'
    };
    const path = map[pageId] ?? '/';
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}


      <DesktopNavbar
        navigation={navigation}
        currentPage={currentPage}
        onNavigate={handleNavigation}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Page Content with Transition (route-based) */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsIndex />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            {/* <Route path="/experiments" element={<Experiments />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground leading-relaxed">
                © 2026 Bharath M S · XR Systems Engineer
              </p>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/mechtech-star"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/bharath-m-s-88ba17190/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:bharath.ms@zohomail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
