import { Box } from '@chakra-ui/react'
import React from 'react'

export const GameCardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box borderRadius={10} overflow={'hidden'}>
      {children}
    </Box>
  )
}