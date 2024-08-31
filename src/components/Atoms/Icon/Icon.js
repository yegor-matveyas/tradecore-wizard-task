import PropTypes from 'prop-types'
import cx from 'classnames'

import { SIZES } from '../../../utils/constants'

import ArrowLeft from './ArrowLeft'
import Attach from './Attach'
import Complete from './Complete'
import Mention from './Mention'
import Underline from './Underline'

import styles from './Icon.module.css'

export const ICON_NAMES = ['arrowLeft', 'attach', 'complete', 'mention', 'underline']

Icon.propTypes = {
  name: PropTypes.oneOf(ICON_NAMES).isRequired,
  size: PropTypes.oneOf(SIZES),
}

export default function Icon({ name, size = SIZES[1], className = '', style = {} }) {
  const IconComponent = mappedIcons[name]
  return <IconComponent size={size} className={cx(styles.icon, { [styles[size]]: size }, className)} style={style} />
}

const mappedIcons = {
  arrowLeft: ArrowLeft,
  attach: Attach,
  complete: Complete,
  mention: Mention,
  underline: Underline,
}
