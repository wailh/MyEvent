import { useEffect } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from '@/context/AuthContext';
config.autoAddCss = false;
import '../styles/globals.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#000',
      light: '#000',
    },
    secondary: {
      main: '#fff',
    },
    why: {
      main: '#0097a7',
    },
  },
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
