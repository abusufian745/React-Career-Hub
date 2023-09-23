import { json } from "react-router-dom";

const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-application');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}


const saveJobApplication = id => {
const storedJobApplications = getStoredJobApplication();
const exist = storedJobApplications.find(jobiD => jobiD === id);
if(!exist){
    storedJobApplications.push(id);
    localStorage.setItem('job-application', JSON.stringify(storedJobApplications))
}
}

export {getStoredJobApplication, saveJobApplication}