import '../styles/success.css'
import Boy1 from "../images/boy2.jpg"
import Boy2 from "../images/boy1.jpg"
import Boy3 from "../images/boy3.jpg"
const Success = ()=>
{
    return(<>

    <div className="success-container">
    <p className="header">Success Stories</p>
    <div className="success-grand">
        <div className="box-l">
            <div  className="round1"><img src={Boy1} className="boy1"/></div>
          <div className="student-details1">
              <p  className="">Ipsit Patra</p>
            <p  className="">Class V</p>
            <p  className=""> scholarship 70%</p>   
          </div>
        </div>
        <div  className="box-v1">
            <div  className="round2"><img src={Boy2} className="boy2"/></div>
            <div className="student-details2">
            <p  className="">Soumil Maity</p>
            <p  className="">Class VI</p>
            <p  className=""> scholarship 80%</p>
            </div>
        </div>
        <div  className="box-v2">
            <div  className="round3"><img src={Boy3} className="boy3"/></div>
           <div className="student-details3">
           <p  className="">Arnab Pal</p>
            <p  className="">Class VI</p>
            <p  className=""> scholarship 80%</p>
           </div>

           <div className="performance-box">
            <p  className="performance-text-box">Our students are studying in the top Science,Engineering & Medical College not only in India button
                also across the world such as MIT,University of Pennsylvania,Oxford University,Max Plank
            </p>
           </div>
        </div>

    </div>
    </div>
 
    
    </>)
}

export default Success;