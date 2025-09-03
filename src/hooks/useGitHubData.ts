import { useState, useEffect } from 'react';
import { githubApi } from '../services/githubApi';
import type { GitHubRelease, GitHubRepo } from '../services/githubApi';

interface GitHubData {
  repository: GitHubRepo | null;
  latestRelease: GitHubRelease | null;
  downloadCount: number;
  apkDownloadUrl: string | null;
  apkSize: number | null;
  loading: boolean;
  error: string | null;
}

export const useGitHubData = (githubRepo: string): GitHubData => {
  const [data, setData] = useState<GitHubData>({
    repository: null,
    latestRelease: null,
    downloadCount: 0,
    apkDownloadUrl: null,
    apkSize: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(prev => ({ ...prev, loading: true, error: null }));
        
        const [owner, repo] = githubRepo.split('/');
        
        // Fetch all data in parallel
        const [repository, latestRelease, downloadCount, apkDownloadUrl, apkSize] = await Promise.all([
          githubApi.getRepository(owner, repo),
          githubApi.getLatestRelease(owner, repo).catch(() => null),
          githubApi.getTotalDownloadCount(owner, repo),
          githubApi.getLatestApkDownloadUrl(owner, repo),
          githubApi.getLatestApkSize(owner, repo),
        ]);

        setData({
          repository,
          latestRelease,
          downloadCount,
          apkDownloadUrl,
          apkSize,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error('Failed to fetch GitHub data:', error);
        setData(prev => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to fetch data',
        }));
      }
    };

    if (githubRepo) {
      fetchData();
    }
  }, [githubRepo]);

  return data;
};