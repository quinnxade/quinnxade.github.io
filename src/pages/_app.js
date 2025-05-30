import { useEffect } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    const disableDragStart = (e) => e.preventDefault();

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("dragstart", disableDragStart);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("dragstart", disableDragStart);
    };
  }, []);

  return <Component {...pageProps} />;
}

