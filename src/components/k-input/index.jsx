import './index.less';

import { forwardRef } from 'react';

const KInput = forwardRef(({ value, onChange, type, name, cols, rows, placeholder }, ref) => {
  if (type === 'textarea') {
    return <textarea className='k-input' name={name} placeholder={placeholder} cols={cols || '30'} rows={rows || '10'}>
      {value}
    </textarea>
  }
  return <input ref={ref} name={name} placeholder={placeholder} className='k-input' value={value} onChange={(e) => onChange(e.target.value.trim())} type={type || 'text'} />
})

export default KInput;
