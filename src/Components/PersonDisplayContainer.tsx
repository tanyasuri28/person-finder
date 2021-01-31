import { useDispatch, useSelector } from "react-redux";
import PersonDisplayItem from "./PersonDisplayItem";
import { getCurrentPersons } from "../state/selectors";

const PersonDisplayContainer: React.FC = () => {
  const currentPersons = useSelector(getCurrentPersons);

  return (
    <>
      <h1>person</h1>
      {currentPersons?.map((person) => {
        return <PersonDisplayItem person={person} />;
      })}
    </>
  );
};

export default PersonDisplayContainer;
