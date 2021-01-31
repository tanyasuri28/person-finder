import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPersonSearch } from "../state/setPersonSearch.action";

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

      console.log("inputValue", inputValue);
      console.log("filteredData", filteredData);
      // setMatchingPersons(filteredData);
      dispatch(setPersonSearch(filteredData));
    },
    [dispatch]
  );

  return (
    <>
      <input onChange={handleOnChange} />
    </>
  );
};

export default SearchName;
