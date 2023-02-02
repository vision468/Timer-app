import * as React from 'react';
import RemainingTime , {  } from "@/lib/remainingTime";
import DateInput from './dateInput';

export const Counter:React.FC<{title: string, value: number, className?: string, duration: number}> = (props) => {
    const {value, className, duration, title} = props;
    const [mutableValue, setMutableValue] = React.useState<number>(0);

    React.useEffect(()=> {
        setMutableValue(Number(value));
    }, [value])
    React.useEffect(() => {
        const div = document.querySelector(`.${title}`);
        div.classList.toggle('text-red-600', true)
        div.classList.toggle('text-white')
        div.classList.toggle('bg-red-600')
    }, [mutableValue])
    return (
        <div className={`${className} ${title} flex justify-center items-center text-center p-10 aspect-square w-1/3 md:w-1/6 text-white bg-red-600 bg-opacity-25 rounded transition-all`}>
            <div className='space-y-5'>
                <h1 className=' text-lg'>
                    {title}
                </h1>
                <strong className=' text-5xl'>
                    {mutableValue}
                </strong>
            </div>
        </div>
    )
}

export const Container:React.FC<{targetTime: Date}> = (props) => {
    const { targetTime } = props;
    const { useState, useEffect } = React
    const [duration, setDuration] = useState<Date>(new Date());

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const q = new Date(e.target.value)
        setDuration( RemainingTime( q ) );
    }
    useEffect(() => {
        setDuration( RemainingTime( targetTime ) )
        setInterval(()=> {
            setDuration(pdur => new Date(pdur.getTime() - 1000 > 0 ? pdur.getTime() - 1000 : 0))    
        }, 1000, [duration.getTime()])
    }, []);

    return (
        <>
        <div className="flex-grow flex flex-col" >
            <div className="flex-grow pb-20 md:pb-0 flex flex-col-reverse md:flex-row justify-end md:justify-center md:items-center bg-[url('../public/background.svg')] bg-no-repeat bg-cover bg-center">
                <div className='md:flex-1 flex flex-row justify-evenly items-center'>
                    <Counter title='Years' value={duration.getUTCFullYear() - 1970 < 0 ? 0 : duration.getUTCFullYear() - 1970}  duration={3.1526e6} />
                    <Counter title='Months' value={duration.getUTCMonth()} duration={2.592e6} />
                    <Counter title='Days' value={duration.getUTCDate() - 1 < 0 ? 0 : duration.getUTCDate() - 1} duration={8.64e5}  />
                </div>
                <div className='md:flex-1 flex flex-row justify-evenly items-center'>
                    <Counter title='Hours' value={duration.getUTCHours()}  duration={3.6e5} />
                    <Counter title='Minutes' value={duration.getUTCMinutes()} duration={6e4}  />
                    <Counter title='Seconds' value={duration.getUTCSeconds()} duration={1e3} />
                </div>
            </div>

            <DateInput handleChange={handleInputChange} />

        </div>

        </>
    )
}
const CounterComponent:React.FC = () => {
    return(
        <>
            Counter Component
        </>
    )
}
export default CounterComponent;
