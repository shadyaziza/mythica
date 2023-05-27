import { Suspense } from 'react';
import { trpc } from '../lib/trpc';
import { AppLoader, AsyncError } from '../Components';

import {
  createStyles,
  Text,
  rem,
  Card,
  ActionIcon,
  Image,
  Group,
} from '@mantine/core';
import { IconHeart, IconPlayerTrackNext } from '@tabler/icons-react';
import { CreatureDetails } from '.';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

export function RandomCreature() {
  const response = trpc.creature.getRandom.useQuery();

  const { classes } = useStyles();

  if (response.isLoading || response.isRefetching) {
    return <AppLoader />;
  }
  if (response.isError || !response.data?.creature) {
    return <AsyncError />;
  }

  const creature = response.data?.creature;

  return (
    <>
      <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
          <Image src={creature.photo} alt={creature.name} height={300} />
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group position="center">
            <Text fz="lg" fw={500}>
              {creature.name}
            </Text>
          </Group>
        </Card.Section>

        <Group mt="xs">
          <ActionIcon variant="default" radius="md" size={36}>
            <IconHeart size="1.1rem" className={classes.like} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="default" radius="md" size={36}>
            <IconPlayerTrackNext
              size="1.1rem"
              className={classes.like}
              stroke={1.5}
              onClick={() => response.refetch()}
            />
          </ActionIcon>
        </Group>
      </Card>
      <CreatureDetails id={creature.id} />
    </>
  );
}
