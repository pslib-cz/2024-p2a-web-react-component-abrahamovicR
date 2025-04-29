import {FC} from 'react'
import style from './PercentView.module.css'

type PercentViewType = {
    value: number,
    max: number,
    makeColor: (percent: number) => string
}


const PercentView: FC<PercentViewType> = ({max, value, makeColor}) => {
    return (
        <div className={style.percentView}>
            <p>{(value / max) * 100}%</p>
            <div className={style.percentBar}>
                <div className={style.percentBarprogress} style={ {backgroundColor: makeColor(value/max), width: `${(value / max) * 100}%`}  }>
                    
                </div>
            </div>
        </div>
    )
}
export default PercentView