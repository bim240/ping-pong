import { Form, Input, Button } from 'antd';
import { useEffect, useState } from 'react';

import { StyledStep1 } from './StyledComponent';

const Step1 = (props) => {
  const { setCurrentStep } = props;
  const [playerInfo, setPlayerInfo] = useState({
    player1: '',
    player2: '',
  });
  const [disableNext, setDisableNext] = useState(false);

  const updatePlayerInfo = ({ target: { name, value } }) => {
    setPlayerInfo((preState) => ({ ...preState, [name]: value.toLowerCase() }));
  };

  useEffect(() => {
    setDisableNext(playerInfo.player1.length && playerInfo.player2.length);
  }, [playerInfo]);

  const getToNextStep = () => {
    localStorage.setItem(
      'currentPlayer',
      `${playerInfo.player1}_${playerInfo.player2}`
    );
    setCurrentStep(2);
  };

  return (
    <StyledStep1>
      <Form layout="vertical">
        <Form.Item
          name="player1"
          label="Player 1 name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            name="player1"
            onChange={updatePlayerInfo}
            value={playerInfo.player1}
          />
        </Form.Item>
        <Form.Item
          name="player2"
          label="Player 2 name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            name="player2"
            onChange={updatePlayerInfo}
            value={playerInfo.player2}
          />
        </Form.Item>

        <Button
          data-testid="contiue-btn"
          disabled={!disableNext}
          type="primary"
          onClick={getToNextStep}
        >
          Continue
        </Button>
      </Form>
    </StyledStep1>
  );
};

export default Step1;
