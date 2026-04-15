import React from "react";
import "./App.css";
import { ThemeProvider } from './contexts/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
