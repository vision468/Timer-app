import React, {useEffect, useRef, useState} from 'react';
import RemainingTime , {  } from "@/lib/remainingTime";
import DateInput from './dateInput';
import { useRouter } from 'next/router'

const FIRST_STYLE_CLASSES = "bg-red-300 text-red-500 "

const SECOND_STYLE_CLASSES = "bg-green-300 text-green-500" 

type CounterPropsType = {title: string;
    value: number;
    maxValue?: number ;
    minValue?: number;
    className?: string;
    duration: number
    isRunning: boolean;    
};



const Counter:React.FC<CounterPropsType> = (props) => {
    const {value, className, duration, title, maxValue = 9, minValue = 0, isRunning} = props;
    const intervalRef = useRef(0)
    const valueRef = useRef(0)
    const [loading, setLoading] =  useState(true);
    const [toggleStyle, setToggleStyle] = useState(FIRST_STYLE_CLASSES)
    
    const changeStyle = () => {
        setToggleStyle( prevStyle => prevStyle === FIRST_STYLE_CLASSES ? SECOND_STYLE_CLASSES : FIRST_STYLE_CLASSES);
    }
    
    useEffect(() => {
        setLoading(false)
    }, [])
    useEffect(() => {
        if(value != valueRef.current){
            changeStyle();
            valueRef.current = value
        }
    }, [value, isRunning])
    
    return (
        <div className={`${className} ${title} flex justify-center items-center text-center p-10 aspect-square w-1/3 md:w-1/6 bg-zinc-600 rounded-md`}>
            <div className={`${toggleStyle} bg-transparent space-y-5`}>
                <h1 className='font-bold text-lg'>
                    {title}
                </h1>
                <div className='bg-white min-w-32 min-h-32 aspect-square overflow-hidden rounded-full'>
                    <div className={`${toggleStyle} duration-100 transition-all w-full h-full flex justify-center items-center bg-slate-400 bg-opacity-50`}>
                        <strong className='duration-100 transition-color text-5xl'>
                            { loading ? 0 : value}
                        </strong>
                    </div>
    
                </div>
                
            </div>
        </div>
    )
}

export default Counter;





