import React, { useState, useEffect, use } from "react";
import { fetchEvents } from "../fetchApi/fetchEvents";
import OrgContriBarChart from "../Charts/orgContriBarChart";

const OrganizationContributionsPage = ({ userName }) => {
  const [orgContri, setOrgContri] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState(null);


useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchEvents(userName);
      console.log("data", data);
      setEvents(data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  fetchData();
}, [userName]);
console.log("events", events);
useEffect(() => {
  if (events) {
    const orgContri = events.reduce((acc, event) => {
      const { type, org,repo } = event;
      if (type === "PushEvent") {
        if (repo) {
          const  repoName  = repo.name;
          if (acc[repoName]) {
            acc[repoName] += event.payload.commits.length;
          } else {
            acc[repoName] = event.payload.commits.length || 1;
          }
        }
      }
      return acc;
    }, {});
    setOrgContri(orgContri);
  }
}, [events]);




console.log("orgContri", orgContri);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <OrgContriBarChart orgContri={orgContri} />
    </div>
  );
};

export default OrganizationContributionsPage;
