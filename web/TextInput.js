import React from 'react';

const TextInput = ({onChange, value}) => (
    <input onChange={onChange} className="text-input" type="text" value={value} />
)

export default TextInput;
