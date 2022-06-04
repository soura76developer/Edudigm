import '../styles/button.css'

const Button = ()=>
{
    return( 
        <>
              <select className="btn-btn-btn">
                <option value="" className="btn-btn-d">Choose colour</option>
                <option value="" className="btn-btn-g">Green</option>
                <option value="" className="btn-btn-r">Red</option>
                <option value="" className="btn-btn-y">Yellow</option>


            </select>
        </>
    )
}

export default Button;