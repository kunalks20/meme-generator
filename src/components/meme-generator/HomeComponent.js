import Header from "./views/Header";
import Meme from "./views/Meme";
import { useState } from 'react';

export default function HomeComponent() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState);
  }

  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Meme darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}
