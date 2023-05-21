export const fetchEvents = async (username) => {
    const perPage = 100;
    let page = 1;
    let allActivities = [];
  
    try {
      while (true) {
        const response = await fetch(`https://api.github.com/users/${username}/events?page=${page}&per_page=${perPage}`);

        if (!response.ok) {
          throw new Error("Failed to fetch user activities");
        }

        const data = await response.json();

        if (data.length === 0) {
          break;
        }
        allActivities = allActivities.concat(data);
        page++;
      }
      return allActivities;
    } catch (error) {
        throw new Error(error.message);
    }
  };
