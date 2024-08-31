import cx from 'classnames'

import styles from './Divider.module.css'

export default function Divider({ className = '' }) {
  return <div className={cx(styles.divider, className)} />
}
