import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setPersonSearch } from "../state/setPersonSearch.action";

import personData from "../constants /data.json";

const SearchName: React.FC = () => {
  const dispatch = useDispatch();

  const StyledInput = styled.input`
    width: 50%;
    background-color: lightgrey;
    border: 0;
    height: 25px;
  `;

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
      <StyledInput placeholder="type a name" onChange={handleOnChange} />
    </>
  );
};

export default SearchName;
