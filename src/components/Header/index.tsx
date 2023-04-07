import { useCallback } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme';
import { Container } from './styles';

export default function Header() {
  const { theme, setTheme } = useTheme();

  const ThemeIcon = theme === 'light' ? FiMoon : FiSun;

  const handleThemeChange = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  return (
    <Container>
      <h1>
        <a href="#">QR Code Generator</a>
      </h1>
      <button onClick={handleThemeChange} type="button">
        <ThemeIcon />
      </button>
    </Container>
  );
}
