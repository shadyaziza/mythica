import {
  HoverCard,
  Avatar,
  Text,
  Group,
  Anchor,
  Stack,
  Button,
  Center,
  Badge,
} from '@mantine/core';
import { trpc } from '../lib/trpc';
import { AppLoader, AsyncError } from '../Components';

interface CreatureDetailsProps {
  id: number;
}
export function CreatureDetails(props: CreatureDetailsProps) {
  const { id } = props;
  const response = trpc.creature.getDetails.useQuery({ id: id });
  const details = response?.data;
  if (response.isLoading) {
    return <AppLoader />;
  }
  if (response.isError || !details) {
    return <AsyncError />;
  }

  return (
    <Group position="center">
      <HoverCard
        width={320}
        shadow="md"
        withArrow
        openDelay={200}
        closeDelay={400}
      >
        <HoverCard.Target>
          <Button radius="md" style={{ flex: 1 }}>
            Hover to show details on this creature
          </Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Group>
            <Avatar src={details.photo} radius="xl" />
            <Stack spacing={5}>
              <Text size="sm" weight={700} sx={{ lineHeight: 1 }}>
                {details.name}
              </Text>
              <Anchor
                href="https://twitter.com/mantinedev"
                color="dimmed"
                size="xs"
                sx={{ lineHeight: 1 }}
              >
                @{details.country_name}
              </Anchor>
            </Stack>
          </Group>

          <Text size="sm" mt="md">
            {details.description}
          </Text>

          <Group mt="md" spacing="xl">
            {details.characteristics.split(',').map((char) => (
              <Badge>{char}</Badge>
            ))}
          </Group>
          <Group mt="md" spacing="xl">
            <div>Appeared in books:</div>
            {details.books.split(',').map((book) => (
              <Badge>{book}</Badge>
            ))}
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
