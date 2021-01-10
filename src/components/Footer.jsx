/* eslint-disable no-useless-constructor */
import React from "react";

export default class Footer extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <p className='text-center' >Danilo Gonzalez Ardon</p>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <a href="mailto:danilo.j.gonzalez@gmail.com"><p className='text-center' >danilo.j.gonzalez@gmail.com</p></a>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <a href='tel:+50497373565' ><p className='text-center'>+504 97373565</p></a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}