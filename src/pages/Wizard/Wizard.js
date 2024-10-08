import Text from '../../components/Atoms/Text/Text'

import Stepper from './steps/Stepper/Stepper'

import { useWizard } from './Wizard.provider'
import { Steps, MappedSteps } from './Wizard.utils'

import styles from './Wizard.module.css'

export default function Wizard() {
  const { currentStep } = useWizard()

  const Component = MappedSteps[currentStep].component

  return (
    <div className={styles.container}>
      {currentStep !== Steps.COMPLETE && (
        <div className={styles.header}>
          <Text element="heading" size="sm">
            Add book - New book
          </Text>
        </div>
      )}
      <Stepper />
      <Component />
    </div>
  )
}
