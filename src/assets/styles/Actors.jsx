import styled from 'styled-components';

const ActorsContainer = styled.div`
  width: 100vw;
  
  .filter__name {
    padding: 15px;

    input {
      padding: 5px;
    }
  }

  .people__section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    gap: 10px;
  }

`;

export default ActorsContainer;
