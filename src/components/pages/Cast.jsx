import { useParams } from 'react-router-dom';

export const Cast = ({ actors }) => {
  const params = useParams();
  return (
    <div>
      {console.log(actors, params)},
      {/* {actors.map((actor, index) => {
        if (index < 5) {
          return <li key={actor.id}>{actor.name}</li>;
        }
      })} */}
    </div>
  );
};
