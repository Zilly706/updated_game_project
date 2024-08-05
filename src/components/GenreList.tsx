import { HStack, List, ListItem, Image, Spinner, Button, Heading } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';





interface Props{
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre,onSelectedGenre}: Props) => {
  // const { data, isLoading } = useGenres();

  const [result] = useGenres();
  const { data, isLoading } = result;

  if (isLoading) return <Spinner/>;

  return (
<>
    <Heading marginBottom={3} fontSize={'2xl'}>Genres</Heading>
    <List >
      {data?.results.map((genre: Genre) => (
        <ListItem key={genre.id} paddingY='7px'>
          <HStack>
            <Image boxSize="32px" borderRadius="8px" src={getCroppedImageUrl(genre.image_background)}
            objectFit={'cover'}
            alt={genre.name} />
            <Button whiteSpace={'normal'} textAlign={'left'} fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'} onClick={() => onSelectedGenre(genre)}  fontSize={'lg'} variant = 'link' >{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
