import CheckboxInput from './CheckboxInput'
import DateInput from './DateInput'
import NumberInput from './NumberInput'
import SelectInput from './SelectInput'
import TextInput from './TextInput'

import withLabel from './withLabel'

export default function Input() {
  return <input />
}

Input.Checkbox = CheckboxInput
Input.Date = withLabel(DateInput)
Input.Number = withLabel(NumberInput)
Input.Select = withLabel(SelectInput)
Input.Text = withLabel(TextInput)
