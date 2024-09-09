import React from 'react'

const linkStyle={
  cursor:'pointer'
}
const Header = () => {
  return (
    <div className='header-bg'>
        <div>
            <img src='./logo.png' alt='logo' width={30} style={{marginLeft:'15px'}}/>
        </div>
        <div className='header-text'>
            <h6 style={linkStyle}>Home</h6>
            <h6 style={linkStyle}>About Us</h6>
            <h6 style={linkStyle}>Services</h6>
            <h6 style={linkStyle}>Portfolio</h6>
        </div>
        <div>
            <button style={{padding:'4px 8px',color:'#000000',background:'#fff',borderRadius:'20px',fontWeight:500}}>Contact Us</button>
        </div>
    </div>
  )
}

export default Header