import { useCallback, useMemo } from 'react'

import Actions from '../../../components/Molecules/Actions/Actions'
import ButtonGrid from '../../../components/Molecules/ButtonGrid/ButtonGrid'

import { NewSubgenreActions as Action, InformationActions } from '../Wizard.store'
import { useWizard } from '../Wizard.provider'
import { Steps } from '../Wizard.utils'

export default function Subgenre() {
  const {
    genres,
    selectedGenre,
    selectedSubgenre,
    onSubgenreSelect,
    onToStepMove,
    onNewSubgenreStateDispatch: dispatch,
    onInformationStateDispatch,
  } = useWizard()

  const handleSubgenreSelect = useCallback(
    ({ id, isDescriptionRequired }) => {
      if (!isDescriptionRequired) {
        onInformationStateDispatch(InformationActions.UPDATE, { description: undefined })
      }
      onSubgenreSelect(id)
    },
    [onInformationStateDispatch, onSubgenreSelect]
  )

  const items = useMemo(() => {
    const genre = genres[selectedGenre]
    const subgenres = Object.values(genre.subgenres).map((s) => ({
      id: s.id,
      label: s.name,
      onClick: () => handleSubgenreSelect(s),
    }))

    const newItemId = subgenres.length ? subgenres.at(-1).id + 1 : 0
    return [
      ...subgenres,
      {
        id: newItemId,
        label: 'Add new',
        onClick: () => {
          onSubgenreSelect(null)
          onToStepMove(Steps.ADD_SUBGENRE)
        },
      },
    ]
  }, [genres, selectedGenre, handleSubgenreSelect, onSubgenreSelect, onToStepMove])

  const actions = useMemo(() => {
    return [
      {
        label: 'Back',
        startIcon: 'arrowLeft',
        onClick: () => onToStepMove(Steps.GENRE),
      },
      {
        disabled: !selectedSubgenre,
        label: 'Next',
        variant: 'contained',
        onClick: () => {
          dispatch(Action.RESET)
          onToStepMove(Steps.INFORMATION)
        },
      },
    ]
  }, [selectedSubgenre, dispatch, onToStepMove])

  return (
    <>
      <ButtonGrid activeItemId={selectedSubgenre} items={items} />
      <Actions actions={actions} />
    </>
  )
}
