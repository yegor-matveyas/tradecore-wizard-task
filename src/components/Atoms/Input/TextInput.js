import PropTypes from 'prop-types'
import cx from 'classnames'

import { SIZES } from '../../../utils/constants'

import styles from './Input.module.css'

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default function TextInput({ name, placeholder, size = SIZES[1], value = '', onChange }) {
  return (
    <input
      id={name}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={cx(styles.input, {
        [styles[size]]: size,
      })}
    />
  )
}
