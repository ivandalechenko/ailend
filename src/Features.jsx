import './Features.scss';
import Feature from "./Feature";

const features = [
    {
        img: '/img/features/star.svg',
        header: 'Automated Prioritization',
        content: 'Implements intelligent task sorting based on urgency and contextual relevance. Uses deadline parsing, keyword extraction, and recurring pattern detection to keep high-impact tasks on top.'
    },
    {
        img: '/img/features/camera.svg',
        header: 'Call & Meeting Summaries',
        content: 'Automates call transcript processing, extracting key discussion points from Zoom, Google Meet, and Telegram voice calls. Outputs a structured, concise summary for quick reference.'
    },
    {
        img: '/img/features/eye.svg',
        header: 'Follow-Up Tracker',
        content: 'Monitors conversational context across messages and meetings, automatically flagging action items. Triggers reminders and follow-ups at optimal intervals to prevent task slippage.'
    },
    {
        img: '/img/features/sync.svg',
        header: 'Multi-Platform Sync',
        content: 'Integrates seamlessly with Google Calendar, Outlook, Telegram, WhatsApp, and more normalizing task data into a unified list with cross-platform state consistency.'
    },
    {
        img: '/img/features/notify.svg',
        header: 'Smart Notifications',
        content: 'Implements real-time event detection for scheduling conflicts, last-minute changes, and upcoming deadlines. Pushes alerts based on dynamic priority scoring.'
    },
    {
        img: '/img/features/stars.svg',
        header: 'AI Text Digest',
        content: 'Runs NLP-based text analysis to extract high signal information from messages. Identifies critical tasks, highlights key phrases, and filters noise to improve workflow efficiency.'
    }
]

export default () => {
    return (
        <div className='Features container'>
            <div className='Features_header'>
                <div className='Features_header_text'>
                    Features
                </div>
                <div className='Features_header_elements'>
                    <div className='Features_header_element'>
                        Telegram
                    </div>
                    <div className='Features_header_element_delimeter'></div>
                    <div className='Features_header_element'>
                        Messaging Platforms
                    </div>
                    <div className='Features_header_element_delimeter'></div>
                    <div className='Features_header_element'>
                        Email
                    </div>
                    <div className='Features_header_element_delimeter'></div>
                    <div className='Features_header_element'>
                        Calendar apps
                    </div>
                </div>
            </div>
            <div className='Features_list'>
                {
                    features.map((feature, index) => {
                        return <Feature key={`feature-${index}`} data={feature} />
                    })
                }
            </div>
        </div>
    )
}

