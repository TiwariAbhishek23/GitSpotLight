export const fetchorganisation = async (username) => {
    try {
      const response = await fetch(`/api/orgsapi?username=${username}`);
      if (!response.ok) {
        throw new Error("User not found");

      }
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  };
