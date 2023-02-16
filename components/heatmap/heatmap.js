import { useState, useEffect } from 'react';
import moment from 'moment';
import Head from 'next/head';
import CalHeatMap from 'cal-heatmap';
import 'react-calendar-heatmap/dist/styles.css';


const HeatMap = () => {
    <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cal-heatmap/3.6.0/cal-heatmap.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/cal-heatmap/3.6.0/cal-heatmap.min.js"></script>
  </Head>
  const [startDate, setStartDate] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [contributions, setContributions] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/AbhishekTiwari23');
        const userData = await response.json();
        setStartDate(userData.created_at);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchContributionData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/AbhishekTiwari23/events');
        const eventData = await response.json();
        const newContributions = {};

        eventData.forEach(event => {
          if (event.type === 'PushEvent') {
            const date = moment(event.created_at).format('YYYY-MM-DD');
            newContributions[date] = (newContributions[date] || 0) + event.payload.commits.length;
          }
        });

        setContributions(newContributions);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
    fetchContributionData();
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }

    const cal = new CalHeatMap();
    cal.init({
        itemSelector: '#heatmap',
        data: contributions,
        start: moment('2010-01-01').toDate(),
        range: 12,
        domain: 'month',
        subDomain: 'day',
        cellSize: 20,
        cellPadding: 5,
        domainGutter: 5,
        legend: [1, 2, 3, 4, 5],
        legendColors: {
          min: '#ffffff',
          max: '#00FF00'
        }
      });
  }, [loading]);

  return (
    <div>
      {loading ? (
        <p>Loading heatmap...</p>
      ) : (
        <div id="heatmap"></div>
      )}
    </div>
  );
};

export default HeatMap;