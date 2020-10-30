import React, {useRef, useState} from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null)
  const [copied, setCopied] = useState(false)
  const [rangeTop, setRangeTop] = useState(42)
  const [rangeLeft, setRangeLeft] = useState(30)
  const [rangeRight, setRangeRight] = useState(30)
  const [rangeBottom, setRangeBottom] = useState(33)

  const [isFullControl, setIsFullControl] = useState(false)

  const [left, setLeft] = useState(80)
  const [leftBottom, setLeftBottom] = useState(30)
  const [top, setTop] = useState(20)
  const [topRight, setTopRight] = useState(70)
  const [right, setRight] = useState(67)
  const [rightBottom, setRightBottom] = useState(25)
  const [bottomRight, setBottomRight] = useState(73)
  const [bottom, setBottom] = useState(30)

  const copyToClipboard = (event) => {
    event.preventDefault()
    inputRef.current.select()
    document.execCommand('copy');
    event.target.focus();
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1200)
  }

  return (
    <div className="app">
      <div className="wrapper">
        <h1 className="title">{isFullControl ? '8 POINT FULL CONTROL' : 'FANCY-BORDER-RADIUS'}</h1>
        <button className='change-control' onClick={() => setIsFullControl(!isFullControl)}>{isFullControl ? 'Simple version' : 'Full Control'}</button>
        {
          isFullControl
          ?   <div className="box-wrapper">
                <input type="range" className='rangeInput_1' value={top} onChange={event => setTop(event.target.value)}/>
                <input type="range" className='rangeInput_1' value={topRight} onChange={event => setTopRight(event.target.value)}/>
                <input type="range" className='rangeInput_2' value={left} onChange={event => setLeft(event.target.value)}/>
                <input type="range" className='rangeInput_2' value={leftBottom} onChange={event => setLeftBottom(event.target.value)}/>
                <input type="range" className='rangeInput_3' value={right} onChange={event => setRight(event.target.value)}/>
                <input type="range" className='rangeInput_3' value={rightBottom} onChange={event => setRightBottom(event.target.value)}/>
                <input type="range" className='rangeInput_4' value={bottom} onChange={event => setBottom(event.target.value)}/>
                <input type="range" className='rangeInput_4' value={bottomRight} onChange={event => setBottomRight(event.target.value)}/>
              <div className="box"
                   style={{borderRadius: `${top}% ${100-topRight}% ${100-bottomRight}% ${bottom}% / ${100-left}% ${100-right}% ${rightBottom}% ${leftBottom}%`}}/>
            </div>
          :   <div className="box-wrapper">
                <input type="range" className='rangeInput_1' value={rangeTop} onChange={(event => setRangeTop(event.target.value))}/>
                <input type="range" className='rangeInput_2' value={rangeLeft} onChange={event => setRangeLeft(event.target.value)}/>
                <input type="range" className='rangeInput_3' value={rangeRight} onChange={event => setRangeRight(event.target.value)}/>
                <input type="range" className='rangeInput_4' value={rangeBottom} onChange={event => setRangeBottom(event.target.value)}/>
                <div className="box"
                   style={{borderRadius: `${rangeTop}% ${100-rangeTop}% ${100-rangeBottom}% ${rangeBottom}% / ${100-rangeLeft}% ${100-rangeRight}% ${rangeRight}% ${rangeLeft}%`}}/>
              </div>
        }

        {
          copied && <div className='copied'><p>Copied to clipboard  &#128526;</p></div>
        }
        <form className='form'>
          <label htmlFor="">border-radius:</label>
          {
            isFullControl
            ? <textarea ref={inputRef} readOnly value={`${top}% ${100-topRight}% ${100-bottomRight}% ${bottom}% / ${100-left}% ${100-right}% ${rightBottom}% ${leftBottom}%`}/>
            : <textarea ref={inputRef} readOnly value={`${rangeTop}% ${100-rangeTop}% ${100-rangeBottom}% ${rangeBottom}% / ${100-rangeLeft}% ${100-rangeRight}% ${rangeRight}% ${rangeLeft}%`}/>
          }
          <button className='button' onClick={copyToClipboard}>Copy</button>
        </form>

        <a href="https://github.com/palaxius" className='link'>GitHub</a>
      </div>
    </div>
  );
}

export default App;
