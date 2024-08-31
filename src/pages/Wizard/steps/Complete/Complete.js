import Button from '../../../../components/Atoms/Button/Button'
import Icon from '../../../../components/Atoms/Icon/Icon'
import Text from '../../../../components/Atoms/Text/Text'

import { useWizard } from '../../Wizard.provider'
import { Steps } from '../../Wizard.utils'

import styles from './Complete.module.css'

export default function Complete() {
  const { onReset, onToStepMove } = useWizard()

  const handleAddAnotherBook = () => {
    onReset()
    onToStepMove(Steps.GENRE)
  }

  return (
    <div className={styles.container}>
      <div className={styles.icon_wrapper}>
        <Icon name="complete" size="xl" />
      </div>
      <Text variant="heading" size="sm">
        Book added successfully
      </Text>
      <Button variant="contained" className={styles.button} onClick={handleAddAnotherBook}>
        Add another book
      </Button>
    </div>
  )
}
