import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ErrorPageProps {
  error: number;
}

function ErrorPage({ error }: ErrorPageProps) {
  const navigate = useNavigate();

  const getErrorMessage = (errorCode: number) => {
    switch (errorCode) {
      case 404:
        return {
          title: 'Page Not Found',
          message: 'The page you are looking for does not exist.'
        };
      case 500:
        return {
          title: 'Internal Server Error',
          message: 'Something went wrong on our end.'
        };
      default:
        return {
          title: 'Error',
          message: 'An unexpected error occurred.'
        };
    }
  };

  const { title, message } = getErrorMessage(error);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: 3
      }}
    >
      <Typography variant="h1" component="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', mb: 2 }}>
        {error}
      </Typography>
      <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: 600 }}>
        {message}
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate('/')}
        sx={{ mt: 2 }}
      >
        Go Home
      </Button>
    </Box>
  );
}

export default ErrorPage;