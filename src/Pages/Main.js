import React from 'react'
import '../css/Main.css';

import PublicIcon from '@material-ui/icons/Public';
import {useSelector} from 'react-redux';

function Main() {

    const  colorReducer=useSelector(state=>state.colorReducer);
    const  colorHoverReducer=useSelector(state=>state.colorHoverReducer);

    return (
        <div className="main">
            <style dangerouslySetInnerHTML={{__html: `
                    .main__contentEveryOneCanReply:hover{
                        background-color: ${colorHoverReducer};
                        color:${colorReducer}
                    }
                    .main__contentEveryOneCanReply{
                        color:${colorReducer}
                    }
                `}} />
            <div className="main__header">
                <h3>Home</h3>
            </div>
            <div className="main__content">
               <div className="main__contentTweet">
                   <div className="main__contentTextArea">
                    <img alt="CodeCave || Akarsh Barar" draggable="true" src="https://pbs.twimg.com/profile_images/1290044935824011265/ks3aYpLT_normal.jpg" />
                    <input type="text" placeholder="What's happening?"/>
                   </div>
                   <div className="main__contentEveryOneCanReplyBaap">

                    <div className="main__contentEveryOneCanReply">
                        <PublicIcon/>
                        <h5>everyone can reply</h5>
                    </div>
                    <hr/>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Main
