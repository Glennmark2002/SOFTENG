import { SunMedium, Moon } from 'lucide-react';
import { useEffect, useState } from 'react'

function Theme() {

  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  }

  return (
    <label className='swap swap-rotate pr-4'>
      <input type='checkbox' onChange={toggleTheme} checked={theme === 'dark'} />
      <SunMedium className='swap-off h-8 w-8' />
      <Moon className='swap-on h-8 w-8' />
    </label>
  );
}

export default Theme;
