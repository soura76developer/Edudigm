import '../styles/header.css'

const Header=()=>
{
return(
    <>
    <div  className="Header_grand_parent">
        <div  className="logo_zone">   <div className='logo-design'><h1 className='logo-design-text'><u>EDUDIGM</u></h1></div>   </div>
        <div  className="btn_zone">
            <button className="btn-btn" >Home</button>
            <select className="btn-btn">
                <option value="" className="btn-btn">Programs</option>
                <option value="" className="btn-btn">Course</option>
                <option value="" className="btn-btn">HandOn</option>

            </select>
            <button className="btn-btn">EAST</button>
            <button className="btn-btn">GoSTEM</button>
            <button className="btn-btn">Results</button>
            <button className="btn-btn">Scholarships</button>
            <button className="btn-btn">Shop Here</button>
            <button className="btn-btn">Contact Us</button>
        </div>

    </div>
    </>
)

}
export default Header;