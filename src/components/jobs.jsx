import React from 'react';
import Job from "./job";



const Jobs = ({jobs, jobDelete, jobChange}) => {
    return ( 
        <div>
            {jobs.map(job => (
                <Job
                key = {job.id}
                fullname= {job.fullname}
                deleted = {() => jobDelete(job.id)}
                changed = {event => jobChange(event, job.id)}
                />
            ))}
        </div>
     );
}
 
export default Jobs;