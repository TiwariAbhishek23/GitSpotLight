export const fetchRepos = async (userName) => {
  const perPage = 100;
  let page = 1;
  let repos = [];
  const header = {
    Authorization: `token ${process.env.GITHUB_TOKEN}`
  };

  try {
    while (true) {
      const response = await fetch(
        `https://api.github.com/users/${userName}/repos?per_page=${perPage}&page=${page}`, { headers: header }
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
