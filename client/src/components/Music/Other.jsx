import { memo } from 'react'
import s from './Other.module.css';


const OtherInner = ({
    id,
    like,
    duration,
    setLikeTkack
}) => {
    return (
        <>
            <span className={like ? s.heartLike : s.heartNotLike} data-track-id={id} onClick={setLikeTkack}></span>
            <span>{duration}</span>
        </>
    )
}

export const Other = memo(OtherInner);