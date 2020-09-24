import React from 'react'
import '../css/FirstPage.css'
import twitterlogo from '../assets/twitterlogo.svg'

function FirstPage() {
    return (
        <div className="firstpage">
           <div className="firstpage__content">
                <div className="firstpage__contentLeft">
                        <img src={twitterlogo} className="firstpage__contentLeftTwitterLogo" alt="Twiter Logo" /> 
                </div>
                <div className="firstpage__contentRight">
                        <h1>RIGHT</h1>
                </div>
           </div>
           <div className="firstpage__footer">
               <div className="firstpage__footerData">

                        <a href="#">About</a>
                        <a href="#">Help Center</a>
                        <a href="#">Terms</a>
                        <a href="#">Privacy policy</a>
                        <a href="#">Cookies</a>
                        <a href="#">Ads info</a>
                        <a href="#">Blog</a>
                        <a href="#">Status</a>
                        <a href="#">Jobs</a>
                        <a href="#">Brand</a>
                        <a href="#">Advertise</a>
                        <a href="#">Marketing</a>
                        <a href="#">Business</a>
                        <a href="#">Developers</a>
                        <a href="#">Directory</a>
                        <a href="#">Settings</a>
                        <p>© 2020 Twitter Clone, Inc.</p>
               </div>
                        
                        

           </div>
        </div>
    )
}

export default FirstPage
