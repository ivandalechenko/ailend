import { useState } from 'react';
import './Footer.scss';
import Media from './Media';
import Privacy from './Privacy';


export default () => {
    const [showPrivacy, setshowPrivacy] = useState(true);

    return (
        <>
            {showPrivacy && <Privacy hide={() => { setshowPrivacy(false) }} />}
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
                        <div className='Footer_text' onClick={() => { setshowPrivacy(true) }}>
                            Privacy Policy
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}