import { useMemo } from 'react'

import Actions from '../../../components/Molecules/Actions/Actions'
import ButtonGrid from '../../../components/Molecules/ButtonGrid/ButtonGrid'

import { NewSubgenreActions as Action } from '../Wizard.store'
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
  } = useWizard()

  const items = useMemo(() => {
    const genre = genres[selectedGenre]
    const subgenres = Object.values(genre.subgenres).map(({ id, name }) => ({
      id,
      label: name,
      onClick: () => onSubgenreSelect(id),
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
  }, [genres, selectedGenre, onSubgenreSelect, onToStepMove])

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
