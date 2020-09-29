import React from 'react';
import '../css/Component.css';

import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import FlipCameraAndroidOutlinedIcon from '@material-ui/icons/FlipCameraAndroidOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';

function Component() {
  return (
    <div className="tweetComponent">
      <div className="content">
        <img alt="CodeCave || Akarsh Barar" draggable="true" src="https://pbs.twimg.com/profile_images/1290044935824011265/ks3aYpLT_normal.jpg" />
        <div className="content__Data">
            <div className="content__header"><h5> Hello World!</h5><p>@helloworld</p></div>
            <p>Loouis, I partially agree with you - this is a great way to solve the inverted images problem. But, there is a whole list of problems to be solved separately when inverting all the pixels, not only images. E. g. if you just invert the colors of the complex UI, there is a great chance it won't look good and you'll need a lot of adjustments. So, yes, nearly silver bullet but only for very simple design.</p>
            <div className="content__actions">
                  <ChatBubbleIcon/>
                  <FlipCameraAndroidOutlinedIcon/>
                  <FavoriteBorderOutlinedIcon/>
                  <PublishOutlinedIcon/>
            </div>
        </div>
      </div>
     
    </div>
  )
}

export default Component
