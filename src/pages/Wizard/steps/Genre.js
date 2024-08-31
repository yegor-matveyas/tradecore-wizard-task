import { useMemo } from 'react'

import Actions from '../../../components/Molecules/Actions/Actions'
import ButtonGrid from '../../../components/Molecules/ButtonGrid/ButtonGrid'

import { useWizard } from '../Wizard.provider'
import { Steps } from '../Wizard.utils'

export default function Genre() {
  const { genres, selectedGenre, onGenreSelect, onToStepMove } = useWizard()

  const items = useMemo(() => {
    return Object.values(genres).map(({ id, name }) => ({
      id: id,
      label: name,
      onClick: () => onGenreSelect(id),
    }))
  }, [genres, onGenreSelect])

  const actions = useMemo(() => {
    return [
      {
        label: 'Back',
        startIcon: 'arrowLeft',
        onClick: () => console.log('Back'),
      },
      {
        disabled: !selectedGenre,
        label: 'Next',
        variant: 'contained',
        onClick: () => onToStepMove(Steps.SUBGENRE),
      },
    ]
  }, [selectedGenre, onToStepMove])

  return (
    <>
      <ButtonGrid activeItemId={selectedGenre} items={items} />
      <Actions alignment="end" actions={actions} />
    </>
  )
}
