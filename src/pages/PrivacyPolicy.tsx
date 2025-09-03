import { AppBar, Avatar, Box, Link, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material';
import ReactMarkdown from 'react-markdown';

function PrivacyPolicy() {
  const greaterThan600 = useMediaQuery('(min-width:600px)');
  const greaterThan1280 = useMediaQuery('(min-width:1280px)');

  const paddingHorizontal = () => {
    if (greaterThan1280) {
      return 15;
    } else if (greaterThan600) {
      return 8;
    }
    return 3;
  };

  const privacyPolicy = window.siteConfiguration.privacyPolicy;

  if (typeof privacyPolicy === 'string') {
    return (
      <Box sx={{ overflow: 'hidden' }}>
        <AppBar position="fixed" sx={{ backgroundImage: 'none', borderRadius: 0 }}>
          <Toolbar>
            <Avatar 
              alt={window.siteConfiguration.developer.name} 
              src={window.siteConfiguration.developer.logo ?? '/developer-icon.png'} 
              sx={{ mr: 4 }} 
            />
            <Stack direction="row" spacing={2} alignItems="center">
              {window.siteConfiguration.site.links && window.siteConfiguration.site.links.map((l, i) => 
                <Link key={i} href={l.href} underline="hover">{l.name}</Link>
              )}
            </Stack>
          </Toolbar>
        </AppBar>
        <Box sx={{ margin: 'auto', maxWidth: '1200px', pl: paddingHorizontal(), pt: greaterThan600 ? 15 : 10, pr: paddingHorizontal(), pb: 7 }}>
          <Typography variant="h3" component="h1" sx={{ mb: 4 }}>
            Privacy Policy
          </Typography>
          <ReactMarkdown>{privacyPolicy}</ReactMarkdown>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <AppBar position="fixed" sx={{ backgroundImage: 'none', borderRadius: 0 }}>
        <Toolbar>
          <Avatar 
            alt={window.siteConfiguration.developer.name} 
            src={window.siteConfiguration.developer.logo ?? '/developer-icon.png'} 
            sx={{ mr: 4 }} 
          />
          <Stack direction="row" spacing={2} alignItems="center">
            {window.siteConfiguration.site.links && window.siteConfiguration.site.links.map((l, i) => 
              <Link key={i} href={l.href} underline="hover">{l.name}</Link>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      <Box sx={{ margin: 'auto', maxWidth: '1200px', pl: paddingHorizontal(), pt: greaterThan600 ? 15 : 10, pr: paddingHorizontal(), pb: 7 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
          Privacy Policy
        </Typography>
        {privacyPolicy && (
          <>
            <Typography variant="body2" sx={{ mb: 4, opacity: 0.7 }}>
              Last updated: {privacyPolicy.lastUpdatedString}
            </Typography>
            {privacyPolicy.body.map((section, index) => (
              <Box key={index} sx={{ mb: 4 }}>
                <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                  {section.heading}
                </Typography>
                {section.content.map((paragraph, pIndex) => (
                  <Typography key={pIndex} variant="body1" sx={{ mb: 2 }}>
                    <ReactMarkdown>{paragraph}</ReactMarkdown>
                  </Typography>
                ))}
              </Box>
            ))}
          </>
        )}
      </Box>
    </Box>
  );
}

export default PrivacyPolicy;