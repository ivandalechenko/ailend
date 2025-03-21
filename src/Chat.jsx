import { useRef } from 'react';
import './Chat.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
export default () => {
    const scope = useRef(null)

    useGSAP(
        () => {
            gsap.fromTo('.Chat_decor_phone_img', {
                y: 500,
                // opacity: 0,
            }, {
                y: 0,
                // opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.Chat',
                    scrub: 1,
                    // markers: true,
                    start: `0% 70%`,
                    end: `50% 70%`,
                }
            })
        },
        { scope: scope }
    )

    return (
        <div className='Chat_wrapper' ref={scope}>

            <div className='Chat container'>
                <div className='Chat_content'>
                    <img src="/img/chatIco.svg" alt="" />
                    <div className='Chat_header'>
                        Chat with Bot
                    </div>
                    <div className='Chat_subheader'>
                        Engage in real-time conversations with our AI bot. Get instant answers, automate tasks, and receive personalized recommendations, all through an easy-to-use chat interface.
                    </div>
                </div>
                <div className='Chat_decor free_img '>
                    <div className='Chat_decor_light free_img'>
                        <div className='Chat_decor_light_inner'></div>
                    </div>
                    <div className='Chat_decor_phone free_img'>
                        <img src="/img/phone.webp" className='Chat_decor_phone_img' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}