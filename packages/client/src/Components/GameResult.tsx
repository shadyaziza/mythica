import { useAppState } from '../state';

export const GameResult = () => {
  const { len, won } = useAppState((state) => state);

  return (
    <>
      <p>{len}</p>
      <p>{won ? 'You won' : ''}</p>
    </>
  );
};
