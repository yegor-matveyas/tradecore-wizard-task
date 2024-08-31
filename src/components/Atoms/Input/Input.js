import CheckboxInput from './CheckboxInput'
import TextInput from './TextInput'

import withLabel from './withLabel'

export default function Input() {
  return <input />
}

Input.Checkbox = CheckboxInput
Input.Text = withLabel(TextInput)
