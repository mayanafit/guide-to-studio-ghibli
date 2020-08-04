import React, {useState, useEffect} from 'react';

const DetailMovie = () => {
    return(
        <>
            <section className="container text-center mb-5 pb-5 detailMovie">
                <h1>{title}</h1>
                <div className="d-flex justify-content-center my-2">
                    <h4 className="mx-3">Director: {director}</h4>
                    <h4 className="mx-3">Producer: {producer}</h4>
                    <h4 className="mx-3">Rating: {rt_score}/100</h4>
                </div>
                <p className="paragraph">{description}</p>
            </section>
        </>
    )
}

export default DetailMovie