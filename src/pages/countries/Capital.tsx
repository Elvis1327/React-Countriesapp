import React, { useState } from 'react';

import { Input } from '../../components/shared/Input';

export const Capital = () => {

  const [ capitalValue, setCapitalValue ] = useState('');

  return (
    <div className="_capital-main-container">
      <Input
        className='_input-capital'
        name='capital'
        placeHolder='Introduce a Capital name'
        type='text'
        value={capitalValue}
        onChange={(e: any) => setCapitalValue(e.target.value)}
      />
    </div>
  );
}



































































