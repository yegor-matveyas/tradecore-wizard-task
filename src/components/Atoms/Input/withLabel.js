import cx from 'classnames'
import Text from '../Text/Text'

import styles from './Input.module.css'

export default function withLabel(Component) {
  // eslint-disable-next-line react/display-name
  return ({ fullWidth = false, label, name, className = '', style = {}, ...rest }) => {
    return (
      <div className={cx(styles.wrapper, { [styles.full_width]: fullWidth }, className)} style={style}>
        {label && (
          <Text bold element="label" htmlFor={name}>
            {label}
          </Text>
        )}
        <Component name={name} {...rest} />
      </div>
    )
  }
}
