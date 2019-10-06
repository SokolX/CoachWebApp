import React from 'react';
        
function isVowel(char) {
    return /^[aeiou]$/.test(char.toLowerCase());
}

const InputField = (props) => {
    return (
            <div className="form-group row">
                <label htmlFor={props.id} className="col-sm-4 col-form-label">{props.label}</label>
                <div className="col-sm-8">
                    <input onChange={props.inputAction} type={props.type} 
                           id={props.id}
                           className="form-control" placeholder={`Podaj ${props.label}`} />
                </div>
            </div>
        );
};

export default InputField;