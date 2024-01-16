import { Text, ActionIcon } from '@mantine/core';
import { openConfirmModal, openModal } from '@mantine/modals';
import { TextInput, Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

const handleDeleteModal = () => [

]

export const DeleteModal = ( params, index ) =>
    openConfirmModal({
        title: 'Delete the Project?',
        size: 'sm',
        radius: 'md',
        withCloseButton: false,
        children: (
            <Text size="sm">
            </Text>
        ),
        labels: { confirm: 'Delete Project', cancel: "Cancel" },
        confirmProps: { color: 'red' },
        onCancel: () => console.log('Cancel'),
        onConfirm: () => console.log('DeleteConfirmed', params, index),
});

const handleCreateTask = () => {

}

export const CreateModal = () => {
  let no_project, no_box;

  const handleNoProject = (e) => {
    console.log('NoProject', e.target.value);
    no_project = e.target.value;
  }
  
  const handleNoBox = (e) => {
    console.log('NoBox', e.target.value);
    no_box = e.target.value;
  }

  return (
    <ActionIcon variant='filled' padding='xs' size="lg" color="lime.4">
      <IconPlus
        onClick={() => {
          openModal({
            title: 'Assign New Project!',
            children: (
              <>
                  <TextInput
                    label="No.Project"
                    placeholder="4-----"
                    onChange = { (e) => handleNoProject(e)}
                  />
                  <TextInput
                    label="No.Box"
                    placeholder=""
                    onChange = { (e) => handleNoBox(e) }
                  />
                <Button fullWidth onClick={() => console.log('FFFFFFFF', no_box, no_project)} mt="md">
                  Create
                </Button>
              </>
            ),
          });
        }}
      >
        Open content modal
      
      </IconPlus>
    </ActionIcon>
  );
}