import './Chat.scss';
export default () => {
    return (
        <div className='Chat_wrapper'>

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
                        <img src="/img/phone.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}