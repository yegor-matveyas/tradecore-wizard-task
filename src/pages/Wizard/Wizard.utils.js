import GenreComponent from './steps/Genre'
import SubgenreComponent from './steps/Subgenre'
import AddSubgenreComponent from './steps/AddSubgenre'
import InformatuinComponent from './steps/Information/Information'
import CompleteComponent from './steps/Complete/Complete'

/**
 * Step utils
 */
export const Steps = {
  EMPTY: 0,
  GENRE: 1,
  SUBGENRE: 2,
  ADD_SUBGENRE: 3,
  INFORMATION: 4,
  COMPLETE: 5,
}

export const MappedSteps = {
  [Steps.EMPTY]: {},
  [Steps.GENRE]: {
    id: Steps.GENRE,
    label: 'Genre',
    component: GenreComponent,
  },
  [Steps.SUBGENRE]: {
    id: Steps.SUBGENRE,
    label: 'Subgenre',
    component: SubgenreComponent,
  },
  [Steps.ADD_SUBGENRE]: {
    id: Steps.ADD_SUBGENRE,
    label: 'Add Subgenre',
    component: AddSubgenreComponent,
  },
  [Steps.INFORMATION]: {
    id: Steps.INFORMATION,
    label: 'Information',
    component: InformatuinComponent,
  },
  [Steps.COMPLETE]: {
    id: Steps.COMPLETE,
    component: CompleteComponent,
  },
}

export const defaultSteps = [
  MappedSteps[Steps.GENRE],
  MappedSteps[Steps.SUBGENRE],
  MappedSteps[Steps.ADD_SUBGENRE],
  MappedSteps[Steps.INFORMATION],
]
