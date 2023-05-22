export default async function handler(req, res) {
  const { userName } = req.query;

  try {
    const events = await fetchEvents(userName);
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const fetchEvents = async (userName) => {
  const perPage = 100;
  let page = 1;
  let allActivities = [];
  const header = {
    Authorization: `token ${process.env.GITHUB_TOKEN}`
  };

  try {
    while (true) {

      const response = await fetch(
        `https://api.github.com/users/${userName}/events?page=${page}&per_page=${perPage}`
      );

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
