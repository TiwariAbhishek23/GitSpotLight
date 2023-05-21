import { useEffect, useState } from 'react';
import {calculateOrgContributions } from '../fetchApi/fetchOrgContri';
import { fetchEvents } from '../../pages/api/evensapi';

const OrganizationContributionsPage = () => {
  const [orgContributions, setOrgContributions] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
      try {
        const username = 'kunal-kushwaha'; 
        const events = await fetchEvents(username);
        const contributions = calculateOrgContributions(events);
        setOrgContributions(contributions);
      } catch (error) {
        setError(error.message);
      }
        setLoading(false);

    };

    fetchData();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Organization Contributions</h1>
      {Object.entries(orgContributions).map(([org, count]) => (
        <div key={org}>
          <span>{org}: </span>
          <span>{count}</span>
        </div>
      ))}
    </div>
  );
};

export default OrganizationContributionsPage;
