import WizardProvider from '../Wizard/Wizard.provider'
import Wizard from '../Wizard/Wizard'

export default function App() {
  return (
    <WizardProvider>
      <Wizard />
    </WizardProvider>
  )
}
