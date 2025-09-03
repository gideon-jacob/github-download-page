# GitHub API Integration

This document explains how the GitHub API integration works in the PEC Events App download page.

## Features Implemented

### 🔄 **Real-time Data Fetching**
- Fetches repository information directly from GitHub API
- Gets latest release data including version and download URLs
- Calculates total download count across all releases
- Updates app information dynamically

### 📥 **Smart Download Functionality**
The download button now intelligently handles downloads:

1. **Direct APK Download**: If an APK file is found in the latest release, it downloads directly
2. **Release Page Fallback**: If no APK is found, it redirects to the GitHub release page
3. **Configuration Fallback**: Falls back to the configured download link as last resort

### 📊 **Dynamic Statistics**
- **Download Count**: Real-time total downloads from all releases
- **Version**: Latest release tag from GitHub
- **Repository Stats**: Language, size, creation date, last update
- **Release Information**: Latest release date and details

## API Endpoints Used

```typescript
// Repository information
GET https://api.github.com/repos/{owner}/{repo}

// Latest release
GET https://api.github.com/repos/{owner}/{repo}/releases/latest

// All releases (for download count)
GET https://api.github.com/repos/{owner}/{repo}/releases
```

## Implementation Details

### Services
- `src/services/githubApi.ts`: GitHub API service with caching and error handling
- `src/hooks/useGitHubData.ts`: React hook for fetching and managing GitHub data

### Components Updated
- `src/components/Header.tsx`: Download button with real-time data
- `src/components/Body.tsx`: Repository information and statistics

### Error Handling
- Graceful fallbacks when API calls fail
- Loading states with spinners
- Fallback to configured static data

## For PEC Events App

The integration automatically fetches:
- **Repository**: `gideon-jacob/pec-events-app`
- **Latest APK**: `https://github.com/gideon-jacob/pec-events-app/releases/download/v1.0.0/pec_events_v1.0.0.apk`
- **Download Count**: Real-time count from all releases
- **Version**: v1.0.0 (automatically updated when new releases are published)

## Benefits

1. **Always Up-to-date**: No manual updates needed when new releases are published
2. **Accurate Statistics**: Real download counts from GitHub
3. **Better UX**: Direct APK downloads instead of redirects
4. **Automatic**: Works for any GitHub repository by changing the configuration

## Rate Limiting

GitHub API has rate limits:
- **Unauthenticated**: 60 requests per hour per IP
- **Authenticated**: 5000 requests per hour

The app implements basic caching to minimize API calls.