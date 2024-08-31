import Button from '../../Atoms/Button/Button'

import styles from './ButtonGrid.module.css'

export default function ButtonGrid({ activeItemId = null, items = [] }) {
  return (
    <div className={styles.container}>
      {items.map(({ id, label, onClick }) => (
        <Button
          key={id}
          variant={activeItemId && activeItemId === id ? 'contained' : 'outlined'}
          onClick={onClick}
          className={styles.button}
        >
          {label}
        </Button>
      ))}
    </div>
  )
}
