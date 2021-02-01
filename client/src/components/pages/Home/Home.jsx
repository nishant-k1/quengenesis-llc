import "./Home.css";
import React from 'react';
import heroData,{benefitsData, serviceData, featuresData, testimonialData, bottomData} from './data';
import { Link } from "react-router-dom";
import SvgComponent from './SvgComponent.jsx';
import { useTransform, useMotionValue} from "framer-motion";

const HeroSection=(props)=>{
    return(
        <>
            <div className="hero">
                <div className='container'>
                    <div className='text-showcase'>
                        <h1>{props.title}</h1>
                        <Link className='contact-btn' type='button' to='/contact'>Contact Us</Link>
                    </div>
                    <div className='img-showcase'>
                        <img className='img' src={props.img} alt="hero-img"/>
                    </div>
                </div>
            </div>
        </>
    );
}


const BenefitsSection=(props)=>{
    return( 
        <div className='benefits'> 
            <div className='container'>
                <div className='benefit-img-showcase'>
                    <div className="img">
                        <div className='svg-box'>
                            <h1>{props.title1}</h1>
                            <SvgComponent />
                        </div>
                        <div className='img-box'>
                            <h1>{props.title2}</h1>
                            <img className='benefit-img' src={props.img} alt="img"/>
                        </div>
                    </div>
                </div>

                <div className='benefit-card-showcase'>
                    {props.cards.map((element, index)=>{
                        return (
                        <div className='benefit-card' index={index} >
                            <img className='icon' src={element.img} alt='img'/>
                            <h3>{element.title}</h3>
                            <p>{element.desc}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

const FeaturesSection=(props)=>{
    return(
        <>
        <div className='features'>
            <div className='container'>
                <div className='img-div'>
                    <img className='features-image' src={props.img} alt="feature Img"/>
                </div>
                <div className='text-div'>
                    <h2>{props.desc}</h2>
                </div>
            </div>
        </div>
        </>
    );
}

const TestimonialSection=(props)=>{
    return(
        <div className='testimony'>
            <div className='container'>
                    {props.cards.map((element, index)=>{
                        return (
                        <div className='testimony-card' index={index} >
                            <img className='testimony-img' src={element.img} alt='img'/>
                            <h2>{element.title}</h2>
                            <p>{element.desc}</p>
                        </div>
                        )
                    })}
            </div>
        </div>
    );
}


const ServicesSection=(props)=>{
    return(
        <>
            <div className='cta'>
                <div className='container'>
                    <h2>We can transform your future</h2>
                    <Link className='contact-btn' type='button' to='/contact'>Get in touch</Link>
                </div>
            </div>
        </>
    );
}



const BottomSection=(props)=>{
    const x = useMotionValue(0)
    const background = useTransform(
      x,
      [-100, 0, 100],
      ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
    )
    return(
        <div className='bottom-section'>
            <div className='container'>
                <div className="box">
                    {props.cards.map((element, index)=>{
                        return (
                            <div className='bottom-card' index={index} >
                                <img className='bottom-img' src={element.img} alt='img'/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

const Home = () => {
    return(
        <>
            <HeroSection {...heroData} />
            <BenefitsSection {...benefitsData} />
            <FeaturesSection {...featuresData} />
            <TestimonialSection {...testimonialData} />
            <ServicesSection {...serviceData} />
            <BottomSection {...bottomData} />
        </>
    );
}

export default Home;