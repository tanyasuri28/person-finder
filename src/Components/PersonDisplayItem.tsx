import styled from "styled-components";
import { Person } from "../state/types";

interface Props {
  person: Person;
}

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`;

export const StyledName = styled.div`
  padding-bottom: 4px;
  font-weight: bold;
`;

const PersonDisplayItem: React.FC<Props> = ({ person }) => {
  console.log("person-PersonDisplayItem", person);
  return (
    <>
      <StyledCard>
        <img height="100px" width="100px" src={person.avatar} />
        <StyledInfo>
          <StyledName> {person.name}</StyledName>
          <div> {person.description}</div>
        </StyledInfo>
      </StyledCard>
    </>
  );
};

export default PersonDisplayItem;
