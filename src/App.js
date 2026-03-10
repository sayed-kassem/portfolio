import React, { useState, useCallback } from "react";
import { useLenis } from "./hooks/useLenis";
import { Cursor }   from "./components/Cursor";
import { Loader }   from "./components/Loader";
import { Navbar }   from "./components/Navbar";
import { Hero }     from "./components/Hero";
import { About }    from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Contact }  from "./components/Contact";
import "./styles/global.css";
import "./styles/loader.css";
import "./styles/navbar.css";
import "./styles/sections.css";

function AppInner() {
  useLenis();
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const onDone = useCallback(() => setLoaded(true), []);

  return (
    <>
      <Loader onDone={onDone} />
      {loaded && <AppInner />}
    </>
  );
}
