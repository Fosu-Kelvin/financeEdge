
import {Link } from 'react-router-dom'
import './company.scss'

const company = () => {
  return (
    <section  className='container_100'>
    <div className="head-100">
    <h1 className='trade100'>Don't just trade,</h1>
    <h1 className='conquer100'>conquer.</h1>
    </div>
   <div >
    <p className="parag100">
    Transform from a complete beginner to a trading expert with our step-by-step, hands-on Forex & Crypto classes. Learn the strategies used by top traders, gain real-world experience, and unlock your financial potential-no prior knowledge needed.
    </p>
    </div>
   
    <div className="bottom-100">
        <h3>JOIN OUR UPCOMING CLASS</h3>
       <button><Link className='custom-link100' to="/enroll">Enroll Now</Link></button>
    </div>
</section>
  )
}

export default company