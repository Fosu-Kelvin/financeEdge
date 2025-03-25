import './Footer.scss';
import logo from "./images/finan.png"
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();


   



      useEffect(()=>{
        const hash = window.location.hash;
        if(hash){
          const section = document.querySelector(hash);
          if(section){
            section.scrollIntoView();
          }
        }
      },[])


  return (
        <footer>
            <div className='foot-container1'>
                <div className="foot-container2">
       <div className='footbox-1'>
            <img className='logo-icon' src={logo} alt="log" style={{width:'6rem',height:'6rem'}} />
            <p>Our mission is simple: to make Forex and Crypto trading accessible to everyone. Whether you're just starting out or looking to refine your skills, we provide hands-on,
practical training
designed to deliver real results.</p>
       </div>
       <div className='footbox-2'>
        <h4>QUICK LINKS</h4>
        
        <p><a href='/#classes'>Classes</a></p>
        <p><Link  to="/company">Company</Link></p>
        <p><Link to="/">Media</Link></p>
        
       </div>
       <div className='footbox-3' >
        <h4>ADDRESS</h4>
        <p>
        27 Adehyie LN,Colorbrace AVE Diasempa,OPP Royal Rusell Motessori Behind Gawo Filling Station
        Techiman,BE,Ghana</p>
        <p className='info'>Phone: <a href="tel:+233596179178">+233 59 617 9178</a></p>
        <p className='info mail' ><a href="mailto:kelfosu@gmail.com">Email: info@joinfinedge.com</a></p>
        {/* <div className='social-media-logo'></div> */}
       </div>
       </div>
       <div className="footbox4">
       <p className='finance-copyright'>FINANCE EDGE © {year}. ALL RIGHTS RESERVED</p>
       <p><i> <span>Disclaimer</span>: Trading involves significant risk and may not be suitable for all investors. Results are not guaranteed.</i></p>
       </div>
       </div>
       <a href="#">Back to top</a>
        </footer>
  )
}

export default Footer