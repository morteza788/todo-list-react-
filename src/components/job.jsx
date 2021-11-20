import React from 'react';



const Job = ({fullname, deleted, changed}) => {
    return ( 
        <div className="card text-white bg-primary mb-3 mt-3 w-25 mx-auto">
        <div className="card-body text-center">
            <p className="d-block"> {`${fullname}`} </p>
            <div className="input-group justify-content-center">
                <input typw="text" placeholder={fullname} className="form-control w-50" onChange={changed}/>
                <div className="input-group-prepend">
                    <button className="btn btn-danger" onClick={deleted}><i className="fa fa-trash"></i></button>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Job;