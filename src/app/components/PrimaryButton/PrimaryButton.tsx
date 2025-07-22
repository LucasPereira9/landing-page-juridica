'use client'

import { MouseEventHandler } from 'react'
import * as S from './PrimaryButton.styles'

interface PrimaryButtonProps {
  title: string
  onClick: MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
}

export function PrimaryButton({ title, onClick, type = 'button' }: PrimaryButtonProps) {
  return (
    <S.Button type={type} onClick={onClick}>
      {title}
    </S.Button>
  )
}
