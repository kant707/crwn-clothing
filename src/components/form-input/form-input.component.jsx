import React from 'react';

import './form-input.styles.scss';

const FromInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input type="text" className="form-input" onChange={handleChange} {...otherProps}/>
    {
      label ? 
        (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label` }>
          {label}
        </label>):
      null
    }
  </div>
)

export default FromInput; 