import React from 'react';
import Form from 'react-bootstrap/Form';

function SelectionBox({ data, onChange, onSubmit, placeholder, buttonText, containerClass, imgPath, selectClass, buttonClass }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={containerClass}>
      <div className='select-div'>
        <Form.Select aria-label="Default select example" className={selectClass} onChange={handleChange}>
          <option value="">{placeholder}</option>
          {data.map((item, index) => (
            <option key={index} value={item.value}>{item.label}</option>
          ))}
        </Form.Select>
      </div>      
      <button className={buttonClass} type="submit" onClick={onSubmit}>{buttonText}</button>
      <img src={imgPath} />
    </div>
  );
}

export default SelectionBox;
