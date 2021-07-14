import { useEffect, useRef } from "react";

export default function useScroll(parrentRef, childRef, cb){
    const observer = useRef();
    console.log("useScroll")
    useEffect(() => {
        const options = {
            root: parrentRef.current,
            rootMargin: '0px',
            threshold:  0
        }
    
        observer.current = new IntersectionObserver(([target]) => {
            if(target.isIntersecting){
                console.log("isIntersecting");
                cb();
            }
        }, options);
    
        observer.current.observe(childRef.current);
    
        return () => {
            observer.current.unobserve(childRef.current);
        }
    }, [cb]);
}