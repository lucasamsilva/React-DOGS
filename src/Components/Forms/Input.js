import React from 'react';
import Styles from './Input.module.css';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={Styles.wrapper}>
      <label htmlFor={name} className={Styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={Styles.input}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <p className={Styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
