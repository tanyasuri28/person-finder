import { useSelector } from "react-redux";
import PersonDisplayItem from "./PersonDisplayItem";
import { getCurrentPersons } from "../state/selectors";
import { StyledContainer } from "./styles";

const PersonDisplayContainer: React.FC = () => {
  const currentPersons = useSelector(getCurrentPersons);

  return (
    <StyledContainer>
      {currentPersons?.map((person) => {
        return <PersonDisplayItem key={person.id} person={person} />;
      })}
    </StyledContainer>
  );
};

export default PersonDisplayContainer;
