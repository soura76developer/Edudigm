import Vdo from '../images/vdo.mp4'
import '../styles/videoBody.css'
import Greentick from '../images/icons8-done.svg';

import {useState} from 'react';



const VideoBody=()=>
{

  let[otp,setOtp]=useState("SendOtp")

return(<>
<div className='video-body-grandparent'>

    <button className="reghere">Register Here</button>
    <h1 className='header-text'>WhY Should You Take EAST?</h1>
    <div className='video-border'>
      <video autoPlay loop muted className="video-block">
      <source src={Vdo} type="video/mp4" />
      </video>
    </div>

    <div  className='video-border1'>
    <p className='description'>Through EAST we aim to recognise talented students with an extraordinary aptitude in STEM and reward
    them with merit based scholarships to help them realise their true potential in the various state and national level
    competative examination</p>
    </div>
    
    <div className="features-grand-parent">
    <div className="features-container"><img src={Greentick} className="greentick"/><p className="grentick-text">Best IITians will be your mentor</p></div>
    <div className="features-container"><img src={Greentick} className="greentick"/><p className="grentick-text">Guarantee success in JEE and NEET exams</p></div>
    <div className="features-container"><img src={Greentick} className="greentick"/><p className="grentick-text">Fun science and Maths Learning</p></div>
    <div className="features-container"><img src={Greentick} className="greentick"/><p className="grentick-text">Affordable fees in the market</p></div>
    <div  className="features-container-otp">
    <p className="reg-here">Register Here</p>
    <form>
        <input type="text" placeholder="Enter 10 Digit Mobile Number" className="input-box"/>
        <button className="sendotp" onClick={()=>{setOtp("Otp Sent")}}>{otp}</button>
    </form>
    </div>

    </div>

</div>





</>)

}

export default VideoBody;