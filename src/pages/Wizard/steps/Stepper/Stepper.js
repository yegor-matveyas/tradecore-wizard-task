import { Fragment, useMemo } from 'react'
import cx from 'classnames'

import Divider from '../../../../components/Atoms/Divider/Divider'
import Text from '../../../../components/Atoms/Text/Text'

import { useWizard } from '../../Wizard.provider'
import { Steps, MappedSteps, defaultSteps } from '../../Wizard.utils'

import styles from './Stepper.module.css'

export default function Stepper() {
  const { currentStep, newSubgenreState } = useWizard()

  const steps = useMemo(() => {
    switch (currentStep) {
      case Steps.GENRE:
      case Steps.SUBGENRE:
        return [MappedSteps[Steps.GENRE], MappedSteps[Steps.SUBGENRE], MappedSteps[Steps.EMPTY]]

      case Steps.ADD_SUBGENRE:
        return defaultSteps

      case Steps.INFORMATION:
        if (!newSubgenreState.name) {
          return [MappedSteps[Steps.GENRE], MappedSteps[Steps.SUBGENRE], MappedSteps[Steps.INFORMATION]]
        } else return defaultSteps

      default:
        return []
    }
  }, [currentStep, newSubgenreState.name])

  return (
    <div className={styles.container}>
      {steps.map(({ id, label }, index) => {
        const number = id ? index + 1 : '...'
        return (
          <Fragment key={number}>
            <Step number={number} label={label} isActive={currentStep === id} />
            {index !== steps.length - 1 && <Divider className={styles.divider} />}
          </Fragment>
        )
      })}
    </div>
  )
}

function Step({ number, label = '', isActive = false }) {
  return (
    <div className={styles.wrapper}>
      <div className={cx(styles.step, { [styles.active]: isActive })}>{number}</div>
      <Text bold variant="body" size="xs">
        {label}
      </Text>
    </div>
  )
}
