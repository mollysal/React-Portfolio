import React from 'react';
import '../style/ResumePage.css';
import { BsFillCloudDownloadFill } from "react-icons/bs";


export const ResumePage = () => {
    return <div className='row m-4'>
        <div className="col resumeDownload">
                <a href='https://drive.google.com/file/d/1mMaGIvWInDrAs59LEdz6SIIoLl7OVBM2/view?usp=share_link' target="_blank" className='linkText' download="SalmonsenResume">Download my Resume Here:  <BsFillCloudDownloadFill /></a>

        </div>
    </div>
}