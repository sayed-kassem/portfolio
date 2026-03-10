import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Portfolio } from "../pages/portfolio";
import { Contact } from "../pages/contact";
import { SocialIcons } from "../components/SocialIcons";

function AppRoutes() {
  const location = useLocation();

  return (
    <div className="s_c">
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 500, exit: 300 }}
          classNames="page"
          unmountOnExit
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <SocialIcons />
    </div>
  );
}

export default AppRoutes;
