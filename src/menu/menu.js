import React from 'react'
import './Menu.scss'
import { Link } from 'react-router-dom'

const menu = () => {
  return (
    <>
    <section id='company' className='container_1'>
        <div className="head-1">
        <h1 className='trade'>Don't just trade,</h1>
        <h1 className='conquer'>conquer.</h1>
        </div>
       <div >
        <p className="parag">
        Transform from a complete beginner to a trading expert with our step-by-step, hands-on Forex & Crypto classes. Learn the strategies used by top traders, gain real-world experience, and unlock your financial potential-no prior knowledge needed.
        </p>
        </div>
       
        <div className="bottom-1">
            <h3>JOIN OUR UPCOMING CLASS</h3>
            <button><Link className='custom-link' to="/enroll">Enroll Now</Link></button>
        </div>
    </section>
    <section id='classes' className='container-2'>
            <h1>CHOOSE YOUR PATH</h1>
            <div className="box">
            <p>Wether you're just starting out or looking to master the markets, we've have got you covered.</p>
            <div className="box1-2">
            <div className="box1">
                <h2>BEGINNERS <br/>FOREX TRADING  
               CLASS </h2>
                <p>Learn the basics of Forex trading, including how to read charts, understand key terminologies, and place your first trade.</p>
                <p><Link to="/enroll">Enroll Now</Link></p>
            </div>
            <div className="box2">
            <h2>ADVANCE <br/>FOREX TRADING CLASS</h2>
                <p>Unlock advanced strategies, master risk management techniques, and engage in live market analysis to refine your trading skills.</p>
                <p><Link to="/enroll">Enroll Now</Link></p>
            </div>
            </div>
            </div>
    </section>
    <section id='media' className='container-3'>
      <h2>WHAT MAKES US DIFFERENT?</h2>
     <div className="container-3-box">
      <div>
        <h3>PRACTICAL TRAINING</h3>
        <p>Learn by doing with real-world scenarios.</p>
      </div>
      <div>
        <h3>EXPERIENCE INSTRUCTORS</h3>
        <p>Benefit from the guidance of seasoned traders.</p>
      </div>
      <div>
        <h3>SMALL CLASS SIZE</h3>
        <p>Get personalized attention in every session.</p>
        </div>
      <div>
        <h3>POST-CLASS SUPPORT</h3>
        <p>Gain access to resources and ongoing mentorship.</p>
      </div>
      </div>
    </section>
    <section className='container-4'>
      <div className="head-4">
      <h1>READY TO <br/><span className='conquer'>CONQUER</span> THE MARKETS?</h1>
      </div>
      <div className="bottom-4">
            <h3>JOIN OUR UPCOMING CLASS</h3>
            <button><Link className='custom-link' to="/enroll">Enroll Now</Link></button>
        </div>
    </section>
    </> 
  )
}

export default menu