import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { siteConfiguration } from './config/siteConfig';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Set global configuration
if (!window.siteConfiguration) {
  window.siteConfiguration = siteConfiguration;
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: window.siteConfiguration.site.primaryColor },
  },
  typography: {
    fontFamily: [
      'Rubik',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '7px',
          fontWeight: 'bold',
          padding: '10px 20px',
          textAlign: 'left',
          textTransform: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '7px',
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {
        window.siteConfiguration.site.statusCode === 200
        ? <BrowserRouter basename={window.siteConfiguration.site.basePath}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/*" element={<ErrorPage error={404} />} />
            </Routes>
          </BrowserRouter>
        : <ErrorPage error={window.siteConfiguration.site.statusCode ?? 500} />
      }
    </ThemeProvider>
  );
}

export default App
