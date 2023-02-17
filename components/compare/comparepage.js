import { useState } from 'react';
import CompareForm from './inputform';



const ComparePage = () => {

    // Variabes
  const [user1, setUser1] = useState(null);

  const [user2, setUser2] = useState(null);

  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);
  const [status,setStatus] = useState("Generate Stats")

  // Compare Parameter variables
  // user 1
  const [followersCount1, setFollowersCount1] = useState(null)
  const [reposCount1, setReposCount1] = useState(null)
  const [pullRequestsCount1, setPullRequestsCount1] = useState(null)
  const [commitsCount1, setCommitsCount1] = useState(null)
  const [starsCount1, setStarsCount1] = useState(null)
  const [issuesCount1, setIssuesCount1] = useState(null)
  const [orgsCount1,setorgsCount1] = useState(null);
  const [maxStreak1,setMaxStreak1] = useState(null);
  const [currentStreak1,setCurrentStreak1] = useState(null);

  // user 2
  const [followersCount2, setFollowersCount2] = useState(null)
  const [reposCount2, setReposCount2] = useState(null)
  const [pullRequestsCount2, setPullRequestsCount2] = useState(null)
  const [commitsCount2, setCommitsCount2] = useState(null)
  const [starsCount2, setStarsCount2] = useState(null)
  const [issuesCount2, setIssuesCount2] = useState(null)
  const [orgsCount2,setorgsCount2] = useState(null);
  const [maxStreak2,setMaxStreak2] = useState(null);
  const [currentStreak2,setCurrentStreak2] = useState(null);





    // submit Button
  const handleSubmit = async (username1, username2) => {
    setLoading(true);
    setStatus("Extracting Data...")

    // Check if both usernames are valid
    try {
      const user1Response = await fetch(`https://api.github.com/users/${username1}`);
      const user2Response = await fetch(`https://api.github.com/users/${username2}`);


      // if any one is invalid
      if (!user1Response.ok || !user2Response.ok) {
        setUser1("");
        setUser2("");
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
  if(loading){
    return <div className="loading">Still Loadiing...</div>
   }
   if(err){
    return(
      <>
      <div className="form w-1/2 my-32 mx-auto ">
            <form >
            <div className="flex flex-col space-y-4">
              <label htmlFor="" className='text-center'> Enter Github username</label>
              <input
                type="text"
                id="username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="GitHub userName"
                className="border-2 border-gray-300 rounded-lg p-2"
              />
              <button
                type="submit"
                className="rounded-lg bg-myblue w-1/2 mx-auto py-2 px-4 hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Generate Stats
              </button>
            </div>
          </form>
            </div>

            <div className="error">
            🥲 Got Error : {err}
            </div>
            </>
    )
   }
   if(user1 && user1.message === "Not Found" || user2 && user2.message === "Not Found"){
    return(
      <div className='w-1/2 mx-auto my-24 bg-gray rounded-4xl p-8'>
      <div className="form w-1/2 my-24 mx-auto ">
            <form >
            <div className="flex flex-col space-y-4">
              <label htmlFor="" className='text-center'> Enter Github username</label>
              <input
                type="text"
                id="username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="GitHub userName"
                className="border-2 border-gray-300 rounded-lg p-2"
              />
              <button
                type="submit"
                className="rounded-lg bg-myblue w-1/2 mx-auto py-2 px-4 hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Generate Stats
              </button>
            </div>
          </form>
            </div>

            <div className="error text-center text-4xl">
            🥲 UserName not found
            </div>
            </div>
    )
   }
   {
    return(
      <div className="form w-1/2 my-32 mx-auto ">
            <form >
            <div className="flex flex-col space-y-4">
              <label htmlFor="" className='text-center'> Enter Github username</label>
              <input
                type="text"
                id="username"
                value={user1}
                onChange={(e) => setUser1(e.target.value)}
                placeholder="GitHub userName"
                className="border-2 border-gray-300 rounded-lg p-2"
              />
              <button
                type="submit"
                className="rounded-lg bg-myblue w-1/2 mx-auto py-2 px-4 hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Generate Stats
              </button>
            </div>
          </form>
            </div>
            
    )
   }
  
}
export default ComparePage;


  