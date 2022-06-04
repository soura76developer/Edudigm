import Penta from "../images/penta.svg"
import Triangle from "../images/triangle.gif"
import Timer from "../images/timer.gif"
import Pie from "../images/pie.gif"
import Biceps from "../images/biceps.gif"
import roundtick from "../images/tick.gif"
import Button from "../components/button.js"


import "../styles/footer.css"
const Footer =  () =>
{
    return(<>

        <div className="penta-box-grand">
              <div className="penta-box">
             
                <div className="penta-stick"></div>
                <img src={Penta} className="penta-1"/>
                <img src={Penta} className="penta-2"/>
                <img src={Penta} className="penta-3"/>
                <img src={Penta} className="penta-4"/>

                <p className="penta-text1">Realise your true potential</p>
                <p className="penta-text2">Understand your aptitude in <b>STEM</b></p>
                <p className="penta-text3">Identify your weak and strong areas</p>
                <p className="penta-text4">Reward your talent with <b>merit based scholarships</b></p>
               
        

             </div>

       

                <div className="box-bucket">
                    <div className="t-l"><img src={Biceps} className="bi"/> <h3 className="gif-heading">Know your</h3><h3 className="gif-heading2">Forte</h3><p className="gif-desc">Enhance Your Strength And Weakness By Recognizing Them !</p></div>
                    <div className="b-l"><img src={Pie} className="pi"/><h3 className="gif-heading-pie">Error Analysis</h3><p className="gif-desc-1">Mistakes Are Part Of The Journey To Improvment!</p></div>
                    <div className="t-r"><img src={Timer} className="ti"/><h3 className="gif-heading-ti">Time</h3><h3 className="gif-heading-ti2">Analysis</h3><p className="gif-desc">Don't run Out Of Time.Stay Ahead Always</p></div>
                    <div className="b-r"><img src={Triangle} className="tri"/><h3 className="gif-heading">Bloom's</h3><h3 className="gif-heading2-1">Taxonomy</h3><p className="gif-desc">Are you Understanding What You're Learning? Find Out!</p></div>
            
                 </div>

            <div className="footer-space">
                
            </div>
        </div>
    
    </>)

}

export default Footer;