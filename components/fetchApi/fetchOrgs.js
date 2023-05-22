export const fetchOrganisation = async (userName) => {
    try {
      const response = await fetch(`/api/organisationapi?userName=${userName}`);
      if (!response.ok) {
        throw new Error("User not found");

      }
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  };
