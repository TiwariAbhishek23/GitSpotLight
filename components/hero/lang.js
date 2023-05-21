import { useEffect, useState } from 'react';
import { fetchRepoLanguages } from '../fetchApi/fetchRepoLang';

const LanguagesPage = () => {
  const [languages, setLanguages] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
      try {
        const username = 'kunal-kushwaha'; // Replace with your GitHub username
        const data = await fetchRepoLanguages(username);
        // console.log(data);
        setLanguages(data);
        // console.log(languages);
      } catch (error) {
        setError(error.message);
      }
        setLoading(false);
    };
    // console.log("in lang");
    // console.log(languages);
    fetchData();
  }, []);
// console.log(languages)
  if (error) {
    return <p>Error: {error}</p>;
  }
//   console.log(languages)
  if (loading) {
    return <p>Loading...</p>;
  }
// console.log(languages)
  return (
    <div>
      <h1>Languages Used in Personal Repositories</h1>
      {Object.entries(languages).map(([language, count]) => (
        <div key={language}>
          <span>{language}: </span>
          <span>{count}</span>
        </div>
      ))}
    </div>
  );
};

export default LanguagesPage;
