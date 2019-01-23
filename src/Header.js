import React from 'react'
import logo1 from './component/img1.png'
import logo2 from './component/img2.svg'

function Header(){
    return(
        <div className="header">
            <div className ="headertext">
            Meme Generator!
            </div>
            <div className="imgContainer">
                <img className="logo1" src={logo1} alt={logo1} />
                <img className="logo2" src={logo2} alt= {logo2} />

            </div>
            

        </div>

    )
}


export default Header