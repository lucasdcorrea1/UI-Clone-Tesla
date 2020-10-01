import React, { useState, useCallback, useLayoutEffect } from 'react'
import { CarModel } from '../ModelsContext'

import { Container } from './styles'
import useWrapperScroll from '../useWrapperScroll'
import { useTransform } from 'framer-motion'

interface Props {
  model: CarModel
}
type SectionDimensionos = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>
const ModuleOverlay: React.FC<Props> = ({ model, children }) => {
  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight
    } as SectionDimensionos
  }, [model.sectionRef])

  const [dimensions, setDimensions] = useState<SectionDimensionos>(
    getSectionDimensions()
  )

  useLayoutEffect(() => {
    function onResize () {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions()))
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [getSectionDimensions])

  const { scrolly } = useWrapperScroll()

  const sectionScriollProgress = useTransform(
    scrolly,
    y => (y - dimensions.offsetTop) / dimensions.offsetHeight
  )

  const opacity = useTransform(
    sectionScriollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1, 0]
  )

  const pointerEvents = useTransform(opacity, value =>
    value > 0? 'auto': 'none')
  return <Container style={{ opacity, pointerEvents }}>{children}</Container>
}

export default ModuleOverlay
