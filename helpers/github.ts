import got from 'got';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 21600, checkperiod: 3600 });

function buildGitHubRequestOptions() {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'pec-events-app-download-page',
  };

  if (token) {
    headers['Authorization'] = `token ${token}`;
  }

  return {
    headers,
    timeout: { request: 10000 },
    retry: { limit: 2 },
  } as any;
}

async function getReleases(repository: string) {
  const url = new URL(`https://api.github.com/repos/${repository}/releases`);

  if (cache.has(url.toString())) {
    return cache.get(url.toString());
  }

  const options = buildGitHubRequestOptions();
  const response = JSON.parse((await got(url, options)).body);
  cache.set(url.toString(), response);
  return response;
}

async function getLatestRelease(repository: string) {
  const url = new URL(`https://api.github.com/repos/${repository}/releases/latest`);
  
  if (cache.has(url.toString())) {
    return cache.get(url.toString());
  }

  const options = buildGitHubRequestOptions();
  const response = JSON.parse((await got(url, options)).body);
  cache.set(url.toString(), response);
  return response;
}

async function getReleaseByTag(repository: string, tag: string) {
  const url = new URL(`https://api.github.com/repos/${repository}/releases/tags/${tag}`);
  
  if (cache.has(url.toString())) {
    return cache.get(url.toString());
  }

  const options = buildGitHubRequestOptions();
  const response = JSON.parse((await got(url, options)).body);
  cache.set(url.toString(), response);
  return response;
}

async function getDownloadCount(repository: string) {
  const releases: any[] = await getReleases(repository);
  let downloadCount = 0;

  for (let i = 0; i < releases.length; ++i) {
    for (let j = 0; j < releases[i]['assets'].length; ++j) {
      downloadCount += releases[i]['assets'][j]['download_count'];
    }
  }

  return downloadCount;
}

export default {
  getReleases,
  getLatestRelease,
  getReleaseByTag,
  getDownloadCount,
};
