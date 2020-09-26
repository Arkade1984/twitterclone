import React, {useEffect,useState}from 'react'
import '../css/HomePage.css'
import twitterlogo from '../assets/twitterlogo.svg'
import ReactDOM from 'react-dom';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExplicitRoundedIcon from '@material-ui/icons/ExplicitRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
function HomePage() {
    useEffect(() => {
        document.title = "Home / Twitter"
     }, []);

     const [color, setcolor] = useState('')
     const [hovercolor, sethovercolor] = useState('')
     
     function changecolor(e){
         console.log(e)
         if(e==="ORANGE"){
             setcolor("#F45D22")
             sethovercolor("#FEEEE8")

         }
         if(e==="GREEN"){
            setcolor("#17BF63")
            sethovercolor("#E7F9EF")
        }
        if(e==="BLUE"){
            setcolor("#1DA1F5")
            sethovercolor("#E7F9EF")
        }
        if(e==="PURPLE"){
            setcolor("#794BC4")
            sethovercolor("#F1ECF9")
        }
        if(e==="PINK"){
            setcolor("#E0245E")
            sethovercolor("#FCE8EE")
        }
        if(e==="YELLOW"){
            setcolor("#FFAD1F")
            sethovercolor("#FFF7E8")
        }
        
        
     }
     function hover(value){
         if(value==="true")
        {

            if(color==="#F45D22"){
                sethovercolor("#FEEEE8")
            }
            if(color==="#17BF63"){
                sethovercolor("#E7F9EF")
            }
            if(color==="#1DA1F5"){
                sethovercolor("#E8F5FE")
            }
            if(color==="#794BC4"){
                sethovercolor("#F1ECF9")
            }
            if(color==="#E0245E"){
                sethovercolor("#FCE8EE")
            }
            if(color==="#FFAD1F"){
                sethovercolor("#FFF7E8")
            }

             
        }
          else{
            sethovercolor('')
          }
     }
  
     let inputStyle = {
        backgroundColor: color,
      
      };
      let divstyle={
        
      }
    /**
     * GREEN TEXT #17BF63 hover #E7F9EF
     * orange text #F45D22  hover #FEEEE8
     * purple text #794BC4 hover #F1ECF9
     * pink text #E0245E hover #FCE8EE
     * yellow #FFAD1F hover #FFF7E8
     * 
     */
    return (
      
        <div className="homepage">
              <style dangerouslySetInnerHTML={{__html: `
                    .homepage__leftNavBar:hover{
                        background-color: ${hovercolor};
                    }
                `}} />
            <div className="homepage__left">
                <div className="homepage__leftData" onClick={changecolor}>

                    <img src={twitterlogo}   className="homepage_leftLogo" alt="Twiter Logo" /> 
                    
                    <div className="homepage__leftNav"><div  style={divstyle}  className="homepage__leftNavBar"><HomeRoundedIcon/><span>Home  </span></div></div>
                    <div className="homepage__leftNav"><div style={divstyle}  className="homepage__leftNavBar"><ExplicitRoundedIcon/><span>Explore  </span></div></div>
                    <div className="homepage__leftNav"><div style={divstyle}   className="homepage__leftNavBar"><NotificationsRoundedIcon/><span>Notification</span></div></div>
                    <div className="homepage__leftNav"><div style={divstyle}  className="homepage__leftNavBar"><ChatBubbleRoundedIcon/><span>Messages</span></div></div>
                    <div className="homepage__leftNav"><div style={divstyle}  className="homepage__leftNavBar"><BookmarkBorderRoundedIcon/><span>Bookmarks</span></div></div>
                    <div className="homepage__leftNav"><div style={divstyle}  className="homepage__leftNavBar"><ListAltRoundedIcon/><span>Lists</span></div></div>
                    <div className="homepage__leftNav"><div style={divstyle}  className="homepage__leftNavBar"><PersonOutlineRoundedIcon/><span>Profile</span></div></div>
                    <div className="homepage__leftNav"><div style={divstyle}  className="homepage__leftNavBar" ><MoreHorizRoundedIcon/><span>More</span></div></div>
                   <button style={inputStyle}>Tweet</button>
                </div>

            </div>
            <div className="homepage__middle">
                    Middle
            </div>
            <div className="homepage__right">
                <button onClick={()=>changecolor(`GREEN`)}>Green</button>
                <button onClick={()=>changecolor(`ORANGE`)}>orange</button>
                <button onClick={()=>changecolor(`PURPLE`)}>purple</button>
                <button onClick={()=>changecolor(`PINK`)}>pink</button>
                <button onClick={()=>changecolor(`YELLOW`)}>yellow</button>
                <button onClick={()=>changecolor(`BLUE`)}>blue</button>
                
                
            </div>
        </div>
    )
}

export default HomePage
