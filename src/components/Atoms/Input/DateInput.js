import PropTypes from 'prop-types'
import cx from 'classnames'

import { SIZES } from '../../../utils/constants'

import styles from './Input.module.css'

DateInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default function DateInput({ name, placeholder, min, max, size = SIZES[1], value = '', onChange }) {
  return (
    <input
      id={name}
      type="date"
      placeholder={placeholder}
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={cx(styles.input, { [styles[size]]: size })}
    />
  )
}
