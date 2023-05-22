export const fetchIssues = async (userName) => {
    try {
      const response = await fetch(`/api/githubProfileapi?userName=${userName}`);
      if (!response.ok) {
        throw new Error("User not found");

      }
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  };
