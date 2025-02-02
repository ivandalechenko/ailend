import './Header.scss';
export default () => {
    return (
        <div className='Header container'>
            <div className='Header_left'>
                <div className='Header_logo'>
                    <img src="/img/logo.svg" alt="" />
                </div>
                <div className='Header_links'>
                    <a href='#' className='Header_link'>
                        <img src="/img/dex.svg" alt="" />
                    </a>
                    <a href='#' className='Header_link'>
                        <img src="/img/tg.svg" alt="" />
                    </a>
                    <a href='#' className='Header_link'>
                        <img src="/img/x.svg" alt="" />
                    </a>
                </div>
            </div>
            <div className='Header_right'>
                <a href='#' className='Header_github'>
                    <img src="/img/gh.svg" alt="" />
                    GitHub
                </a>
            </div>
        </div>
    )
}