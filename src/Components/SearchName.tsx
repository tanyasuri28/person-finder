import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setPersonSearch } from "../state/setPersonSearch.action";
import { StyledInput } from "./styles";
import personData from "../constants /data.json";

const SearchName: React.FC = () => {
  const dispatch = useDispatch();

  const handleOnChange = useCallback(
    (e) => {
      const inputValue = e.target.value;
      const nameRegex = new RegExp(inputValue, "i");
      const filteredData = personData.filter((person) =>
        nameRegex.test(person.name)
      );

      dispatch(setPersonSearch(filteredData));
    },
    [dispatch]
  );

  return <StyledInput placeholder="Type a name..." onChange={handleOnChange} />;
};

export default SearchName;
