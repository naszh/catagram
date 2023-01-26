import { Cat } from '../../redux/reducer/catsSlice.types';
import {
  Container,
  Details,
  FilteredImage,
  ForImg,
  Text,
} from './filter.styled';

interface FilteredItemProp {
  cat: Cat;
}

export const FilteredItem = ({ cat }: FilteredItemProp) => {
  return (
    <Container>
      <ForImg>
        <FilteredImage src={cat.image_link} loading='lazy' />
      </ForImg>
      <Details>
        <Text>origin: {cat.origin}</Text>
        <Text>height: {cat.length}</Text>
        <Text>
          weight: {cat.min_weight}-{cat.max_weight} pounds
        </Text>
        <Text>
          life expectancy: {cat.min_life_expectancy}-{cat.max_life_expectancy}{' '}
          years
        </Text>
        {cat.children_friendly && (
          <Text>
            children-friendly{' '}
            <meter
              min='0'
              max='5'
              low='2'
              high='4'
              optimum='5'
              value={cat.children_friendly}
            ></meter>
          </Text>
        )}
        {cat.family_friendly && (
          <Text>
            family-friendly{' '}
            <meter
              min='0'
              max='5'
              low='2'
              high='4'
              optimum='5'
              value={cat.family_friendly}
            ></meter>
          </Text>
        )}
        {cat.other_pets_friendly && (
          <Text>
            other pets friendly{' '}
            <meter
              min='0'
              max='5'
              low='2'
              high='4'
              optimum='5'
              value={cat.other_pets_friendly}
            ></meter>
          </Text>
        )}
        {cat.intelligence && (
          <Text>
            intelligence{' '}
            <meter
              min='0'
              max='5'
              low='2'
              high='4'
              optimum='5'
              value={cat.intelligence}
            ></meter>
          </Text>
        )}
        {cat.playfulness && (
          <Text>
            playfulness{' '}
            <meter
              min='0'
              max='5'
              low='2'
              high='4'
              optimum='5'
              value={cat.playfulness}
            ></meter>
          </Text>
        )}
        {cat.general_health && (
          <Text>
            health{' '}
            <meter
              min='0'
              max='5'
              low='2'
              high='4'
              optimum='5'
              value={cat.general_health}
            ></meter>
          </Text>
        )}
        {cat.grooming && (
          <Text>
            grooming{' '}
            <meter
              min='0'
              max='5'
              low='2'
              high='4'
              optimum='5'
              value={cat.grooming}
            ></meter>
          </Text>
        )}
      </Details>
    </Container>
  );
};
