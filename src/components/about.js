import React from 'react';
import care from '../image/s1.jpg';
const About = () => {
    return (
        <>
        <section className="b">
          <div className="row">
            <div className="main">
            <img src={care} style={{width:'65%'}}/>
            </div>
            <div className="right">
            <h style={{fontWeight:'normal',fontSize:'8rem', marginLeft:'14rem'}}>About</h><br></br><br></br>
               <p style={{fontWeight:'bold',fontSize:'2.3rem',margin:'0 3rem 3rem 3rem',textAlign: "justify"}}>
                Caring Foundation is a Covid-Friendly fundraising organization which provides essential 
                life-saving equipment like oxygen concentrators, RT-PCR testing machines, PPE kits, and 
                oxygen generation plants wherever the needs are the greatest. We bring the world’s response 
                to health emergencies, promote well-being, prevent disease, and expand access to health care.</p>
            </div>
          </div>
        
        
        
        
        </section>
        
        </>
    )
}
export default About;