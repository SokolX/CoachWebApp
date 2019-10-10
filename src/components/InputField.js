import React from 'react';
        
function isVowel(char) {
    return /^[aeiou]$/.test(char.toLowerCase());
}

const InputField = (props) => {
    return (
    
            <input class="auth__input"
                onChange={props.inputAction} 
                type={props.type} 
                id={props.id}
                placeholder={`${props.label}`} 
            />
              
        );
};

export default InputField;