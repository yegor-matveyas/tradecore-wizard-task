import PropTypes from 'prop-types'
import cx from 'classnames'

import { SIZES } from '../../../utils/constants'

import Icon, { ICON_NAMES } from '../Icon/Icon'

import styles from './Button.module.css'

export const BUTTON_VARIANTS = ['outlined', 'contained']
export const BUTTON_TYPES = ['button', 'submit']

Button.propTypes = {
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(BUTTON_VARIANTS),
  type: PropTypes.oneOf(BUTTON_TYPES),
  iconSize: PropTypes.oneOf(SIZES),
  startIcon: PropTypes.oneOf(ICON_NAMES),
  endIcon: PropTypes.oneOf(ICON_NAMES),
  onClick: PropTypes.func,
}

export default function Button({
  disabled = false,
  variant = BUTTON_VARIANTS[0],
  type = BUTTON_TYPES[0],
  iconSize = SIZES[0],
  startIcon,
  endIcon,
  children,
  onClick,
  className = '',
  style = {},
}) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={cx(
        styles.button,
        {
          [styles[variant]]: variant,
        },
        className
      )}
      style={style}
    >
      {startIcon && <Icon size={iconSize} name={startIcon} />}
      {children}
      {endIcon && <Icon size={iconSize} name={endIcon} />}
    </button>
  )
}
