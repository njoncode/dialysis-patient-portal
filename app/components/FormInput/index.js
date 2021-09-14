/**
 *
 * FormInput
 *
 */

import React from 'react';

import '../../styles/components/formInput.scss';
import PropTypes from 'prop-types';

const FormInput = ({ onChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={onChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value && otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

FormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormInput;
