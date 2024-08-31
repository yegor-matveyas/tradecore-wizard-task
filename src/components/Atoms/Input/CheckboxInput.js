import PropTypes from 'prop-types'
import cx from 'classnames'

import Text from '../Text/Text'

import { SIZES } from '../../../utils/constants'

import styles from './Input.module.css'

CheckboxInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

export default function CheckboxInput({ name, label, size = SIZES[1], checked, onChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <input
        id={name}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={cx(styles.checkbox, { [styles[size]]: size })}
      />
      {label && (
        <Text bold element="label" htmlFor={name}>
          {label}
        </Text>
      )}
    </div>
  )
}
