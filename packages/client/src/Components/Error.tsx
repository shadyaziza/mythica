import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

export const AsyncError = () => {
  return (
    <Alert icon={<IconAlertCircle size="1rem" />} title="Arghhhh!" color="red">
      We are very sorry that you had to face this error. We can not promise that
      you will not face this again, however, we promise that we are not going to
      ever fix it.
    </Alert>
  );
};
