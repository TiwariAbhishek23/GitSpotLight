export default async function handler(req, res) {
  const { username } = req.query;
  const header = {
    Authorization: `token ${process.env.GITHUB_TOKEN}`
  };
  try {
    const response = await fetch(`https://api.github.com/search/issues?q=author:${username}`,{ headers: header });
    if (!response.ok) {
      return res.status(404).json({ message: 'No Issues Found' });
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
