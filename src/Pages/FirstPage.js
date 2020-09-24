import React from 'react'
import '../css/FirstPage.css'
import twitterlogo from '../assets/twitterlogo.svg'

function FirstPage() {
    return (
        <div className="firstpage">
           <div className="firstpage__content">
                <div className="firstpage__contentLeft">
                        <h1>LEFT</h1>
                        <img src={twitterlogo} className="firstpage__contentLeftTwitterLogo" alt="Twiter Logo" /> 
                </div>
                <div className="firstpage__contentRight">
                        <h1>RIGHT</h1>
                </div>
           </div>
           <div className="firstpage__footer">
                        <h1>FOOTER</h1>
           </div>
        </div>
    )
}

export default FirstPage
