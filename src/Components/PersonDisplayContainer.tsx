import { useSelector } from "react-redux";
import styled from "styled-components";
import PersonDisplayItem from "./PersonDisplayItem";
import { getCurrentPersons } from "../state/selectors";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-top: 30px;
`;

const PersonDisplayContainer: React.FC = () => {
  const currentPersons = useSelector(getCurrentPersons);

  return (
    <>
      <StyledContainer>
        {currentPersons?.map((person) => {
          return <PersonDisplayItem key={person.id} person={person} />;
        })}
      </StyledContainer>
    </>
  );
};

export default PersonDisplayContainer;
