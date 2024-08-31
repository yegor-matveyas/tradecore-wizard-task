import { createContext, useContext, useReducer, useState } from 'react'

import { newSubgenreReducer, informationReducer, NewSubgenreAction, InformationAction } from './Wizard.store'
import { defaultContext, Steps } from './Wizard.utils'

const WizardContext = createContext(defaultContext)

export const useWizard = () => {
  return useContext(WizardContext)
}

export default function WizardProvider({ children }) {
  const [genres, setGenres] = useState(defaultContext.genres)

  const [currentStep, setCurrentStep] = useState(defaultContext.currentStep)

  const [selectedGenre, setSelectedGenre] = useState(defaultContext.selectedGenre)
  const [selectedSubgenre, setSelectedSubgenre] = useState(defaultContext.selectedSubgenre)

  const [newSubgenreState, newSubgenreDispatch] = useReducer(newSubgenreReducer, defaultContext.newSubgenreState)

  const [informationState, informationDispatch] = useReducer(informationReducer, defaultContext.informationState)

  const handleSelectValue = (setSelected) => (newValue) => {
    setSelected((prevValue) => (prevValue === newValue ? null : newValue))
  }

  const handleDispatchState = (dispatch) => (type, payload) => {
    dispatch({ type, payload })
  }

  const handleAddSubgenre = () => {
    setGenres((genres) => {
      return {
        ...genres,
        [selectedGenre]: {
          ...genres[selectedGenre],
          [newSubgenreState.id]: { ...newSubgenreState },
        },
      }
    })
  }

  const handleReset = () => {
    handleDispatchState(newSubgenreDispatch)(NewSubgenreAction.RESET)
    handleDispatchState(informationDispatch)(InformationAction.RESET)
    setCurrentStep(Steps.GENRE)
    setSelectedGenre(null)
    setSelectedSubgenre(null)
  }

  return (
    <WizardContext.Provider
      value={{
        books,
        genres,
        currentStep,
        selectedGenre,
        selectedSubgenre,
        newSubgenreState,
        informationState,
        onGenreSelect: handleSelectValue(setSelectedGenre),
        onSubgenreSelect: handleSelectValue(setSelectedSubgenre),
        onNewSubgenreStateDispatch: handleDispatchState(newSubgenreDispatch),
        onInformationStateDispatch: handleDispatchState(informationDispatch),
        onToStepMove: setCurrentStep,
        onSubgenreAdd: handleAddSubgenre,
        onReset: handleReset,
      }}
    >
      {children}
    </WizardContext.Provider>
  )
}
