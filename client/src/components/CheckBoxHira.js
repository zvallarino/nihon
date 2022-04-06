import React, { useState } from "react";

const CheckboxHira = ({sound, setCurrentlyChecked, currentlyChecked,index}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    createSetObject();
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
    </div>
  );
};


export default CheckboxHira;