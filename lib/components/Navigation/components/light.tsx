import React from 'react'
import { MoonIcon, SunIcon } from '@components/Navigation/icons'

interface LightIconProps {
  isDark: boolean
  onClick: () => void
}

export const LightIcon: React.FC<LightIconProps> = ({ isDark, onClick }) => (
  <div onClick={onClick}>{isDark ? <MoonIcon /> : <SunIcon />}</div>
)
