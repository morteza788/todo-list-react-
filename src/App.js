import React, { Component } from 'react';
import Jobs from "./components/jobs";



import "./App.css";



class App extends Component {

    state = {
        jobs : [],
        job: "",
        showJobs: false
    };

    
    Showjobs = () => {
        this.setState({ showJobs: !this.state.showJobs });
        console.log(this.state.showJobs);
    };


    handleDeletejob = id => {
        const jobs = [...this.state.jobs];
        const filterJobs = jobs.filter(p => p.id !== id);
        this.setState({jobs: filterJobs});
    };


    handleJobsChange = (event, id) => {
        const {jobs: alljobs} = this.state;

        const jobIndex = alljobs.findIndex(p => p.id === id);
        const job = alljobs[jobIndex];
        job.fullname = event.targer.value;


        const jobs = [...alljobs];

        jobs[jobIndex] = jobs;
        this.setState({ jobs });
    };


    handleNewJob = () => {
        const jobs = [...this.state.jobs];
        const job = {
            id: Math.floor(Math.random() * 1000),
            fullname: this.state.job
        };
        jobs.push(job);
        this.setState({ jobs, job: "" });
    };



    setJob = event => {
        this.setState({ job: event.target.value });
    };




    

    





















    render() { 


        let {jobs} = this.state;

        let job = null;
    
    
    
        job = (
            <Jobs
    
            jobs={jobs}
            jobDelete = {this.handleDeletejob}
            jobChange = {this.handleJobsChange}
    
    
            />
        );

        
        return(
            <div className="rtl text-center">
                <div className="mt-3 p-3">
                    <form className="form-inline justify-content-center" onSubmit={event => event.preventDefault()}>
                        <div className="input-group w-50">
                            <input typw="text" placeholder="نام کار روزمره برای ثبت " className="form-control" onChange={this.setJob} value={this.state.job}/>
                            <div className="input-group-prepend">
                                <button className="btn btn-success" onClick={this.handleNewJob}><i className="fa fa-plus"></i></button>
                            </div>
                        </div>
                    </form>
                </div>

                <button className="btn btn-dark mt-3" onClick={this.showJobs}> نمایش کارها </button>

                {job}
            </div>
        );
    }
}
 
export default App;