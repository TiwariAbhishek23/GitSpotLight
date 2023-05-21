export const calculateOrgContributions = (events) => {
    const orgContributions = {};
  
    events.forEach((event) => {
      if (event.type === "PushEvent") {
        const org = event.repo.name.split("/")[0];
        orgContributions[org] = (orgContributions[org] || 0) + 1;
      }
    });
  
    return orgContributions;
  };
  