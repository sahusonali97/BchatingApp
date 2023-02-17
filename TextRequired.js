import React, { useState } from 'react';

function InputTextWithClearButton() {
  const [state1, setState1] = useState('');
  const [state2, setState2] = useState('');
  const [state3, setState3] = useState('');

  const handleClearText = (e, setStateFunction) => {
    e.preventDefault();
    setStateFunction('');
  };

  return (
    <div className="main">
      <form>
        <ul>
          <li>
            <div className="fieldset">
              <input
                type="search"
                name="state1"
                className="form-text"
                placeholder="Enter Your Name"
                value={state1}
                onChange={(e) => setState1(e.target.value)}
              />
            </div>
          </li>
          <li>
            <div className="fieldset">
              <input
                type="search"
                name="state2"
                className="form-text"
                placeholder="Enter Your Company"
                value={state2}
                onChange={(e) => setState2(e.target.value)}
              />
            </div>
          </li>
          <li>
            <div className="fieldset">
              <input
                type="search"
                name="state3"
                className="form-text"
                placeholder="Enter Your Email"
                value={state3}
                onChange={(e) => setState3(e.target.value)}
              />
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default InputTextWithClearButton;
