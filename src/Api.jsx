import './Api.scss';

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
    return (
        <div className='Api container'>
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
                    elements.map((element) => {
                        return <div className='Api_element'>
                            <div className="Api_element_line"></div>
                            <div className="Api_element_header">
                                <img src={element.img} alt="" />
                                {element.header}
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