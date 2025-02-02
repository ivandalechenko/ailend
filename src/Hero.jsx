import './Hero.scss';
export default () => {
    return (
        <div className='Hero container'>
            <div className='Hero_decor_large'>
                <div className="Hero_decor_net free_img">
                    <img src="/img/heroNet.svg" alt="" />
                </div>
                <div className="Hero_decor_squares free_img">
                    <img src="/img/heroDots.svg" alt="" />
                </div>
            </div>
            <div className='Hero_decor_left free_img'>
                <div className='Hero_decor_left_light free_img'>
                    <div className='Hero_decor_left_light_inner'></div>
                </div>
                <div className='Hero_decor_left_char free_img'>
                    <img src="/img/chel.png" className='pa' alt="" />
                </div>
            </div>
            <div className='Hero_content'>
                <div className='Hero_header'>
                    Everyday Task AI Agent Organizer
                </div>
                <div className='Hero_subheader'>
                    Design the now. Shape the future.
                </div>
                <div className='Hero_text'>
                    An AI agent that integrates with your tools
                    to organize your work, calls, texts, and meetings.
                </div>
            </div>
            <div className='Hero_decor_right free_img'>
                <div className='Hero_decor_right_light free_img'>
                    <div className='Hero_decor_right_light_inner'></div>
                </div>
            </div>
        </div>
    )
}