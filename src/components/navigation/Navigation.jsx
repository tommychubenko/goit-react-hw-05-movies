import { StyledLink } from './Navigation.module';

export const Navigation = () => {
  return (
    <nav>
      <StyledLink to="/">Main page</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
      <StyledLink to="/actors">Actors</StyledLink>
    </nav>
  );
};
