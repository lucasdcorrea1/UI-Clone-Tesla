import React from 'react'

import { ModelSelection, ModelsWrapper } from '../model'
import DefaultOverlayContent from '../DefaultOverlayContent'
import UnicOverlay from '../UnicOverlay'

import { Container, Spacers } from './styles'

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven'
          ].map(modelName => (
            <ModelSelection
              key={modelName}
              className='colored'
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description='Order Online for Delivery'
                />
              }
            />
          ))}
        </div>
        <Spacers/>
        <UnicOverlay />
      </ModelsWrapper>
    </Container>
  )
}

export default Page
