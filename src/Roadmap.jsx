import { useRef } from 'react';
import './Roadmap.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const elements = [{
    percent: 100,
    header: 'Intelligent Task Prioritization',
    subheader: 'Develop algorithms to automatically sort tasks by urgency and context. This involves parsing deadlines, extracting keywords, and detecting recurring patterns.',
}, {
    percent: 75,
    header: 'Seamless Multiplatform Services Integration',
    subheader: 'Enable integration with Google Calendar, Outlook, Telegram, and WhatsApp. Unify task data across platforms to ensure consistent management.',
}, {
    percent: 25,
    header: 'Real-Time Event Notifications Tracking',
    subheader: 'Implement monitoring for scheduling conflicts, last-minute changes, and approaching deadlines. Push dynamic alerts based on priority scores.',
}, {
    percent: 0,
    header: 'Automated Text Analysis of Meeting',
    subheader: 'Create tools to process transcripts from calls and meetings, extracting key discussion points. Use NLP to highlight critical action items in text.',
}]

export default () => {

    const scope = useRef(null)

    useGSAP(
        () => {
            gsap.fromTo('.Roadmap_element_1', {
                x: -100,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.Roadmap_header_text',
                    scrub: 1,
                    // markers: true,
                    start: `0px 90%`,
                    end: `80px 90%`,
                }
            })
            gsap.fromTo('.Roadmap_element_2', {
                y: 100,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.Roadmap_header_text',
                    scrub: 1,
                    // markers: true,
                    start: `80px 90%`,
                    end: `160px 90%`,
                }
            })
            gsap.fromTo('.Roadmap_element_3', {
                y: 100,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.Roadmap_header_text',
                    scrub: 1,
                    // markers: true,
                    start: `160px 90%`,
                    end: `240px 90%`,
                }
            })
            gsap.fromTo('.Roadmap_element_4', {
                x: 100,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.Roadmap_header_text',
                    scrub: 1,
                    // markers: true,
                    start: `240px 90%`,
                    end: `320px 90%`,
                }
            })
        },
        { scope: scope }
    )


    return (
        <div className='Roadmap container' ref={scope} >
            <div className='Roadmap_header'>
                <div className='Roadmap_header_text'>
                    Roadmap
                </div>
                <div className='Roadmap_header_minitext'>
                    Track our project's progress from start to finish with key milestones and updates.
                </div>
            </div>
            <div className='Roadmap_list'>
                {
                    elements.map((element, index) => {
                        return <div className={`Roadmap_element Roadmap_element_${index + 1}`} key={`roadmap_el${index + 1}`}>
                            <div className='Roadmap_element_num'>0{index + 1}</div>
                            <div className='Roadmap_element_pb'>
                                <div className={`Roadmap_element_pb_inner ${element.percent === 100 || element.percent === 0 ? 'Roadmap_element_pb_inner_dark' : 'Roadmap_element_pb_inner_light'} `} style={{
                                    width: `${Math.max(element.percent, 30)}%`,
                                }}>
                                    {
                                        element.percent !== 0 ? <>
                                            {element.percent}%
                                            {
                                                element.percent === 100 && <img src="/img/check.svg" alt="" />
                                            }
                                        </> : 'Soon in progress'
                                    }
                                </div>
                            </div>
                            <div className='Roadmap_element_header'>
                                {element.header}
                            </div>
                            <div className='Roadmap_element_subheader'>
                                {element.subheader}
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

// ailend