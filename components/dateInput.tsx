import * as React from 'react';
const DateInput:React.FC<{handleChange: React.ChangeEventHandler<HTMLInputElement>}> = (props) => {
    const { handleChange } = props;

    return (
        <div className='py-5 bg-[#001220] bg-opacity-50 text-center space-y-3'>
            <h2 className='text-white'>Select target Date: </h2>
            <input className='rounded p-2' type="datetime-local" onChange={handleChange} />

        </div>
    )
}
export default DateInput;