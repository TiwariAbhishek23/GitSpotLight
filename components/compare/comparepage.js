import { useEffect, useState } from "react";


const ComparePage = () => {
  // Variabes
  const [user1, setUser1] = useState(null);

  const [user2, setUser2] = useState(null);

  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);
  const [status, setStatus] = useState("Generate Stats");

      // Compare Parameter variables
  // user 1
  const [followersCount1, setFollowersCount1] = useState(null);
  const [reposCount1, setReposCount1] = useState(null);
  const [pullRequestsCount1, setPullRequestsCount1] = useState(null);
  const [commitsCount1, setCommitsCount1] = useState(null);
  const [starsCount1, setStarsCount1] = useState(null);
  const [issuesCount1, setIssuesCount1] = useState(null);
  const [orgsCount1, setorgsCount1] = useState(null);
  const [maxStreak1, setMaxStreak1] = useState(null);
  const [currentStreak1, setCurrentStreak1] = useState(null);

  // user 2
  const [followersCount2, setFollowersCount2] = useState(null);
  const [reposCount2, setReposCount2] = useState(null);
  const [pullRequestsCount2, setPullRequestsCount2] = useState(null);
  const [commitsCount2, setCommitsCount2] = useState(null);
  const [starsCount2, setStarsCount2] = useState(null);
  const [issuesCount2, setIssuesCount2] = useState(null);
  const [orgsCount2, setorgsCount2] = useState(null);
  const [maxStreak2, setMaxStreak2] = useState(null);
  const [currentStreak2, setCurrentStreak2] = useState(null);

  // submit Button
  const handleSubmit = async (userName1, username2) => {
    setLoading(true);
    setStatus("Extracting Data...");

    // Check if both usernames are valid
    try {
      const user1Response = await fetch(
        `https://api.github.com/users/${username1}`
      );
      const user2Response = await fetch(
        `https://api.github.com/users/${username2}`
      );

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
  if(user1 && user2){
    const dataset=({user1,user2}) =>{
  
  useEffect(
    ()=>{
      // organisations
      const fetchOrgs = async()=>{
        setLoading(true);
        try{
          const header = {
            Authentication :'Bearer ${process.env.Github_Auth_Token}'
          }
          const response1 = await fetch(`https://api.github.com/users/${user1}/orgs`,{header});
          const response2 = await fetch(`https://api.github.com/users/${user2}/orgs`,{header});
          const data1 = await response1.json();
          const data2 = await response2.json();
          setorgsCount1(data1.total_count);
          setorgsCount2(data2.total_count);
          
        }
        catch(error){
          setError(error.message);
        }
        setLoading(false);
      }
      // followers count 
     const fetchFollowers = async()=>{
      setLoading(true);
      try{
        const header = {
          Authentication :'Bearer ${process.env.Github_Auth_Token}'
        }
        const response1 = await fetch(`https://api.github.com/users/${user1}`,{header});
          const response2 = await fetch(`https://api.github.com/users/${user2}`,{header});
          const data1 = await response1.json();
          const data2 = await response2.json();
          setFollowersCount1(data1.followers);
          setFollowersCount2(data2.followers);
          
    }catch(error){
      setError(error.message);
    }
    setLoading(false);
     }
     
     // Repo
     const fetchRepos = async() =>{
      try{
        const header = {
          Authentication :'Bearer ${process.env.Github_Auth_Token}'
        }
       
        const response1 = await fetch(`https://api.github.com/users/${user1}/repos`,{header});
          const response2 = await fetch(`https://api.github.com/users/${user2}/repos`,{header});
          const data1 = await response1.json();
          const data2 = await response2.json();
        setReposCount1(data1.length);
        setReposCount2(data2.length);
          
      }catch(error){
        setError(error.message);
      }
      setLoading(false);

     }
// Stars
     const fetchStars = async()=>{
      try{
        const header = {
          Authentication :'Bearer ${process.env.Github_Auth_Token}'
        }
       
        const response1 = await fetch(`https://api.github.com/users/${user1}/repos`,{header});
          const response2 = await fetch(`https://api.github.com/users/${user2}/repos`,{header});
          const data1 = await response1.json();
          const data2 = await response2.json();
          let total_star1 =0;
          let total_star2 =0;
          data1.forEach(repo =>{
            total_star1 += repo.strangazers_count
          })
          setStarsCount1(total_star1)
          setStarsCount2(total_star2)
          
    }catch(error){
      setError(error.message);
    }
    setLoading(false);

     }

     // Issues
     const fetchIssues = async()=>{
      try{
        const header = {
          Authentication :'Bearer ${process.env.Github_Auth_Token}'
        }
       
        const response1 = await fetch(`https://api.github.com/search/issues?q=author:${user1}`,{header});
          const response2 = await fetch(`https://api.github.com/search/issues?q=author:${user2}`,{header});
          const data1 = await response1.json();
          const data2 = await response2.json();
          setIssuesCount1(data1.total_count);
          setIssuesCount2(data2.total_count);
          

    }catch(error){
      setError(error.message);
    }
    setLoading(false);
    }
// cOMMITS
    const fetchCommits = async()=> {
      setLoading(true)
      try {
        const header = {
          Authentication :'Bearer ${process.env.Github_Auth_Token}'
        }
       
        const response1 = await fetch(`https://api.github.com/search/commits?q=author:${user1}`,{header});
          const response2 = await fetch(`https://api.github.com/search/commits?q=author:${user2}`,{header});
          const data1 = await response1.json();
          const data2 = await response2.json();
          setCommitsCount1(data1.total_count);
          setCommitsCount2(data2.total_count);
          
      } catch (error) {
        setError(error.message)
      }
      setLoading(false)
    }

  //PR
     const fetchPR = async() =>{
      setLoading(true);
      try{
        const header = {
          Authentication :'Bearer ${process.env.Github_Auth_Token}'
        }
       
        const response1 = await fetch(`https://api.github.com/search/issues?q=type:pr+author:${user1}`,{header});
          const response2 = await fetch(`https://api.github.com/search/issues?q=type:pr+author:${user2}`,{header});
          const data1 = await response1.json();
          const data2 = await response2.json();
         setPullRequestsCount1(data1.total_count);
          setPullRequestsCount2(data2.total_count);
          
      }catch (error) {
        setError(error.message)
      }
      setLoading(false)
  
     }
    }
  )
    }
  }
  if (loading) {
    return <div className="loading">Still Loadiing...</div>;
  }
  if (err) {
    return (
      <>
        <div className="form w-1/2 my-32 mx-auto text-center bg-gray rounded-4xl m-32 p-8 ">
        <form className="mb-4">
          <div className=" items-center mb-2 inline">
            <label
              htmlFor="username1"
              className="border p-2 rounded mr-2 bg-black"
            >
              User 1:
            </label>
            <input
              id="username1"
              type="text"
              placeholder="GitHub username"
              className="border p-2 rounded mr-2 "
              value={user1}
              onChange={(event) => setUser1(event.target.value)}
            />
          </div>
          <div className=" items-center mb-2 inline">
            <label
              htmlFor="username2"
              className="border p-2 rounded mr-2 bg-black"
            >
              User 2:
            </label>
            <input
              id="username2"
              type="text"
              placeholder="GitHub username"
              className="border p-2 rounded mr-2 inline"
              value={user2}
              onChange={(event) => setUser2(event.target.value)}
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="rounded-lg bg-myblue w-1/2 mx-auto text-center  mt-16  py-2 px-4 hover:bg-blue-600"
          >
            Compare Stats
          </button>
        </form>
      </div>


        <div className="error">🥲 Got Error : {err}</div>
      </>
    );
  }
  if (
    (user1 && user1.message === "Not Found") ||
    (user2 && user2.message === "Not Found")
  ) {
    return (
      <>
      <div className="w-1/2 mx-auto my-24 bg-gray rounded-4xl p-8">
       <div className="form w-1/2 my-32 mx-auto text-center bg-gray rounded-4xl m-32 p-8 ">
        <form className="mb-4">
          <div className=" items-center mb-2 inline">
            <label
              htmlFor="username1"
              className="border p-2 rounded mr-2 bg-black"
            >
              User 1:
            </label>
            <input
              id="username1"
              type="text"
              placeholder="GitHub username"
              className="border p-2 rounded mr-2 "
              value={user1}
              onChange={(event) => setUser1(event.target.value)}
            />
          </div>
          <div className=" items-center mb-2 inline">
            <label
              htmlFor="username2"
              className="border p-2 rounded mr-2 bg-black"
            >
              User 2:
            </label>
            <input
              id="username2"
              type="text"
              placeholder="GitHub username"
              className="border p-2 rounded mr-2 inline"
              value={user2}
              onChange={(event) => setUser2(event.target.value)}
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="rounded-lg bg-myblue w-1/2 mx-auto text-center  mt-16  py-2 px-4 hover:bg-blue-600"
          >
            Compare Stats
          </button>
        </form>
      </div>


        <div className="error text-center text-4xl">🥲 UserName not found</div>
      </div>
   </> );
  }
  {
    return (
      <>
      <div className="form w-1/2 my-32 mx-auto text-center bg-gray rounded-4xl m-32 p-8 ">
        <form className="mb-4">
          <div className=" items-center mb-2 inline">
            <label
              htmlFor="username1"
              className="border p-2 rounded mr-2 bg-black"
            >
              User 1:
            </label>
            <input
              id="username1"
              type="text"
              placeholder="GitHub username"
              className="border p-2 rounded mr-2 "
              value={user1}
              onChange={(event) => setUser1(event.target.value)}
            />
          </div>
          <div className=" items-center mb-2 inline">
            <label
              htmlFor="username2"
              className="border p-2 rounded mr-2 bg-black"
            >
              User 2:
            </label>
            <input
              id="username2"
              type="text"
              placeholder="GitHub username"
              className="border p-2 rounded mr-2 inline"
              value={user2}
              onChange={(event) => setUser2(event.target.value)}
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="rounded-lg bg-myblue w-1/2 mx-auto text-center  mt-16  py-2 px-4 hover:bg-blue-600"
          >
            Compare Stats
          </button>
        </form>
      </div>

      {user1 && user2 && (
        <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-100">
            <th class="border p-2">#</th>
            <th class="border p-2">Data</th>
            <th class="border p-2">{{ user1 }}</th>
            <th class="border p-2">{{ user2 }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-2">1</td>
            <td class="border p-2">Repo Count</td>
            <td class="border p-2">{{ reposCount1 }}</td>
            <td class="border p-2">{{ reposCount2}}</td>
          </tr>
          <tr>
            <td class="border p-2">2</td>
            <td class="border p-2">PR Count</td>
            <td class="border p-2">{{ pullRequestsCount1 }}</td>
            <td class="border p-2">{{ pullRequestsCount2 }}</td>
          </tr>
          <tr>
            <td class="border p-2">3</td>
            <td class="border p-2">Followers Count</td>
            <td class="border p-2">{{followersCount1 }}</td>
            <td class="border p-2">{{ followersCount2 }}</td>
          </tr>
          <tr>
            <td class="border p-2">4</td>
            <td class="border p-2">Commit Count</td>
            <td class="border p-2">{{ commitsCount1 }}</td>
            <td class="border p-2">{{ commitsCount2 }}</td>
          </tr>
          <tr>
            <td class="border p-2">5</td>
            <td class="border p-2">Star Count</td>
            <td class="border p-2">{{ starsCount1 }}</td>
            <td class="border p-2">{{ starsCount2 }}</td>
          </tr>
          <tr>
            <td class="border p-2">6</td>
            <td class="border p-2">Issue Count</td>
            <td class="border p-2">{{ issuesCount1 }}</td>
            <td class="border p-2">{{ issuesCount2 }}</td>
          </tr>
          <tr>
            <td class="border p-2">7</td>
            <td class="border p-2">Orgs Count</td>
            <td class="border p-2">{{ orgsCount1 }}</td>
            <td class="border p-2">{{ orgsCount2 }}</td>
          </tr>
          <tr>
            <td class="border p-2">8</td>
            <td class="border p-2">Max Streak</td>
            <td class="border p-2">{{ maxStreak1 }}</td>
            <td class="border p-2">{{ maxStreak2 }}</td>
          </tr>
          <tr>
            <td class="border p-2">9</td>
            <td class="border p-2">Current Streak</td>
            <td class="border p-2">{{ currentStreak1 }}</td>
            <td class="border p-2">{{ currentStreak2 }}</td>
          </tr>
          </tbody>
          </table>
      
      )}
      </>);
  }
};
export default ComparePage;
