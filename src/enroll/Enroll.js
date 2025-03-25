import { useState } from 'react'
import './Enroll.scss'

const Enroll = () => {
    const [name, setName] = useState('')
    const [email, SetEmail]  = useState('')
    const [number, setNumber] = useState('')
    const [message, SetMessage] = useState('')
    const [address,setAddress] = useState('')
    const [selectItem,setSelectItem] = useState('')

    const handleSubmit = (e) =>{
      e.preventDefault()
      const subject = 'Form Submission'
      const body = `Name: ${name}\nEmail:${email}\nMessage:${message}\nNumber:${number}\nAddress:${address}\nAboutUs:${selectItem}`
      const mailtoLink = `mailto:kelfosu19@gmail.com?subject=${subject}&body=${body}`
      window.location.href  = mailtoLink
    }


  return (
    <section className='enroll-container'>
        <div className='non-form-box'>
          <h1>Beginner <br/>Forex Trading Class
          <br/></h1>
          <h3>US$39.99</h3>
          <p>With just US$39.99, learn the basics of Forex trading, including how to read charts, understand key terminologies, and place your first trade.</p>
        </div>
        <div className='form-box'>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" value={name}  placeholder='Your full name' required 
            onChange={(e)=> setName(e.target.value)} />
            <label htmlFor="email">Email address</label>
            <input type="email" value={email} placeholder='Your email address' required
            onChange={(e)=> SetEmail(e.target.value)} />
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" value={number} placeholder='Your phone number' required onChange={(e)=>setNumber(e.target.value)}/>
            <label htmlFor="address">Address(Optional)</label>
            <input type="text" value={address} placeholder='Your address' onChange={(e)=>setAddress(e.target.value)}/>
            <label htmlFor="">How did you hear about us?</label>
            <select value={selectItem} onChange={(e)=>setSelectItem(e.target.value)}>
              <option className="disable-option" value="" disabled selected   >Select one</option>
              <option value="website">website</option>
              <option value="social media">social media</option>
              <option value="friends/family">friends/famly</option>
              <option value="others">others</option>
            </select>
            <label htmlFor="">Any specific goals or expectations for the class?</label>
            <textarea name="message" value={message} onChange={(e)=>SetMessage(e.target.value)} id="message"  placeholder='Type here...'></textarea>
            <p className='below-p'>Please note that your spot in the masterclass is only confirmed upon successful payment</p>
            <button type='submit'>Enroll</button>
          </form>
        </div>
       </section>
  )
}

export default Enroll