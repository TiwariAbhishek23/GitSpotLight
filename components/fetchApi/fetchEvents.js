export const fetchEvents = async (userName) => {
    try{
        const response = await fetch(`/api/eventsapi?userName=${userName}`);
        if(response === null){
            throw new Error("User not found");
        }
        const data = await response.json();
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
};
