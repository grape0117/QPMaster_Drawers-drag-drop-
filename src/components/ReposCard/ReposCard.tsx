import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { memo } from "react";

import {
  Card,
  CardSection,
  Text,
  Group,
  ThemeIcon,
  ActionIcon,
  Stack,
  Center,
  Box,
  Title,
} from "@mantine/core";
import { IconTrash, IconUpload } from "@tabler/icons-react";

// Components
import { DeleteModal, CreateModal } from "../Modals/Modals.tsx";

// Styles
import "./ReposCard.scss";

type ReposCardProps = {
  index: number;
  visibility: string;
  description: string;
  details: any;
  outline: boolean;
};

const ReposCard: React.FC<ReposCardProps> = ({
  index,
  visibility,
  description,
  details,
  outline,
}: ReposCardProps) => {
  const isXlargeScreen = useMediaQuery("(max-width: 1645px)");

  const handleDeleteModal = (params: any, index: number) => {
    DeleteModal(params, index);
  };

  const handleCreateModal = (index) => {
    console.log("create", index);
  };

  const handleOpenRequest = (index) => {
    console.log("open requested!", index)
  }

  return (
    <div className="repo">
      <Box
        sx={(theme) => ({
          boxShadow: "md",
          padding: 10,
          marginBottom: 15,
          visibility: `${visibility}`,
          borderRadius: theme.radius.md,
          backgroundColor: details != null && details.completed 
                ? theme.colors.pink[theme.colorScheme === 'dark' ? 9 : 3]
                : theme.colorScheme === 'dark'
                  ? theme.colors.dark[6]
                  : theme.colors.gray[2],
          outline: outline ? '2px dashed gray' : '',
          
        })}
      >
        {details === null ||
          (details.boxNumber === null && details.project === "") ? (
          <div>
            {details === null && <></>}
            {details !== null &&
              <Group position="center">
                <Stack align="center" spacing='sm' justify="space-between">
                  <div className="not-null">
                    <Text mr={2} ml={2} fw={500}>
                      {description}
                    </Text>
                  </div>
                </Stack>
                <Stack align="center" spacing='sm' justify="space-between">
                  <ThemeIcon size="lg" color="lime.4">
                    <CreateModal />
                  </ThemeIcon>
                </Stack>
              </Group>
            }
          </div>
        ) : (
          <div style={{ margin: "auto" }}>
            <Group position="center">
              <Stack align="center" spacing='sm' justify="space-between">
                <div className="not-null">
                  <Text fw={500} color="dimmed">
                    Box: {details.boxNumber === null ? "000" : details.boxNumber}
                  </Text>
                  <Title fw={500} order={3}>
                    {details.project}
                  </Title>
                </div>
              </Stack>

              <Stack align="center" spacing='sm' justify="space-between">
                {isXlargeScreen ?
                  <Group>
                    <ActionIcon
                      variant="filled"
                      size='sm'
                      color="green"
                    >
                      <IconUpload
                        size={15}
                        onClick={() => handleOpenRequest(index)}
                      />
                    </ActionIcon>

                    <ActionIcon
                      variant="filled"
                      size='sm'
                      color="red"
                      onClick={() => { }}
                    >
                      <IconTrash size={15} />
                    </ActionIcon>
                  </Group>
                  :
                  <><ActionIcon
                    variant="filled"
                    size='sm'
                    color="green"
                  >
                    <IconUpload
                      size={15}
                      onClick={() => handleOpenRequest(index)}
                    />
                  </ActionIcon>

                    <ActionIcon
                      variant="filled"
                      size='sm'
                      color="red"
                      onClick={() => { }}
                    >
                      <IconTrash size={15} />
                    </ActionIcon></>
                }


              </Stack>
            </Group>
          </div>
        )}
      </Box>
    </div>
  );
};

export default memo(ReposCard);
