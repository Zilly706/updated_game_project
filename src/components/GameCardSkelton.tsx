import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


export const GameCardSkelton = () => {
  return (
<Card width='300px' borderRadius={10} overflow={'hidden'}>

  <Skeleton height='200px' />
  <CardBody>
    <SkeletonText/>
  </CardBody>
</Card>
  )
}
