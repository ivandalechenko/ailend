import { useState } from 'react';
import './Feature.scss';
export default ({ data }) => {
    const [opened, setopened] = useState(false);
    return (
        <div className='Feature' onClick={() => { setopened(!opened) }}>
            <div className='Feature_controls'>
                <div className='Feature_controls_left'>
                    <div className='Feature_controls_decor'>
                        <img src={data.img} alt="" />
                    </div>
                    <div className='Feature_controls_header'>
                        {data.header}
                    </div>
                </div>
                <div className='Feature_controls_decor Feature_controls_opener'>
                    <img src={`/img/features/${opened ? 'minus' : 'plus'}.svg`} alt="" />
                </div>
            </div>
            <div className={`Feature_content ${!opened && 'Feature_content_closed'}`} >
                <div className='Feature_header'>
                    {data.header}
                </div>
                <div className='Feature_text'>
                    {data.content}
                </div>
            </div>
        </div>
    )
}