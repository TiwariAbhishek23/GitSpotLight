
export const fetchRepos = async (username) => {
    try {
      const response = await fetch(`/api/repoapi?username=${username}`)
      if (!response.ok) {
        throw new Error("User not found");

      }
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  };
