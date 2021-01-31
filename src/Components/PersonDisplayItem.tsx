import styled from "styled-components";
import { Person } from "../state/types";

interface Props {
  person: Person;
}

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
`;

const PersonDisplayItem: React.FC<Props> = ({ person }) => {
  console.log("person-PersonDisplayItem", person);
  return (
    <>
      <StyledCard>
        <img height="100px" width="100px" src={person.avatar} />
        <div>{person.name}</div>
      </StyledCard>
      <div>{person.description}</div>
    </>
  );
};

export default PersonDisplayItem;
