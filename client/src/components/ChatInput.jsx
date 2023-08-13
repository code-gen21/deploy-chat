import React,{useState} from 'react'
import styled from 'styled-components'
import EmojiPicker from "emoji-picker-react"
import {IoMdSend} from 'react-icons/io'
import {BsEmojiSmileFill} from 'react-icons/bs'
import axios from 'axios'

export default function ChatInput({handleSendMsg}) {
    const [showEmojiPicker,setShowEmojiPicker]=useState(false);
    const[msg,setMsg]=useState("");

    const handleEmojiPickerHideShow=()=>{
        setShowEmojiPicker(!showEmojiPicker);
    }
    const handleEmojiClick=async (emojiObject,event)=>{
        let message=msg;
        message+=emojiObject.emoji;
        setMsg(message);
    };
    const sendChat=(event)=>{
        event.preventDefault();
        if(msg.length>0){
            handleSendMsg(msg);
            setShowEmojiPicker(false);
            setMsg('');
        }
    }


  return<Container>
    <div className="button-container">
        <div className="emoji">
            
            <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
            {
                showEmojiPicker&& <EmojiPicker onEmojiClick={handleEmojiClick} />
            }
        </div>
    </div>
    <form className='input-container' onSubmit={(e)=>sendChat(e)}>
        <input type="text" placeholder='type your message here' value={msg} onChange={(e)=>setMsg(e.target.value)} onClick={()=>setShowEmojiPicker(false)} />
        <button className='submit'>
            <IoMdSend />
        </button>
    </form>
  </Container>
}

const Container=styled.div`
display:grid;
grid-template-columns:5% 95%;
align-items:center;
background-color:#080420;
padding:0 2rem;
padding-bottom:0.3rem;
.button-container{
    display:flex;
    align-items:center;
    color:white;
    gap:1rem;
    .emoji{
        position:relative;
        svg{
            font-size:1.5rem;
            color:#ffff00c8;
            cursor:pointer;
        }
        .EmojiPickerReact{
            position:absolute;
            bottom:45px;
            background-color:#080420;
            box-shadow:0 5px 10px #9a86f3;
            border-color:#9186f3; 
            
            .epr-search, .epr-emoji-category-label{
                background-color:transparent;
                border-color:#9186f3;
            }
            .epr-body::-webkit-scrollbar{
                background-color:#080420;
                width:5px;
                &-thumb{
                    background-color:#9186f3;
                }
            }
            
        }
    }
}
.input-container{
    width:100%;
    background-color:#ffffff34;
    border-radius:2rem;
    display:flex;
    align-content:center;
    gap:2rem;
    @media screen and (min-width:720px) and(max-width:1080px){
            padding:0 1rem;
            gap:1rem;
    }
    input{
        width:90%;
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:transparent;
        color:white;
        border:none;
        padding: 0;
        padding-left:1rem;
        font-size:1.2rem;
        &::selection{
            background-color:#9186f3;
        }
        &:focus{
            outline:none;
        }
    }
    button{
        padding:0.3rem 2rem;
        border-radius:2rem;
        background-color:#9a86f3;
        display:flex;
        justify-content:center;
        align-items:center;
        border:none;
        @media screen and (min-width:720px) and(max-width:1080px){
            padding:0.3rem 1rem;
            svg{
                font-size:1rem;
            }
    }
        svg{
            font-size:2rem;
            color:white;
        }
    }
    
}
`;
