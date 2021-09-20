import React from 'react';
import C from '../image/covid2.jpg';
const Home = () => {
    return (
        <>
        <section className="b1">
        <br></br><br></br><br></br>
        <h1>TIME TO ACT IS NOW....<a className="highlight"><i className="fa fa-smile-o"></i></a></h1>
        <h>Help India Fight 2nd Deadly Wave Of Covid</h><br></br><br></br><br></br>
        <section className="homebody" >
        <img src={C}/>
      </section>
        <br></br><br></br><br></br>
        <h>Be Rise By Lifting Others</h>
        <h2>GIVE THE <a className="highlight"><i class="fa fa-gift" ></i> </a>OF CARING</h2>
        <a href="https://rzp.io/l/nBNUTYw3bx"class="btn btn-color slide-btn btn-lg">Donate <i className="fa fa-gratipay"></i></a>
        <br></br><br></br><br></br><br></br><br></br><br></br>
      </section>
        </>
    )
}
export default Home;