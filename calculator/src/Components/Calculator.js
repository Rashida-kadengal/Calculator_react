import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [num1, setNum1] = useState(0);
    const [operator, setOperator] = useState('');

    const clearInput = () => {
        setInput('');
    };

    const handleClick = (value) => {
        setInput(prevInput => prevInput + value);
    };

    const handleOperator = (value) => {
        setNum1(parseFloat(input));
        setInput('');
        setOperator(value);
    };

    const calculate = () => {
        const num2 = parseFloat(input);
        let result;
        
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '%':
                result=num1 % num2;
                break;

            default:
                result = 'invalid';
        }

        setInput(result);
    };

    return (
        <>
        <div className='bg-dark container rounded my-5 ' style={{width:450}}>
        <div className=' p-5 w-100 ' >
            <h4 className='text-white text-center  pb-2'>CASIO</h4>
            <input type="text" value={input} className='form-control w-100' readOnly />
            <div className='row ms-2 p-3  w-100' >
                <div className='col-md-2 column-gap-4  d-flex justify-content-around  w-100'>
                {[7, 8, 9,'*'].map((item) => (
                    <button className='btn btn-secondary rounded-circle btn-lg' key={item} onClick={() => (typeof item === 'number' ? handleClick(item) : handleOperator(item))}>
                        {item}
                    </button>
                ))}
                </div>
                </div>
                
                <div className='row ms-2  p-3  w-100'>
                <div className='col-md-2 column-gap-4    d-flex justify-content-around  w-100'>
                {[4, 5, 6,'-'].map((item) => (
                    <button className='btn btn-secondary rounded-circle btn-lg' key={item} onClick={() => (typeof item === 'number' ? handleClick(item) : handleOperator(item))}>
                        {item}
                    </button>
                ))}
                </div>
                </div>

                <div className='row ms-2  p-3  w-100'>
                <div className='col-md-2 column-gap-4 d-flex justify-content-around  w-100'>
                {[1, 2, 3,'+'].map((item) => (
                    <button className='btn btn-secondary rounded-pill btn-lg' key={item} onClick={() => (typeof item === 'number' ? handleClick(item) : handleOperator(item))}>
                        {item}
                    </button>
                ))}
                </div>
                </div>

                

                <div className='row ms-2 p-3  w-100'>
                <div className='col-md-2 column-gap-4  d-flex justify-content-around  w-100'>
                {[0,'.','/','%'].map((item) => (
                    <button className='btn btn-secondary rounded-circle btn-lg' key={item} onClick={() => (typeof item === 'number' || item === '.' ? handleClick(item) : handleOperator(item))}>
                        {item}
                    </button>
                ))}
                </div>
                </div>

               <div className='row ms-2  d-flex justify-content-evenly'>
                <div className='col-md-4 ms-3 mt-3' >
                    <button className='btn btn-secondary btn-lg w-100 rounded' onClick={calculate}>=</button></div>
                <div className='col-md-5 mt-3 ms-3' >
                    <button className='btn btn-secondary btn-lg w-75 rounded' onClick={clearInput}>C</button></div>
               </div>

              
</div>
        </div>
        </>
    );
};

export default Calculator;
