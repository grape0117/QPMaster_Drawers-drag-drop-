import React, { useEffect } from "react";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import PropTypes from "prop-types";

import {
  Card,
  CardSection,
  Text,
  Group,
  ThemeIcon,
  ActionIcon,
  Badge
} from "@mantine/core";
import { IconTrash, IconUpload } from "@tabler/icons-react";

// Components
import { DeleteModal, CreateModal } from "../Modals/Modals";

// Styles
import "./ReposCard.scss";
import { auto } from "@popperjs/core";

// Using "Stateless Functional Components"
const ReposCard = (props) => {
  const { index, description, cols, visibility, details } = props;

  const isXlargeScreen = useMediaQuery("(max-width: 1440px)");

  const handleDeleteModal = (params, index) => {
    DeleteModal(params, index);
  };

  const handleCreateModal = () => {
    console.log("create");
  };

  return (
    <div 
      className="repo"
    >
      <Card
        shadow="md"
        style={{
          padding: 10,
          marginBottom: 15,
          visibility: `${visibility}`,
          backgroundColor:  
            details != null && details.completed == true ? "pink" : "",
        }}
      >
        {details.status == false || (details.boxNumber == null && details.project == "") 
        ? (
          <div>
            <CardSection mb="sm">
              <Text mr={2} ml={2} fw={500}>{description}</Text>
            </CardSection>
            <ThemeIcon size="lg" color="lime.4">
              <CreateModal />
            </ThemeIcon>
          </div>
          ) 
        : (
          <div style={{ margin: auto }}>
            <Group pb="xs" position="center">
              <div>
                <Text fw={500} c="dimmed">
                  Box:{" "}
                  {details.boxNumber == null ? "default" : details.boxNumber}
                </Text>
                <Text fw={500} fz="md">
                  {" "}
                  {details.project}{" "}
                </Text>
              </div>
            </Group>
            <Group position="center">
              <ActionIcon
                variant="filled"
                padding="xs"
                // size="sm"
                size= { isXlargeScreen ?  'sm' : 'lg'}
                color="teal.4"
              >
                <IconUpload size={15} onClick = {() => console.log('open request', index)} />
              </ActionIcon>
              <ActionIcon 
                variant="filled"
                padding="xs"
                // size= "sm"
                size= { isXlargeScreen ?  'sm' : 'lg'}
                color="red.4"
                onClick={() => handleDeleteModal(details, index)}
                >
                <IconTrash
                  size={15}
                />
              </ActionIcon>
            </Group>
          </div>
          )}
      </Card>
    </div>
  );
};

ReposCard.propTypes = {
  cols: PropTypes.number,
  visibility: PropTypes.string,
  description: PropTypes.string,
  details: PropTypes.any,
};

export default ReposCard;
