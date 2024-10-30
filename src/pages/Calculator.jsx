import React, { useState } from 'react'

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [currentValue, setCurrentValue] = useState(null);
    const [operator, setOperator] = useState(null);
    const [resetDisplay, setResetDisplay] = useState(false);
    const [theme, setTheme] = useState(1); // Track the current theme (1, 2, or 3)

    // Handle number and decimal input
    const handleNumberClick = (value) => {
        if (display === '0' || resetDisplay) {
            setDisplay(value);
            setResetDisplay(false);
        } else {
            setDisplay(display + value);
        }
    };

    // Handle operators
    const handleOperatorClick = (newOperator) => {
        if (currentValue === null) {
            setCurrentValue(parseFloat(display));
        } else if (operator) {
            const result = calculate();
            setDisplay(result.toString());
            setCurrentValue(result);
        }
        setOperator(newOperator);
        setResetDisplay(true);
    };

    // Perform calculation
    const calculate = () => {
        const prev = currentValue;
        const current = parseFloat(display);
        if (operator === '+') return prev + current;
        if (operator === '-') return prev - current;
        if (operator === 'x') return prev * current;
        if (operator === '/') return current !== 0 ? prev / current : 'Error';
        return current;
    };

    // Equals button handler
    const handleEqualsClick = () => {
        if (operator && currentValue !== null) {
            const result = calculate();
            setDisplay(result.toString());
            setCurrentValue(null);
            setOperator(null);
            setResetDisplay(true);
        }
    };

    // Delete the last character
    const handleDelete = () => {
        setDisplay(display.length > 1 ? display.slice(0, -1) : '0');
    };

    // Reset calculator
    const handleReset = () => {
        setDisplay('0');
        setCurrentValue(null);
        setOperator(null);
    };

    // Toogle theme handler
    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === 3 ? 1 : prevTheme + 1);
    };

    // Define theme based styles
    const themeClasses = {
        1: {
            mainBg: 'bg-VerydarkDesaturatedBlueMbg',
            displayBg: 'bg-VerydarkDesaturatedBlueSbg',
            buttonBg: 'bg-VerydarkDesaturatedBlue-TKbg',
            textColor: 'text-VeryDarkGrayishBlue',
            keyBg: 'bg-LightgrayishOrange-keybg',
            delBg: 'bg-DesaturatedDarkBlueKeybg',
            delTx: 'text-white',
            resetTx: 'text-white',
            calcTx: 'text-white',
            equalsBg: 'bg-Red-keybackgroundToggle',
            toggleNum: 'text-white',
            toggleIcon: 'bg-Red-keybackgroundToggle'
        },
        2: {
            mainBg: 'bg-LightGrayMbg',
            displayBg: 'bg-VeryLightGraySbg',
            buttonBg: 'bg-GrayishRedTKbg',
            textColor: 'text-VeryDarkGrayishYellow',
            keyBg: 'bg-LightgrayishOrange-keybg',
            delBg: 'bg-DarkModerateCyanKeyBg',
            delTx: 'text-white',
            resetTx: 'text-white',
            calcTx: 'text-dark',
            equalsBg: 'bg-OrangeKeyBgT',
            toggleNum: 'text-black',
            toggleIcon: 'bg-OrangeKeyBgT'
        },
        3: {
            mainBg: 'bg-VeryDarkVioletMainBG',
            displayBg: 'bg-VeryDarkVioletTKSbg',
            buttonBg: 'bg-VeryDarkVioletTKSbg',
            textColor: 'text-LightYellow',
            keyBg: 'bg-VeryDarkVioletKeyBG',
            delBg: 'bg-DarkvioletKeyBG',
            delTx: 'text-white',
            resetTx: 'text-white',
            calcTx: 'text-LightYellow',
            equalsBg: 'bg-PurecyanKeyBGToggle',
            toggleNum: 'text-LightYellow',
            toggleIcon: 'bg-PurecyanKeyBGToggle'
        },
    };
    return (
        <>
            <div className={`${themeClasses[theme].mainBg} w-full h-[100vh] flex justify-center items-center`}>
                <div className=" w-[25%] h-[70%]">
                    <div className="flex flex-col gap-8 h-[100%]">
                        <div className="flex justify-between">
                            <p className={`${themeClasses[theme].calcTx} font-bold text-[26px]`}>calc</p>
                            <div className="flex gap-4">
                                <p className={`${themeClasses[theme].calcTx} text-[12px]`}>THEME</p>
                                <div className="flex flex-col">
                                    <div className="flex justify-between text-white">
                                        <p className={`${themeClasses[theme].toggleNum}`}>1</p>
                                        <p className={`${themeClasses[theme].toggleNum}`}>2</p>
                                        <p className={`${themeClasses[theme].toggleNum}`}>3</p>
                                    </div>
                                    <span onClick={toggleTheme} className={`${themeClasses[theme].buttonBg} w-[40px] h-[15px] rounded-xl flex items-center p-1 cursor-pointer`}>
                                        <button className={`${themeClasses[theme].toggleIcon} h-[10px] w-[10px] rounded-full`}  style={{ transform: `translateX(${(theme - 1) * 10}px)` }}></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <input type="text"
                                value={display}
                                readOnly
                                className={`${themeClasses[theme].displayBg} rounded-xl ${themeClasses[theme].calcTx} text-[45px] font-bold p-4 outline-none flex place-items-end w-full h-[100px]`}
                            />
                        </div>
                        <div className={`${themeClasses[theme].buttonBg} rounded-xl w-full h-[80%] p-6 flex flex-col gap-6`}>
                            <div className="flex justify-between">
                                {[7, 8, 9].map(num => (
                                    <button
                                        key={num}
                                        onClick={() => handleNumberClick(num.toString())}
                                        className={`text-[32px] h-[60px] w-[80px] rounded-xl font-bold ${themeClasses[theme].keyBg} ${themeClasses[theme].textColor}`}>
                                        {num}
                                    </button>
                                ))}
                                <button onClick={handleDelete} className={`h-[60px] w-[80px] text-white text-[32px] rounded-xl font-bold ${themeClasses[theme].delBg} ${themeClasses[theme].delTx}`}>DEL</button>
                            </div>
                            <div className="flex justify-between">
                                {[4, 5, 6].map(num => (
                                    <button
                                    key={num}
                                    onClick={() => handleNumberClick(num.toString())}
                                    className={`text-[32px] h-[60px] w-[80px] rounded-xl font-bold ${themeClasses[theme].keyBg} ${themeClasses[theme].textColor}`}>
                                    {num}
                                </button>
                                ))}
                                <button onClick={() => handleOperatorClick('+')} className={`h-[60px] w-[80px] text-[32px] rounded-xl font-bold  ${themeClasses[theme].keyBg} ${themeClasses[theme].textColor}`}>+</button>
                            </div>
                            <div className="flex justify-between">
                                {[1, 2, 3].map(num => (
                                    <button
                                    key={num}
                                    onClick={() => handleNumberClick(num.toString())}
                                    className={`text-[32px] h-[60px] w-[80px] rounded-xl font-bold ${themeClasses[theme].keyBg} ${themeClasses[theme].textColor}`}>
                                    {num}
                                </button>
                                ))}
                                <button onClick={() => handleOperatorClick('-')} className={`h-[60px] w-[80px] text-[32px] rounded-xl font-bold  ${themeClasses[theme].keyBg} ${themeClasses[theme].textColor}`}>-</button>
                            </div>
                            <div className="flex justify-between">
                                {['.', 0].map(symbol => (
                                    <button
                                        key={symbol}
                                        onClick={() => handleNumberClick(symbol.toString())}
                                        className={`text-[32px] h-[60px] w-[80px] rounded-xl font-bold ${themeClasses[theme].keyBg} ${themeClasses[theme].textColor}`}>
                                        {symbol}
                                    </button>
                                ))}
                                <button onClick={() => handleOperatorClick('/')} className={`text-[32px] h-[60px] w-[80px] rounded-xl font-bold ${themeClasses[theme].keyBg} ${themeClasses[theme].textColor}`}>/</button>
                                <button onClick={() => handleOperatorClick('x')} className={`text-[32px] h-[60px] w-[80px] rounded-xl font-bold ${themeClasses[theme].keyBg} ${themeClasses[theme].textColor}`}>x</button>
                            </div>
                            <div className="flex justify-between">
                                <button onClick={handleReset} className={`h-[60px] w-[170px] text-[32px] rounded-xl font-bold ${themeClasses[theme].delBg} ${themeClasses[theme].resetTx}`}>RESET</button>
                                <button onClick={handleEqualsClick} className={`h-[60px] w-[170px] text-[32px] rounded-xl font-bold ${themeClasses[theme].equalsBg} ${themeClasses[theme].resetTx}`}>=</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Calculator