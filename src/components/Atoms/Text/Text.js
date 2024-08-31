import PropTypes from 'prop-types'
import cx from 'classnames'

import { SIZES } from '../../../utils/constants'

import styles from './Text.module.css'

export const TEXT_ELEMENTS = ['body', 'heading', 'label']

Text.propTypes = {
  bold: PropTypes.bool,
  element: PropTypes.oneOf(TEXT_ELEMENTS),
  size: PropTypes.oneOf(SIZES),
}

export default function Text({ bold = false, element = TEXT_ELEMENTS[0], size = SIZES[1], children, ...rest }) {
  const Element = getElement(element)
  return (
    <Element className={cx(styles.text, { [styles[size]]: size, [styles.bold]: bold })} {...rest}>
      {children}
    </Element>
  )
}

function getElement(element) {
  switch (element) {
    case 'heading':
      return 'h1'
    case 'label':
      return 'label'
    case 'body':
    default:
      return 'p'
  }
}
