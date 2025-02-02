import './Roadmap.scss';

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
    return (
        <div className='Roadmap'>
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
                    elements.map((element) => {
                        return <div className='Roadmap_element'>
                            <div className='Roadmap_element_num'></div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

// ailend