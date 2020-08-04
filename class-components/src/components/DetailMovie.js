import React, {Component} from 'react';


class DetailMovie extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return(
            <>
                <section className="text-center mb-5 pb-5 detailMovie">
                    <h1>Titlenya</h1>
                    <div className="d-flex justify-content-center my-2">
                        <h4 className="mx-3">Director: Maya</h4>
                        <h4 className="mx-3">Producer: Maya</h4>
                        <h4 className="mx-3">Rating: 100/100</h4>
                    </div>
                    <p className="paragraph">ini deskripsinya harus panjang lah lumayan segini jugalah ya</p>
                </section>
            </>
        )
    }
}

export default DetailMovie