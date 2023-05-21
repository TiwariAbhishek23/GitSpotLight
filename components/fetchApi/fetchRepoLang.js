export const fetchRepoLanguages = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
  
      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }
  
      const repos = await response.json();
  
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
  