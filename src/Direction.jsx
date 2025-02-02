import './Direction.scss';
import DirectionChart from './DirectionChart';
export default () => {
    return (
        <div className='Direction container'>
            <div className='Direction_subheader'>
                <img src="/img/pill.svg" alt="" />
                Automated Prioritization
            </div>
            <div className='Direction_header'>
                Set the product direction
            </div>
            <div className='Direction_chart'>
                <DirectionChart />
            </div>
        </div>
    )
}



