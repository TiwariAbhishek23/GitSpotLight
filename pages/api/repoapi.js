export const fetchRepos = async (userName) => {

  let repos = [];
  const header = {
    Authorization: `token ${process.env.GITHUB_TOKEN}`
  };

  try {
    while (true) {
      const response = await fetch(
        `https://api.github.com/users/${userName}/repos?per_page=10000&page=1`, { headers: header }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }

      const data = await response.json();

      if (data.length === 0) {
        break;
      }

      repos = repos.concat(data);
      page++;
    }

    return repos;
  } catch (error) {
    throw new Error(error.message);
  }
};
