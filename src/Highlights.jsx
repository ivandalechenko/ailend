import './Highlights.scss';

const content = [{
    header: "Why it's useful?",
    content: "It eliminates the stress of juggling multiple communication channels and keeps everything streamlined, ensuring no important task or meeting is missed."
}, {
    header: "Stay Organized with Your To-Do List",
    content: "Keep track of your daily tasks and priorities with a simple and intuitive to-do list. Add, edit, and complete tasks effortlessly to stay productive and focused. Never forget an important task again!"
}, {
    header: "Create Task Progress Bars",
    content: "Visualize your progress and stay motivated with a task progress bar. Track completion steps, see how far you've come, and push forward to achieve your goals efficiently."
}]

export default () => {
    return (
        <div className='Highlights container'>

            <div className='Highlights_header'>
                <div className='Highlights_header_text'>
                    Key Highlights

                </div>
                <div className='Highlights_header_minitext'>
                    Fast integration, secure performance, scalable solutions, and user-friendly documentation.

                </div>
            </div>

            <div className='Highlights_content'>
                {
                    content.map((element, index) => {
                        return <div className='Highlights_element'>
                            <div className='Highlights_element_content'>
                                <div className='Highlights_element_number'>
                                    0{index + 1}
                                </div>
                                <div className='Highlights_element_header'>
                                    {element.header}
                                </div>
                                <div className='Highlights_element_content'>
                                    {element.content}
                                </div>
                            </div>
                            <div className='Highlights_element_decor'>
                                <img src={`/img/highlights/${index + 1}.png`} alt="" />
                            </div>

                        </div>
                    })
                }
            </div>

        </div>
    )
}