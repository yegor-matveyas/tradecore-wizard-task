import PropTypes from 'prop-types'
import cx from 'classnames'

import { SIZES } from '../../../utils/constants'

import styles from './Input.module.css'

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default function SelectInput({ name, placeholder, size = SIZES[1], options = [], value = '', onChange }) {
  return (
    <select
      id={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={cx(styles.input, styles.select, {
        [styles[size]]: size,
        [styles.placeholder]: !value,
      })}
    >
      {placeholder && (
        <option value="" disabled className={styles.placeholder}>
          {placeholder}
        </option>
      )}
      {options.map(({ id, label }) => (
        <option key={id} value={id} className={styles.option}>
          {label}
        </option>
      ))}
    </select>
  )
}
