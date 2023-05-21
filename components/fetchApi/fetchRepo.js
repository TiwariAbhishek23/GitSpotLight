export const fetchRepos = async (username) => {
  const perPage = 100;
  let page = 1;
  let repos = [];

  try {
    while (true) {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`
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
