import React,{useEffect,useState} from 'react'
import '../css/FirstPage.css'
import twitterlogo from '../assets/twitterlogo.svg'
import SearchIcon from '@material-ui/icons/Search';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { useHistory } from 'react-router-dom'
import Modal from 'react-modal';
import db from '../utility/firebase.js';

function FirstPage() {

    const [modalIsOpen,setIsOpen] = useState(false);

    const [name, setname] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    
    function openModal() {
        setIsOpen(true);
    }
      function closeModal(){
            setIsOpen(false);
        }
    const history=useHistory();
    const [state,setState]= useState(false)
    useEffect(() => {
        document.title = "Twitter Clone | Akarsh"
     }, []);

        const login=(e)=>{
            e.preventDefault();
            history.push('/login')
            
        }
    
        const register=(e)=>{
            e.preventDefault();
            //db.auth().signInWithEmailAndPassword().

        }

    return (
        <div className="firstpage">
        
        <Modal
               className="firstpage__modal"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}>

               <div className="firstpage__modalContent">
                     <img src={twitterlogo} className="firstpage__modalTwitterLogo" alt="Twiter Logo" /> 
                     
                     <h1>Create Your Account</h1>
                     <div className="signupcontent">
                        <lable>Name</lable>
                        <input type="text" value={name} onChange={setname(e.target.value)}/>
                     </div>
                     <div className="signupcontent">
                        <lable>Phone Number</lable>
                        <input type="number" value={phoneNumber} onChange={setphoneNumber(e.target.value)}/>
                     </div>
                     <div className="signupcontent">
                        <lable>Email</lable>
                        <input type="email" value={email} onChange={setemail(e.target.value)}/>
                     </div>
                     <div className="signupcontent">
                        <lable>Password</lable>
                        <input type="password" value={password} onChange={setpassword(e.target.value)}/>
                     </div>
                    
                     <button className="btn signup" onClick={register}>Create</button>
               </div>

            </Modal>


           <div className="firstpage__content">
                <div className="firstpage__contentLeft">
                        <div className="firstpage__contentLeftData">
                            <div className="firstpage__contentDataLine"><SearchIcon/><h3>Follow your interests.</h3></div>
                            <div className="firstpage__contentDataLine"><PeopleAltOutlinedIcon/><h3>Hear what people are talking about.</h3></div>
                            <div className="firstpage__contentDataLine"><ChatBubbleOutlineIcon/> <h3>Join the conversation.</h3></div>
                        </div>
                        <img src={twitterlogo} className="firstpage__contentLeftTwitterLogo" alt="Twiter Logo" /> 
                        
                </div>
                <div className="firstpage__contentRight">
                       <div className="firstpage__contentRightData">
                           <div className="firstpage__contentRightLogin">
                               <input type="text" placeholder="Phone number email or username"/>
                               <input type="password" placeholder="Password"/>
                               <button>Log In</button>
                               
                           </div>
                           <div className="firstpage__contentRghtForgotPassword">
                               Forgot Password?
                           </div>
                           <div className="firstpage__contentRightDataa">
                               <img src={twitterlogo} alt="Twitter Logo"/>
                               <h1>See what’s happening in the</h1>
                               <h1>world right now</h1>
                               <div className="firstpage__contentDataButtons">
                                    <h3>Join Twitter today</h3>
                                    <button className="btn signup" onClick={openModal} >Sign up</button>
                                    <button className="btn login" onClick={login}>Log in</button>
                                </div>
                           </div>
                          

                       </div>

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
                        <span>© 2020 Twitter Clone</span>
               </div>
                        
                        

           </div>
        </div>
    )
}

export default FirstPage

// 1000px pr login vala part gayab ho jata h
// 800px pr vertical ho jata h
// https://jsfiddle.net/6hpzdjnL/