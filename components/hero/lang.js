import React, { useEffect, useState } from 'react';
import { fetchRepoLanguages } from '../fetchApi/fetchRepoLang';
import LangPieChart from '../Charts/langPieChart';

const LanguagesPage = ({ userName }) => {
  const [languages, setLanguages] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchRepoLanguages(userName);
        // console.log('data', data);
        setLanguages(data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [userName]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <LangPieChart languages={languages} />
    </div>
  );
};

export default LanguagesPage;
