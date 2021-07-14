import React, { memo } from 'react';
import s from './LoadebleImage.module.css';
import cn from 'classnames';
import useIntersectionObserver from '@react-hook/intersection-observer'

const LoadebleImage = memo((props) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(false);
    const containerImageRef = React.useRef();
    const imageRef = React.useRef();
    const observer = useIntersectionObserver(containerImageRef);

    React.useEffect(() => {
        if (observer.isIntersecting) {
            let img = document.createElement("img");
            img.src = props.src;
            img.onload = () => {
                setIsLoaded(true);
            };
            setIsVisible(observer.isIntersecting);
        }
    }, [observer.isIntersecting, isLoaded, props.src]);

    return (
        <div ref={containerImageRef} className={s.container_image}>
            { isVisible && 
                <img ref={imageRef} className={cn(s.image, {[s.image_loaded]: isLoaded})} src={props.src} alt={props.alt} />
            }
        </div>
    )
});

export default LoadebleImage;