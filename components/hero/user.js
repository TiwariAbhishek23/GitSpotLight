// import { useState } from "react";
// import { fetchUserData } from "../../pages/api/githubProfile";

// const useUserData = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const getUserData = async (username) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetchUserData(username);

//       if (!response.ok) {
//         setError("User not found");
//         setUserData(null); // Reset user data
//       } else {
//         const data = await response.json();
//         const extractedData = {
//           pic: data.avatar_url,
//           name: data.name,
//           startDate: data.created_at,
//           email: data.email,
//           twitterUserName: data.twitter_username,
//           blog: data.blog,
//           company: data.company,
//           followers: data.followers,
//           repos: data.public_repos,
//           pullRequests: data.pull_requests,
//           commits: data.commits,
//           stars: data.stars,
//           issues: data.issues,
//           orgs: data.organizations
//         };
//         setUserData(extractedData);
//       }
//     } catch (err) {
//       setError(err.message);
//       setUserData(null); // Reset user data
//     }

//     setLoading(false);
//   };

//   return { userData, loading, error, getUserData };
// };

// export default useUserData;
