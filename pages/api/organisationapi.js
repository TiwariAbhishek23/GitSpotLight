export default async function handler(req, res) {
  const { username } = req.query;
  const header = {
    Authorization: `token ${process.env.GITHUB_TOKEN}`
  };
  try {
    const response = await fetch(`https://api.github.com/users/${username}/orgs`,{ headers: header });
    if (!response.ok) {
      return res.status(404).json({ message: 'User not found' });
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
