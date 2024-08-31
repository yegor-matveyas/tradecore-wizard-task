import Text from '../../components/Atoms/Text/Text'

import Stepper from './steps/Stepper/Stepper'

import { useWizard } from './Wizard.provider'
import { MappedSteps } from './Wizard.utils'

import styles from './Wizard.module.css'

export default function Wizard() {
  const { currentStep } = useWizard()

  const Component = MappedSteps[currentStep].component

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text variant="heading" size="sm">
          Add book - New book
        </Text>
      </div>
      <Stepper />
      <Component />
    </div>
  )
}
