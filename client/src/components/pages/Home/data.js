import featureImg from '../../../assets/featureImg.svg';
import heroImg from '../../../assets/heroImg.svg';
import BenefitImg from '../../../assets/benefitImg.svg';
import BenefitImg1 from '../../../assets/benefitImg1.svg';
import BenefitImg2 from '../../../assets/benefitImg2.svg';
import BenefitImg3 from '../../../assets/benefitImg3.svg';
import BenefitImg4 from '../../../assets/benefitImg4.svg';
import testimonyImg1 from '../../../assets/testimonyImg1.svg';
import testimonyImg2 from '../../../assets/testimonyImg2.svg';
import testimonyImg3 from '../../../assets/testimonyImg3.svg';
import bottomImg1 from '../../../assets/bottomImg1.svg';
import bottomImg2 from '../../../assets/bottomImg2.svg';
import bottomImg3 from '../../../assets/bottomImg3.svg';
import bottomImg4 from '../../../assets/bottomImg4.svg';


const heroData={
    title:"We offer your business a transformative set of solutions outlasting all the current trends.",
    subDesc:"Give us a call",
    img:heroImg,
}

const benefitsData={
    img: BenefitImg,
    title1: "We offer global collaboration.",
    title2: "Engage with us and we can help you reach a new potential.",
    cards: [    
        {
            img: BenefitImg1,
            title: 'Quality Assurance',
            desc: 'We follow a systematic way of creating an environment to assure that the services being offered meets the quality requirements.',
        },

        {
            img: BenefitImg2,
            title: 'Cutting-edge solutions',
            desc: "We take tiime to understand your work practices and the nature of your business to create a custom solution which would turn to be an efficnet soltoutin to your requirements",
        },

        {
            img: BenefitImg3,
            title: 'Robust R & D',
            desc: 'We prioritize intense research and analysis before carrying out the any action plan, leading to more sustainable, viable and economical advantages.',
        },

        {
            img: BenefitImg4,
            title: 'Global team of change-makers and thought-leaders.',
            desc: 'Our team of experienced members and introspective professionals will help you encapsulate new growth opportunities.',
        },
    ]
}
 
const featuresData={
    img: featureImg,
    title:'Our Service features',
    desc: "We offer global technology and marketing services with an analytical and creative focus at the core of our business engagements.",
}

const serviceData={
    title:"Get a free quote now!",
    desc: 'sdkhjsdhjk  fsdhj hj sdfhjksdfhjkdhjk dhjk',
}

const testimonialData={
    title: 'This is what our customers say about us',
    cards: 
    [    
        {
            img: testimonyImg1,
            title: 'Technology / IT services',
            desc: 'We work as an extension of your IT team either onsite or off-site offering futuristic and dynamic applications catering to your business requirements.',
        }, 

        {
            img: testimonyImg2,
            title: 'API Integration',
            desc: 'We provide API integrations carrying through complex business prerequisites to execution, exhibiting your brands. ',
        },
        {
            img: testimonyImg3,
            title: 'Sales and marketing consultations',
            desc: 'We give a comprehensive analysis of the market and help clients to improve their business. We also assist businesses in selecting and efficiently utilizing the latest marketing tools.',

        },
    ]
}

const bottomData={
        cards: 
        [    
            {
                img: bottomImg1,
            }, 
    
            {
                img: bottomImg2,
            },
            {
                img: bottomImg3,
            },
            {
                img: bottomImg4,
            },  
        ]
}
export default heroData;

export {benefitsData, serviceData, featuresData, testimonialData, bottomData};


