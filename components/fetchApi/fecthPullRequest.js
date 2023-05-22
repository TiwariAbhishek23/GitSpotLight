export const fetchPullRequests = async (userName) => {
    try {
      const response = await fetch(`/api/pullrequestapi?userName=${userName}`);
      if (!response.ok) {
        throw new Error("User not found");

      }
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  };
