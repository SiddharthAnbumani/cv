import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Try scrolling both window and document
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0); // <html>
    document.body.scrollTo(0, 0);             // <body>
    
    // Optional: scroll custom container (if exists)
    const bodyDiv = document.querySelector('.body');
    if (bodyDiv) bodyDiv.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;