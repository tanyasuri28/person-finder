import { Person } from "../state/types";
import { StyledCard, StyledInfo, StyledName } from "./styles";

interface Props {
  person: Person;
}

const PersonDisplayItem: React.FC<Props> = ({ person }) => {
  return (
    <StyledCard>
      <img height="100px" width="100px" alt="" src={person.avatar} />
      <StyledInfo>
        <StyledName> {person.name}</StyledName>
        <div> {person.description}</div>
      </StyledInfo>
    </StyledCard>
  );
};

export default PersonDisplayItem;
