import React from "react";
import { useMediaQuery } from "@mantine/hooks";

import {
  Card,
  CardSection,
  Text,
  Group,
  ThemeIcon,
  ActionIcon,
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
  const isXlargeScreen = useMediaQuery("(max-width: 1440px)");

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
      <Card
        shadow="md"
        style={{
          padding: 10,
          marginBottom: 15,
          visibility: `${visibility}`,
          backgroundColor:
            details != null && details.completed === true ? "pink" : "",
          outline: outline ? '2px dashed gray' : '',
        }}
      >
        {details === null ||
        (details.boxNumber === null && details.project === "") ? (
          <div>
            {details === null && <></>}
            {details !== null && 
              <>
                <CardSection mb="sm">
                  <div className="not-null">
                    <Text mr={2} ml={2} fw={450}>
                      {description}
                    </Text>
                  </div>
                </CardSection>
                <ThemeIcon size="lg" color="lime.4">
                  <CreateModal />
                </ThemeIcon>
              </>
            }
          </div>
        ) : (
          <div style={{ margin: "auto" }}>
            <Group pb="xs" position="center">
              <div className="not-null">
                <Text fw={500} color="dimmed">
                  Box:{" "}
                  {details.boxNumber === null ? "000" : details.boxNumber}
                </Text>
                <Text fw={500} size="md">
                  {" "}
                  {details.project}{" "}
                </Text>
              </div>
            </Group>
            <Group position="center">
              <ActionIcon
                variant="filled"
                size={isXlargeScreen ? "sm" : "md"}
                color="teal.4"
              >
                <IconUpload
                  size={15}
                  onClick={() => handleOpenRequest(index)}
                />
              </ActionIcon>
              <ActionIcon
                variant="filled"
                size={isXlargeScreen ? "sm" : "md"}
                color="red.4"
                onClick={() => {}}
              >
                <IconTrash size={15} />
              </ActionIcon>
            </Group>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ReposCard;
