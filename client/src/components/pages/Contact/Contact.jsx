import "./Contact.css";
import React, {useState} from 'react';
import axios from "axios";
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';

const Contact = () => {
    const[message, setMessage]=useState('');
    const [postData, setpostData]=useState(
        {
            fName:"", 
            lName:"", 
            email:"", 
            phone:"", 
            message:""
        }
    );
    const handleChange=(e)=>{
        const{name, value}=e.target;
        setpostData((initialValue)=>{
            switch (name){
                case "fName":
                    return({
                        fName:value, 
                        lName:initialValue.lName, 
                        email:initialValue.email, 
                        phone:initialValue.phone, 
                        message:initialValue.message,
                    });

                case "lName":
                    return({
                        fName:initialValue.fName, 
                        lName:value, 
                        email:initialValue.email, 
                        phone:initialValue.phone, 
                        message:initialValue.message,
                    });

                case "email":
                    return({
                        fName:initialValue.fName, 
                        lName:initialValue.lName, 
                        email:value, 
                        phone:initialValue.phone, 
                        message:initialValue.message,
                    });

                case "phone":
                    return({
                        fName:initialValue.fName, 
                        lName:initialValue.lName, 
                        email:initialValue.email, 
                        phone:value, 
                        message:initialValue.message,
                    });
                    
                case "message":
                    return({
                        fName:initialValue.fName, 
                        lName:initialValue.lName, 
                        email:initialValue.email, 
                        phone:initialValue.phone, 
                        message:value,
                    });
                    
                default:
                    // do nothing
            }   
        });
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setpostData({fName:"", lName:"", email:"", phone:"", message:""});
        axios({
            method: 'post',
            url: '/contactEmails',
            data: postData
        })
        .then(result => setMessage(result.data))
        .catch(err => console.log(err));
        ReactPixel.trackSingleCustom('1399959230371123'); // For tracking custom events.
        ReactGA.event({
            category: 'Contact',
            action: 'Contact Form Submitted',
            label: 'CFS'
        })
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className='contact-container'>
                    <div className='left-section'>
                        <div className="title">
                            <h1>Write Us</h1>
                        </div>
                        <div className="row">
                            <div className="contact-sub-row">
                                <label className='contact-label'>First Name</label>
                                <input className="contact-input" type="text" name="fName" onChange={handleChange} value={postData.fName} required/>
                            </div>

                            <div className="contact-sub-row">
                                <label className='contact-label'>Last Name</label>
                                <input className="contact-input" type="text" name="lName" onChange={handleChange} value={postData.lName} required/>
                            </div>
                        </div>

                        <div className="contact-sub-row">
                            <label className='contact-label'>Email</label>
                            <input className="contact-input is-success" type="email" name="email" onChange={handleChange} value={postData.email} required/>
                        </div>
                    
                        <div className="contact-sub-row">
                            <label className='contact-label'>Phone</label>
                            <input className="contact-input" type="tel" placeholder='1-123-456-7890' maxlength='20' name="phone" onChange={handleChange} value={postData.phone} required/>
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="your-message">
                            <label className='contact-label'>Message</label>
                            <textarea className="contact-textarea" name="message" placeholder='Write text here...' onChange={handleChange} value={postData.message} required></textarea>
                        </div>
                        <div className="contact-btns">
                            <button className="submit-btn">SEND MESSAGE</button>
                        </div>
                    </div>
    
                </div>

                <div className='submit-message'>
                        <h1>{message}</h1>
                </div>

            </form>
        </>
    );
}

export default Contact;