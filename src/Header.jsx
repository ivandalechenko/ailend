import './Header.scss';

import Media from "./Media";

export default () => {
    return (
        <div className='Header container'>
            {/* <div className='Header_left'> */}
            <div className='Header_logo'>
                <img src="/img/logo.svg" alt="" />
            </div>
            <div className='Header_links'>
                <Media />
            </div>
            {/* </div> */}
            {/* <div className='Header_right'>
                <a href='#' className='Header_github'>
                    <img src="/img/gh.svg" alt="" />
                    GitHub
                </a>
            </div> */}
        </div>
    )
}