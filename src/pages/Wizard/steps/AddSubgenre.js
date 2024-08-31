import { useEffect, useMemo } from 'react'

import Actions from '../../../components/Molecules/Actions/Actions'
import Input from '../../../components/Atoms/Input/Input'

import { NewSubgenreActions as Action } from '../Wizard.store'
import { useWizard } from '../Wizard.provider'
import { Steps } from '../Wizard.utils'

export default function AddSubgenre() {
  const {
    genres,
    selectedGenre,
    newSubgenreState: state,
    onNewSubgenreStateDispatch: dispatch,
    onToStepMove,
  } = useWizard()
  const { id, name, isDescriptionRequired } = state

  useEffect(() => {
    if (!id) {
      const genre = genres[selectedGenre]
      const maxId = Math.max(...Object.values(genre.subgenres).map(({ id }) => id))

      const newItemId = maxId ? maxId + 1 : 0
      dispatch(Action.UPDATE, { id: newItemId })
    }
  }, [id, genres, selectedGenre, dispatch])

  const actions = useMemo(() => {
    return [
      {
        label: 'Back',
        startIcon: 'arrowLeft',
        onClick: () => {
          dispatch(Action.RESET)
          onToStepMove(Steps.SUBGENRE)
        },
      },
      {
        disabled: !name,
        label: 'Next',
        variant: 'contained',
        onClick: () => onToStepMove(Steps.INFORMATION),
      },
    ]
  }, [name, dispatch, onToStepMove])

  return (
    <>
      <Input.Text
        fullWidth
        name="name"
        placeholder="Subgenre name"
        value={name}
        onChange={(value) => dispatch(Action.UPDATE, { name: value })}
      />
      <Input.Checkbox
        name="description-required"
        label="Description is required for this subgenre"
        size="xs"
        checked={isDescriptionRequired}
        onChange={() =>
          dispatch(Action.UPDATE, {
            isDescriptionRequired: !isDescriptionRequired,
          })
        }
      />
      <Actions actions={actions} />
    </>
  )
}
