import { useRef } from 'react';
import './Api.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const elements = [
    {
        img: '/img/api/instruments.svg',
        header: 'Seamless Integration',
        content: 'Connect effortlessly with various services using our API. Automate workflows, enhance functionality, and improve efficiency with ease.'
    },
    {
        img: '/img/api/play.svg',
        header: 'Fast & Reliable Performance',
        content: 'Our API delivers high-speed responses with minimal latency. Ensure smooth and efficient operations, even under heavy loads.'
    },
    {
        img: '/img/api/shield.svg',
        header: 'Secure & Scalable Solutions',
        content: 'Built with top-tier security, our API protects your data while scaling to meet your needs. Perfect for businesses of any size.'
    },
    {
        img: '/img/api/smile.svg',
        header: 'Dev-Friendly Documentation',
        content: 'Easy-to-follow documentation and well-structured endpoints make integration simple. Get started quickly and build with confidence.'
    }
]


export default () => {

    const scope = useRef(null)

    useGSAP(
        () => {
            gsap.fromTo('.Api_element_1', {
                x: -100,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.Api_header',
                    scrub: 1,
                    // markers: true,
                    start: `0px 70%`,
                    end: `80px 70%`,
                }
            })
            gsap.fromTo('.Api_element_2', {
                y: 100,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.Api_header',
                    scrub: 1,
                    // markers: true,
                    start: `80px 70%`,
                    end: `160px 70%`,
                }
            })
            gsap.fromTo('.Api_element_3', {
                y: 100,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.Api_header',
                    scrub: 1,
                    // markers: true,
                    start: `160px 70%`,
                    end: `240px 70%`,
                }
            })
            gsap.fromTo('.Api_element_4', {
                x: 100,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.Api_header',
                    scrub: 1,
                    // markers: true,
                    start: `240px 70%`,
                    end: `320px 70%`,
                }
            })
        },
        { scope: scope }
    )



    return (
        <div className='Api container' ref={scope}>
            <div className='Api_decor'>
                <img src="/img/apiDecor.svg" alt="" />
            </div>
            <div className='Api_header'>
                API Overview
            </div>
            <div className='Api_subheader'>
                Easily integrate, automate, and scale with our fast, secure, and developer-friendly API. Stay tuned for comprehensive documentation that will help you get started quickly once the API is released.
            </div>
            <div className='Api_elements'>
                {
                    elements.map((element, index) => {
                        return <div className={`Api_element Api_element_${index + 1}`} key={`api_el_${index}`}>
                            <div className="Api_element_line"></div>
                            <div className="Api_element_header">
                                <img src={element.img} alt="" />
                                <span className='Api_element_header_text'>
                                    {element.header}
                                </span>
                            </div>
                            <div className="Api_element_content">
                                {element.content}
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}