import { Badge } from "@chakra-ui/react";




interface Props {
  score: number
}
const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red'
  return (
    <Badge colorScheme={color} fontSize='15px' paddingX= {2} borderRadius={5}>{score}</Badge>
  )
}

export default CriticScore;