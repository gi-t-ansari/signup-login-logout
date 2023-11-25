import React from 'react'
import "./CompanyInfo.css"

function CompanyInfo({openPopup}) {

    const closePopup = () => {
        const popup = document.getElementById("popup");
        popup.classList.remove("open-popup");
        document.getElementById("cards-container").style.display = "flex";
    }


  return (
    <div className='popup' id='popup'>
        <p><span className='bold-text'>Company :</span> Geeksynergy Technologies Pvt Ltd</p>  
        <p><span className='bold-text'>Address :</span> Sanjayanagar, Bengaluru-56</p>
        <p><span className='bold-text'>Phone :</span> 1234567890</p>
        <p><span className='bold-text'>Email :</span> abc@gmail.com</p>
        <button id='close-button'>X</button>
    </div>
  )
}

export default CompanyInfo