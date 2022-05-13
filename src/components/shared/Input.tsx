import React, { FC } from 'react';

interface Props {
    type: string;
    onChange?: any;
    placeHolder: string;
    className: string;
    name: string;
    value: string;
}

export const Input:FC<Props> = ({placeHolder,type,children,onChange,className,name,value}) => {
    return (
        <input 
            type={type} 
            placeholder={placeHolder}
            className={className}
            onChange={onChange}
            name={name}
            value={value}
        />
    )
}


