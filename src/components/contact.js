import React from 'react';

const Contact = () => {
    return (
        <>
        <section className="body">
        <div className="r1">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <div className=" emp-profile">
                        <div className="row">
                            <div className="col-md-1">
                                <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="" />
                            </div>
                            <div className="col-md-11">
                                <p>Phone</p>
                                <p>+91 9762456789</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className=" emp-profile">
                        <div className="row">
                            <div className="col-md-1">
                                <img src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png" alt="" />
                            </div>
                            <div className="col-md-11">
                                <p>Email</p>
                                <p>sunitasinghaer@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className=" emp-profile">
                        <div className="row">
                            <div className="col-md-1">
                                <img src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png" alt="" />
                            </div>
                            <div className="col-md-11">
                                <p>Address</p>
                                <p>Bareilly, 77 Cantt, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
            
                <div className="col-md-6">
                    <div className=" emp-profile"><h4>Get in Touch</h4><br></br>
                        <div className="container overflow-hidden">
                            <div className="row gy-5">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="name" placeholder="Your name" name="name"></input>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="email" placeholder="Your email" name="email"></input>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <input type="phone" className="form-control" id="phone" placeholder="Your phone number" name="phone"></input>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <textarea className="form-control" placeholder="message" cols="30" rows="7"></textarea>
                                </div>
                                <div className="mt"></div>
                                <div className="col-md-4">
                                    <button type="button" className="btn btn-primary">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb"></div>
                </div>
            </div>
          </div>
          </section>
        </>
    )
}
export default Contact;
