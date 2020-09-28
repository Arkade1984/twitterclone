import React, {useEffect,useState}from 'react'
import '../css/HomePage.css'
import twitterlogo from '../assets/twitterlogo.svg'
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExplicitRoundedIcon from '@material-ui/icons/ExplicitRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';

import TwitterIcon from '@material-ui/icons/Twitter';
// import { Modal } from '@material-ui/core';

import Modal from 'react-modal';
import Main from './Main';

import {useDispatch} from 'react-redux'
import {addColor} from '../services/actions';
import {addHoverColor} from '../services/actions';

function HomePage() {

    const dispatch=useDispatch();
    useEffect(() => {
        document.title = "Home / Twitter"
     }, []);

     const [color, setcolor] = useState('#1DA1F5')
     const [hovercolor, sethovercolor] = useState('')
     const [open, setOpen] = useState(false);

     function changecolor(e){
         console.log(e)
         if(e==="ORANGE"){
             setcolor("#F45D22")
             sethovercolor("#FEEEE8")
             setIsOpen(false);
             setIsOpenTwo(false);
             dispatch(
                addColor("#F45D22")
                )
                dispatch(
                    addHoverColor("#FEEEE8")
                )

         }
         if(e==="GREEN"){
            setcolor("#17BF63")
            sethovercolor("#E7F9EF")
            setIsOpen(false);
            setIsOpenTwo(false);
            dispatch(
                addColor("#17BF63")
                )
                dispatch(
                    addHoverColor("#E7F9EF")
                )
        }
        if(e==="BLUE"){
            setcolor("#1DA1F5")
            sethovercolor("#E7F9EF")
            setIsOpen(false);
            setIsOpenTwo(false);
            dispatch(
                addColor("#1DA1F5")
                )
                dispatch(
                    addHoverColor("#E7F9EF")
                )
        }
        if(e==="PURPLE"){
            setcolor("#794BC4")
            sethovercolor("#F1ECF9")
            setIsOpen(false);
            setIsOpenTwo(false); 
            dispatch(
                addColor("#794BC4")
                )
                dispatch(
                    addHoverColor("#F1ECF9")
                )

        }
        if(e==="PINK"){
            setcolor("#E0245E")
            sethovercolor("#FCE8EE")
            setIsOpen(false);
            setIsOpenTwo(false);
            dispatch(
                addColor("#E0245E")
                )
                dispatch(
                    addHoverColor("#FCE8EE")
                )
        }
        if(e==="YELLOW"){
            setcolor("#FFAD1F")
            sethovercolor("#FFF7E8")
            setIsOpen(false);
            setIsOpenTwo(false);
            dispatch(
                addColor("#FFAD1F")
                )
                dispatch(
                    addHoverColor("#FFF7E8")
                )
        }
        
        
     }
     
  
     let inputStyle = {
        backgroundColor: color,
      
      };
      
    
        const [modalIsOpen,setIsOpen] = useState(false);
        const [modalIsOpenTwo,setIsOpenTwo] = useState(false);
        
        function openModal() {
            setIsOpen(true);
        }
        function openModalTwo() {
            setIsOpenTwo(true);
        }

        
        function closeModal(){
            setIsOpen(false);
        }
        function closeModalTwo(){
            setIsOpenTwo(false);
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
                        color:${color}
                    }
                `}} />
            <div className="homepage__left">
                <div className="homepage__leftData" onClick={changecolor}>

                    <img src={twitterlogo}   className="homepage_leftLogo" alt="Twiter Logo" /> 
                    
                    <div className="homepage__leftNav"><div  className="homepage__leftNavBar"><HomeRoundedIcon/><span>Home  </span></div>                        </div>
                    <div className="homepage__leftNav"><div className="homepage__leftNavBar"><ExplicitRoundedIcon/><span>Explore  </span></div>                  </div>
                    <div className="homepage__leftNav"><div  className="homepage__leftNavBar"><NotificationsRoundedIcon/><span>Notification</span></div>         </div>
                    <div className="homepage__leftNav"><div className="homepage__leftNavBar"><ChatBubbleRoundedIcon/><span>Messages</span></div>                  </div>
                    <div className="homepage__leftNav"><div className="homepage__leftNavBar"><BookmarkBorderRoundedIcon/><span>Bookmarks</span></div>             </div>
                    <div className="homepage__leftNav"><div className="homepage__leftNavBar"><ListAltRoundedIcon/><span>Lists</span></div>                        </div>
                    <div className="homepage__leftNav"><div className="homepage__leftNavBar"><PersonOutlineRoundedIcon/><span>Profile</span></div>                </div>
                    <div className="homepage__leftNav"  onClick={openModal}><div className="homepage__leftNavBar" ><MoreHorizRoundedIcon/><span>More</span></div> </div>
                    <button style={inputStyle}><TwitterIcon/><span>Tweet</span></button>
                </div>

            </div>
            <div className="homepage__middle">
                <Modal
                className="modal"
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}>

                <div className="modal__content">
                    <p className="modal__contentNav">Topics</p>
                    <p className="modal__contentNav">Moments</p>
                    <p className="modal__contentNav">Twitter Ads</p>
                    <p className="modal__contentNav">Analytics</p>
                    <p className="modal__contentNav">Setting and Privacy</p>
                    <p className="modal__contentNav">Help Center</p>
                    <p className="modal__contentNav" onClick={openModalTwo}>Display</p>
                    
                </div>

                </Modal>

                <Modal
                className="modalTwo"
                    isOpen={modalIsOpenTwo}
                    onRequestClose={closeModalTwo}>

                <div   className="modalTwo__content">
                    <button className="modalTwo__contentNav" onClick={()=>changecolor(`GREEN`)}>GREEN</button>
                    <button className="modalTwo__contentNav" onClick={()=>changecolor(`ORANGE`)}>ORANGE</button>
                    <button className="modalTwo__contentNav" onClick={()=>changecolor(`PURPLE`)}>PURPLE</button>
                    <button className="modalTwo__contentNav" onClick={()=>changecolor(`PINK`)}>PINK</button>
                    <button className="modalTwo__contentNav" onClick={()=>changecolor(`YELLOW`)}>YELLOW</button>
                    <button className="modalTwo__contentNav" onClick={()=>changecolor(`BLUE`)}>BLUE</button>                   
                </div>

                </Modal>
                

                <Main/>
            </div>
            <div className="homepage__right">
               RIGHT
                
                
            </div>
        </div>
    )
}

export default HomePage
// https://github.com/reactjs/react-modal#examples