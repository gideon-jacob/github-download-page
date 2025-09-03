// GitHub API service to fetch repository data
export interface GitHubRelease {
  tag_name: string;
  name: string;
  published_at: string;
  html_url: string;
  assets: {
    name: string;
    download_count: number;
    browser_download_url: string;
    size: number;
  }[];
}

export interface GitHubRepo {
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  size: number;
  language: string;
  html_url: string;
  homepage: string;
}

class GitHubApiService {
  private baseUrl = 'https://api.github.com';
  
  async getRepository(owner: string, repo: string): Promise<GitHubRepo> {
    const response = await fetch(`${this.baseUrl}/repos/${owner}/${repo}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch repository: ${response.statusText}`);
    }
    return response.json();
  }

  async getLatestRelease(owner: string, repo: string): Promise<GitHubRelease> {
    const response = await fetch(`${this.baseUrl}/repos/${owner}/${repo}/releases/latest`);
    if (!response.ok) {
      throw new Error(`Failed to fetch latest release: ${response.statusText}`);
    }
    return response.json();
  }

  async getAllReleases(owner: string, repo: string): Promise<GitHubRelease[]> {
    const response = await fetch(`${this.baseUrl}/repos/${owner}/${repo}/releases`);
    if (!response.ok) {
      throw new Error(`Failed to fetch releases: ${response.statusText}`);
    }
    return response.json();
  }

  async getTotalDownloadCount(owner: string, repo: string): Promise<number> {
    try {
      const releases = await this.getAllReleases(owner, repo);
      let totalDownloads = 0;
      
      releases.forEach(release => {
        release.assets.forEach(asset => {
          totalDownloads += asset.download_count;
        });
      });
      
      return totalDownloads;
    } catch (error) {
      console.warn('Failed to fetch download count:', error);
      return 0;
    }
  }

  async getLatestApkDownloadUrl(owner: string, repo: string): Promise<string | null> {
    try {
      const release = await this.getLatestRelease(owner, repo);
      const apkAsset = release.assets.find(asset => 
        asset.name.toLowerCase().endsWith('.apk')
      );
      return apkAsset?.browser_download_url || null;
    } catch (error) {
      console.warn('Failed to fetch APK download URL:', error);
      return null;
    }
  }

  async getLatestApkSize(owner: string, repo: string): Promise<number | null> {
    try {
      const release = await this.getLatestRelease(owner, repo);
      const apkAsset = release.assets.find(asset => 
        asset.name.toLowerCase().endsWith('.apk')
      );
      return apkAsset?.size || null;
    } catch (error) {
      console.warn('Failed to fetch APK size:', error);
      return null;
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  formatSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  formatDownloadCount(count: number): string {
    if (count >= 1000000) {
      return Math.round(count / 100000) / 10 + 'M';
    } else if (count >= 1000) {
      return Math.round(count / 100) / 10 + 'K';
    }
    return count.toString();
  }
}

export const githubApi = new GitHubApiService();