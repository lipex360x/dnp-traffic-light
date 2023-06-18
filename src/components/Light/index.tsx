import classNames from 'classnames'
import styles from './styles.module.scss'

interface LightProps {
  color: string
  light: string
  setLight: (light: string) => void
}

export const Light = ({color, light, setLight}: LightProps) => {
  return (
    <div 
      className={classNames(styles.component, {
        [styles[color]]: color === light
      })}
      
      onClick={() => setLight(color)}
    />
  )
}
