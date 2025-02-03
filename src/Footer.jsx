import './Footer.scss';
import Media from './Media';
export default () => {
    return (
        <div className='Footer_wrapper'>
            <div className='Footer container'>
                <div className='Footer_top'>
                    <div className='Footer_logo'>
                        <img src="/img/logo.svg" alt="" />
                    </div>
                    <div className='Header_links'>
                        <Media />
                    </div>
                </div>
                <div className='Footer_bot'>
                    <div className='Footer_text Footer_copy'>
                        Copyright © 2025 XENAI. All rights reserved.
                    </div>
                    <div className='Footer_text'>
                        Privacy Policy
                    </div>
                </div>
            </div>
        </div>
    )
}