export const fetchRepoLanguages = async (userName) => {
  const header = {
    Authorization: `token ${process.env.GITHUB_TOKEN}`
  };

  try {
    const response = await fetch(`https://api.github.com/users/${userName}/repos?per_page=100`);

    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const repos = await response.json();

    if (!Array.isArray(repos)) {
      throw new Error("Invalid response: repositories is not an array");
    }

    const nonForkedRepos = repos.filter((repo) => !repo.fork);

    const languages = nonForkedRepos.reduce((acc, repo) => {
      if (repo.language) {
        if (acc[repo.language]) {
          acc[repo.language]++;
        } else {
          acc[repo.language] = 1;
        }
      }
      return acc;
    }, {});

    return languages;
  } catch (error) {
    throw new Error(error.message);
  }
};