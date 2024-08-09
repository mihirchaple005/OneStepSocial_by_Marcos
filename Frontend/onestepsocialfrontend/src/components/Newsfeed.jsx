import React,{ useState } from 'react'
function Newsfeed(props) {
    const [likes, setLikes] = useState(0);
    return (
      <div>
        <h1>NewsFeed</h1>
        <img src={props.image} alt='Image'class="rounded-lg"></img>
        <div className="bg-sky-200 flex items-center hover:bg-sky-700 ">
            <i className='far fa-handshake'style='font-size:24px;color:black'></i>
            <p>123</p>
            <i className='fas fa-thumbs-up' style='font-size:24px'></i>
            <i className='fas fa-comment-alt' style='font-size:24px'></i>
            <i className='far fa-eye'style='font-size:24px'></i>
            <i className='fas fa-share-alt'style='font-size:24px'></i>
        </div>
        <p classN="bg-slate-200 text-cyan-950 font-['Indie-Flower'] text-lg">{props.description}</p>
      </div>
    )
  }
  
  export default Newsfeed