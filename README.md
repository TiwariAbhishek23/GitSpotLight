# GitSpotLight 🐙

 The application is built using Next.js, Tailwind CSS, and the GitHub API. It also features a contact form using Nodemailer for users to reach out to the developer.
 
 [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/AbhishekTiwari23/GitSpotLight)



## Problem It Solves

- ### Developer productivity and motivation
    - GitSpotLight help the developers to stay motivated and check their progress, they can also compare stats with friends and others, share on social media.
- ### Hiring and talent acquisition
    - Employers could quickly get an overview of the candidate's experience, skill level, and areas of expertise.
    - Please have a look at theese two readme.md of two different users, first [Kunal](https://github.com/kunal-kushwaha) not much detailed readme and other [Abhishek](https://github.com/AbhishekTiwari23) a detailed readme, in this case to check the real stats, managers can you __GitSpotLight__
- ### Open-source project management
    - Help maintainers to identify top contributors and allocate resources accordingly.


## Features

- Get GitHub statistics for a user based on their GitHub userName.
- Compare the GitHub statistics of two users based on their GitHub userName.
- View user details such as their name, email, blog, and profile picture.
- View user activity such as their most recent commits and pull requests.
- Option to view user's GitHub contributions chart.
- Option to view user's repository commit history chart.
- Responsive UI design.
- Built with Next.js and Tailwind CSS
- Utilizes the GitHub API
- Contact form using Nodemailer for users to reach out to the developer

## Current Available Features

- Github Stats Using Github UserName
- Stats Explanation Using Charts


## UpComing Features

- Compare GitHub Stats
- Share Button
- Download Github Stats Report

## Future Ideas

- Contribution Stats for Large Codebases
- Hiring Solution

## Images

- User Stats Page (Home)
    ![](./assets/readme/home.png)

- Compare Page
    ![](./assets/readme/compare.png)
    
- ContactUs Page
    ![](./assets/readme/contact.png)
    
- Phase 1 Video-Clip ( Still Working)

    https://github.com/AbhishekTiwari23/GitSpotLight/assets/97469132/99dcf35e-be86-4b25-b6c7-4e834547c4e3


## API End-Points Used
- To Collect user Profile Data
  - `https://api.github.com/users/${userName}`
- Commits Data
  - `https://api.github.com/search/commits?q=author:${userName}`
- User GitHub Events
  - `https://api.github.com/users/${userName}/events?page=${page}&per_page=${perPage}`
- User Isses Data
  - `https://api.github.com/search/issues?q=author:${userName}`
- User Organisations Data
  - `https://api.github.com/users/${userName}/orgs`
- Pull Request Data
  - `https://api.github.com/search/issues?q=type:pr+author:${userName}`
- Repository Data
  - `https://api.github.com/users/${userName}/repos?per_page=${per_pages}0&page=${pages}`

## Getting Started

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/AbhishekTiwari23/GitSpotLight)


To get started with GitSpotLight, follow these steps:

- Clone this repository to your local machine.
- Install the necessary dependencies by running `npm install`.
- Start the application by running npm run dev.
- Navigate to http://localhost:3000 in your browser to use the application.


## Contributing

Contributions are always welcome! If you would like to contribute to the project, please follow these steps:

- Fork the repository.
- Create a new branch for your changes.
- Make your changes and commit them with a descriptive commit message.
- Push your changes to your forked repository.
- Create a pull request and describe your changes in detail.


## Credits

- [GitHub API](https://docs.github.com/en/rest)
- [Next.js](https://nextjs.org/docs/getting-started)
- [TailwindCss](https://tailwindcss.com/docs/installation)
- [Chart.Js](https://www.chartjs.org/docs/latest/)
- [Work Flow](./workFlow.md)

## Contact
- If you have any questions about GitSpotLight or would like to reach out to the developer, please use the contact form provided in the application or email me directly at tiwari.abhishektiwari23@gmail.com.
