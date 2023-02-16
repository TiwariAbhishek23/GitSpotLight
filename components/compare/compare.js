import { useState } from 'react';
import CompareForm from './inputform';



const ComparePage = () => {

    // Variabes
  const [user1, setUser1] = useState(null);
  const [user2, setUser2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


    // submit Button
  const handleSubmit = async (username1, username2) => {
    setLoading(true);
    setError(null);

    // Check if both usernames are valid
    try {
      const user1Response = await fetch(`https://api.github.com/users/${username1}`);
      const user2Response = await fetch(`https://api.github.com/users/${username2}`);


      // if any one is invalid
      if (!user1Response.ok || !user2Response.ok) {
        throw new Error('Invalid username');
      }

    // else 
      const user1Data = await user1Response.json();
      const user2Data = await user2Response.json();

      setUser1(user1Data);
      setUser2(user2Data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return(
    <>
        <div className="heading">Compare GitHub Stats</div>
        <CompareForm onSubmit={handleSubmit} />;
        {loading && <p>Loading ...</p>}
        {error && <p>Error</p>}
        {user1 && user2 &&(
            <div className="compareStats">
                <div className="usernames"></div>
                <div className="repocount"></div>
                <div className="commitsCount"></div>
                <div className="prcount"></div>
                <div className="followersCount"></div>
                <div className="contributionCount"></div>
                <div className="totalStarsCount"></div>
                <div className="organisationsCount"></div>
                <div className="activedaysCount"></div>
                <div className="memberSincetimeCount"></div>
            </div>
        )}

    </>
  )
}
export default ComparePage;


  