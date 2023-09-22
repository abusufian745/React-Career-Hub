import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    // this is not the best way to load show all data
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-2 gap-6 my-10">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className= {dataLength === jobs.length && 'hidden'}>
                <div className="text-center mb-5">
                    <button
                        onClick={() => setDataLength(jobs.length)} className="btn btn-accent">Show All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;