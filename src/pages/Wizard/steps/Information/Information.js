import { useMemo, useState } from 'react'

import Actions from '../../../../components/Molecules/Actions/Actions'
import Input from '../../../../components/Atoms/Input/Input'

import { ISBN_MIN, ISBN_MAX, PAGES_MIN, PAGES_MAX } from '../../../../utils/constants'

import { InformationActions as Action } from '../../Wizard.store'
import { useWizard } from '../../Wizard.provider'
import { Steps } from '../../Wizard.utils'

import { AUTHORS, PUBLISHERS, FORMATS, LANGUAGES } from './Information.mocks'
import { fakeFetch, dateToString } from './Information.utils'

import styles from './Information.module.css'

export default function Information() {
  const [loading, setLoading] = useState(false)

  const {
    genres,
    selectedGenre,
    selectedSubgenre,
    newSubgenreState,
    informationState: state,
    onToStepMove,
    onInformationStateDispatch: dispatch,
    onSubgenreAdd,
  } = useWizard()
  const { title, author, isbn, publisher, publishedAt, pages, format, edition, language, description } = state

  const showDescription = useMemo(() => {
    if (newSubgenreState.name) return newSubgenreState.isDescriptionRequired
    return genres[selectedGenre].subgenres[selectedSubgenre].isDescriptionRequired
  }, [newSubgenreState, genres, selectedGenre, selectedSubgenre])

  const isAddDisabled = useMemo(() => {
    const { description, ...rest } = state
    if (!Object.values(rest).every(Boolean)) return true
    if (showDescription && !description) return true
    return false
  }, [showDescription, state])

  const actions = useMemo(() => {
    return [
      {
        label: 'Back',
        startIcon: 'arrowLeft',
        onClick: () => {
          const step = newSubgenreState.name ? Steps.ADD_SUBGENRE : Steps.SUBGENRE
          onToStepMove(step)
        },
      },
      {
        disabled: isAddDisabled || loading,
        label: 'Add',
        variant: 'contained',
        type: 'submit',
      },
    ]
  }, [isAddDisabled, loading, newSubgenreState.name, onToStepMove])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const result = await fakeFetch(state)
    console.log(result)

    setLoading(false)

    onSubgenreAdd()
    onToStepMove(Steps.COMPLETE)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input.Text
        fullWidth
        name="title"
        label="Book title"
        placeholder="Book title"
        value={title}
        onChange={(title) => dispatch(Action.UPDATE, { title })}
      />
      <Input.Select
        fullWidth
        name="author"
        label="Author"
        placeholder="Author"
        options={AUTHORS}
        value={AUTHORS.find((a) => a.id === author)?.id}
        onChange={(author) => dispatch(Action.UPDATE, { author })}
      />
      <Input.Number
        fullWidth
        name="isbn"
        label="ISBN"
        placeholder="ISBN"
        min={ISBN_MIN}
        max={ISBN_MAX}
        value={isbn}
        onChange={(isbn) => dispatch(Action.UPDATE, { isbn })}
      />
      <Input.Select
        fullWidth
        name="publisher"
        label="Publisher"
        placeholder="Publisher"
        options={PUBLISHERS}
        value={PUBLISHERS.find((p) => p.id === publisher)?.id}
        onChange={(publisher) => dispatch(Action.UPDATE, { publisher })}
      />
      <Input.Date
        name="publishedAt"
        label="Date published"
        min="1000-01-01"
        max={dateToString()}
        value={publishedAt}
        onChange={(publishedAt) => dispatch(Action.UPDATE, { publishedAt })}
        style={{ width: 'calc(33% - 16px)', minWidth: 150 }}
      />
      <Input.Number
        name="pages"
        label="Number of pages"
        placeholder="Number of pages"
        min={PAGES_MIN}
        max={PAGES_MAX}
        value={pages}
        onChange={(pages) => dispatch(Action.UPDATE, { pages })}
        style={{ width: 'calc(25% - 24px)', minWidth: 150 }}
      />
      <Input.Select
        name="format"
        label="Format"
        placeholder="Format"
        options={FORMATS}
        value={FORMATS.find((f) => f.id === format)?.id}
        onChange={(format) => dispatch(Action.UPDATE, { format })}
        style={{ width: 'calc(33% - 16px)', minWidth: 150 }}
      />
      <div className={styles.edition_wrapper}>
        <Input.Text
          name="edition"
          label="Edition"
          placeholder="Edition"
          value={edition}
          onChange={(edition) => dispatch(Action.UPDATE, { edition })}
          style={{ width: 'calc(33% - 16px)', minWidth: 150 }}
        />
        <Input.Select
          name="language"
          label="Edition language"
          placeholder="Edition language"
          options={LANGUAGES}
          value={LANGUAGES.find((l) => l.id === language)?.id}
          onChange={(language) => dispatch(Action.UPDATE, { language })}
          style={{ width: 'calc(33% - 16px)', minWidth: 150 }}
        />
      </div>
      {showDescription && (
        <Input.Text
          multiline
          fullWidth
          name="description"
          label="Description"
          placeholder="Type the description..."
          value={description}
          onChange={(description) => dispatch(Action.UPDATE, { description })}
        />
      )}
      <Actions actions={actions} />
    </form>
  )
}
