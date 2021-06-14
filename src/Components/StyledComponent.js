import styled from "styled-components";

export const StyledStep1 = styled.div``;

export const StyledStep2 = styled.div`
  .single_plalyer_container {
    padding-bottom: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    .player_name {
      font-size: 2rem;
      font-weight: 900;
    }
    .wins_text {
      font-size: 1.5rem;
    }
    .wins {
      font-size: 3rem;
      font-weight: 900;
    }
  }
  .winner_container {
    .winner_name,
    .winner_diff {
      font-size: 1.5rem;
      font-weight: 900;
    }
  }
`;
