import PropTypes from 'prop-types'
import cx from 'classnames'

import Button, { BUTTON_VARIANTS } from '../../Atoms/Button/Button'
import { ICON_NAMES } from '../../Atoms/Icon/Icon'

import styles from './Actions.module.css'

const ACTIONS_ALIGNMENTS = ['start', 'center', 'end']

Actions.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      label: PropTypes.string.isRequired,
      variant: PropTypes.oneOf(BUTTON_VARIANTS),
      startIcon: PropTypes.oneOf(ICON_NAMES),
      endIcon: PropTypes.oneOf(ICON_NAMES),
      onClick: PropTypes.func.isRequired,
    })
  ),
  alignment: PropTypes.oneOf(ACTIONS_ALIGNMENTS),
}

export default function Actions({ actions = [], alignment = ACTIONS_ALIGNMENTS.at(-1) }) {
  return (
    <div className={cx(styles.actions, { [styles[alignment]]: alignment })}>
      {actions.map((a) => (
        <Button
          key={a.label}
          disabled={a.disabled}
          variant={a.variant}
          startIcon={a.startIcon}
          endIcon={a.endIcon}
          onClick={a.onClick}
        >
          {a.label}
        </Button>
      ))}
    </div>
  )
}
