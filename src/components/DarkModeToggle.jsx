import { useEffect, useState } from "react";
import sunIcon from "../assets/Group.png";   
import moonIcon from "../assets/Moon.svg";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => localStorage.theme === "dark");

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.body.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="dark-toggle"
      aria-label="Toggle dark mode"
    >
      <img
        src={dark ? sunIcon : moonIcon}
        alt={dark ? "Light mode" : "Dark mode"}
        className="dark-toggle-icon"
      />
    </button>
  );
}
