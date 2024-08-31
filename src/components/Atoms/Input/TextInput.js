import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from '../Icon/Icon'

import { SIZES } from '../../../utils/constants'

import styles from './Input.module.css'

const ACTION_ICONS = ['underline', 'attach', 'mention']

TextInput.propTypes = {
  multiline: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  size: PropTypes.oneOf(SIZES),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default function TextInput({
  multiline = false,
  name,
  placeholder,
  rows = 3,
  size = SIZES[1],
  value = '',
  onChange,
}) {
  if (multiline) {
    return (
      <div className={styles.input}>
        <textarea
          id={name}
          placeholder={placeholder}
          rows={rows}
          maxLength={1000}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cx(styles.multiline, {
            [styles[size]]: size,
          })}
        />
        <div className={styles.actions}>
          {ACTION_ICONS.map((a) => (
            <ActionButton key={a} icon={a} />
          ))}
        </div>
      </div>
    )
  }

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

function ActionButton({ icon, size = 'sm' }) {
  return (
    <button type="button" className={cx(styles.action_button, { [styles[size]]: size })}>
      <Icon name={icon} size={size} />
    </button>
  )
}
