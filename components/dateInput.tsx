import { ChangeEvent, ChangeEventHandler, useRef } from 'react';

type DateInuptPropsType = {
    handleChange?: ChangeEventHandler<HTMLInputElement>;
    value?: Date 
}

const DateInput:React.FC<DateInuptPropsType> = ({ handleChange }) => {

    const inputDateRef = useRef<ChangeEvent<HTMLInputElement>>(null);
    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        inputDateRef.current = e;
    }
    const handleSubmit = () => {
        handleChange(inputDateRef.current)
    }

    return (
        <div className='py-5 bg-black bg-opacity-50 text-center space-y-3'>
            <h2 className='text-white'>Select target Date: </h2>
            
            <input className='rounded p-2' type="datetime-local" onChange={handleInputChange} />
            <button className="rounded-sm bg-white hover:bg-gray-200 p-2 m-2" onClick={handleSubmit}>
                Run!
            </button>
        </div>
    )
}
export default DateInput;