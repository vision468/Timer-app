
import { useEffect, useState, useRef } from 'react'
import RemainingTime from '@/lib/remainingTime';
import Counter from './counter';
import DateInput from './dateInput';

type ContainerPropsType = {
    targetTime?: Date
}
const Container:React.FC<ContainerPropsType> = ({ targetTime }) => {
    
    const intervalRef = useRef<NodeJS.Timeout | null | number>(null);
    const [timerStart, setTimerStart] = useState(false)
    const [duration, setDuration] = useState<Date>( targetTime || new Date("0"))
    const [modifiedDate, setModifiedDate] = useState<Date>(null)
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if(!e) return;
        e.preventDefault();
        const q = new Date(e.target.value);
        setDuration( RemainingTime( q ) );
        setModifiedDate(q)
              
    }
    useEffect(() => {
        if(modifiedDate || targetTime) {
            setTimerStart(true);
            intervalRef.current = setInterval(()=> {
                setDuration( prevDate => {
                    const diff = prevDate.getTime() - 1000
                    return new Date( diff > 0 ? diff : 0 )
                })
            }, 1000, duration.getTime())
            return () => clearInterval(intervalRef.current)
        } else {
            intervalRef.current && clearInterval(intervalRef.current)
            setTimerStart(false)
        }

         
    }, [modifiedDate]);

    return (
        <>
        <div className="flex-grow flex flex-col " suppressHydrationWarning={true} >
            <div className="flex-grow pb-20 md:pb-0 flex flex-col-reverse md:flex-row justify-end md:justify-center md:items-center ">
                <div className='md:flex-1 flex flex-row justify-evenly items-center'>
                    <Counter isRunning={timerStart} title='Years' value={duration.getUTCFullYear() - 1970 < 0 ? 0 : duration.getUTCFullYear() - 1970}  duration={3.1526e6} />
                    <Counter isRunning={timerStart} title='Months' value={duration.getUTCMonth()} duration={2.592e6} />
                    <Counter isRunning={timerStart} title='Days' value={duration.getUTCDate() - 1 < 0 ? 0 : duration.getUTCDate() - 1} duration={8.64e5}  />
                </div>
                <div className='md:flex-1 flex flex-row justify-evenly items-center'>
                    <Counter isRunning={timerStart} title='Hours' value={duration.getUTCHours()}  duration={3.6e5} />
                    <Counter isRunning={timerStart} title='Minutes' value={duration.getUTCMinutes()} duration={6e4}  />
                    <Counter isRunning={timerStart} title='Seconds' value={duration.getUTCSeconds()} duration={1e3} />
                </div>
                
            </div>
            
            <DateInput handleChange={handleInputChange} value={duration} />
        </div>

        </>
    )
}

export default Container;