import React, { useState } from "react";

const CheckboxHira = ({sound, setCurrentlyChecked, currentlyChecked,index}) => {
  const [checked, setChecked] = useState(false);


  const handleChange = () => {
    createSetObject();
    console.log(currentlyChecked)
    setChecked(!checked);
  };

const createSetObject = () => {
    setCurrentlyChecked({...currentlyChecked,
      [`${sound}`]:!checked
  })}

  const onChange = (e) =>{
    handleChange()
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
         {sound}
      </label>

      <p>Is "My Value" checked? {checked.toString()}</p>
    </div>
  );
};


export default CheckboxHira;