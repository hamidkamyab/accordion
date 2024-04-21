import React,{useState} from 'react';
import * as AI from "react-icons/ai";

function Question(question) {
    const [isShow,setIsShow] = useState(false);
    return (
        <div id={'q-'+question.id} className='question p-3 rounded-2' onClick={()=>setIsShow(!isShow)} role='button'>
            <div className='header d-flex aling-items-center justify-content-between'>
                <h6 className='m-0'>
                    {question.title}
                </h6>
                <button className='border-0 bg-dark text-white rounded-circle d-flex align-items-center justify-content-center' >
                    {
                        isShow ?
                        <AI.AiOutlineMinus size={14} />
                        :
                        <AI.AiOutlinePlus size={14} />
                    }
                </button>
            </div>

            {
                isShow &&
                <p className='body p-0 text-muted m-0 mt-3'>
                    {question.body}
                </p>
            }
            
        </div>
    )
}

export default Question
