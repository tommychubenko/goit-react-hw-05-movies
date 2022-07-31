import { useParams } from 'react-router-dom';

export const SearchResults = () => {
  const { word } = useParams();
  console.log(word);

  return (
    <div>
      <h2>Search results</h2>
      <hr />
    </div>
  );
};
