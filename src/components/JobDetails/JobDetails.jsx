import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    // console.log(jobs); 

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You have applied successfully');
    }
    return (
        <div>
            <h2 className="text-center font-bold text-2xl">Job Details of: {id}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details coming here</h2>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side things</h2>
                    <button onClick={handleApplyJob} className="btn btn-success w-full">Apply Now</button>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;