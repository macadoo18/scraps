import styled from 'styled-components';

const SearchSection = styled.section`
  background-color: lightblue;
  border-radius: 10px;
  text-align: center;
  width: 400px;
  margin: auto;

  .dropdown {
    p,
    select {
      display: inline-block;
    }
    select {
      margin-left: 10px;
    }
  }

  .dropdownOption {
    form {
      input {
        margin-left: 10px;
      }
      .submit {
        padding: 5px;
        margin: 20px;
      }
    }
  }
`;

export default SearchSection;
