import {useInView} from 'react-intersection-observer';

// @ts-ignore
const LazyLoader = ({children}) => {
    const {ref, inView} = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    return (
        <div ref={ref}
             className={`transition-opacity duration-800 ease-in-out ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
            {children}
        </div>
    )
}

export default LazyLoader;