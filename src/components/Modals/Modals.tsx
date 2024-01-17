// import { Text, ActionIcon } from '@mantine/core';
// import { openConfirmModal, openModal } from '@mantine/modals';
// import { TextInput, Button } from '@mantine/core';
// import { IconPlus } from '@tabler/icons-react';

// const handleDeleteModal = () => [

// ]

// export const DeleteModal = ( params, index ) =>
//     openConfirmModal({
//         title: 'Delete the Project?',
//         size: 'sm',
//         radius: 'md',
//         withCloseButton: false,
//         children: (
//             <Text size="sm">
//             </Text>
//         ),
//         labels: { confirm: 'Delete Project', cancel: "Cancel" },
//         confirmProps: { color: 'red' },
//         onCancel: () => console.log('Cancel'),
//         onConfirm: () => console.log('DeleteConfirmed', params, index),
// });

// const handleCreateTask = () => {

// }

// export const CreateModal = () => {
//   let no_project, no_box;

//   const handleNoProject = (e) => {
//     console.log('NoProject', e.target.value);
//     no_project = e.target.value;
//   }
  
//   const handleNoBox = (e) => {
//     console.log('NoBox', e.target.value);
//     no_box = e.target.value;
//   }

//   return (
//     <ActionIcon variant='filled' padding='xs' size="lg" color="lime.4">
//       <IconPlus
//         onClick={() => {
//           openModal({
//             title: 'Assign New Project!',
//             children: (
//               <>
//                   <TextInput
//                     label="No.Project"
//                     placeholder="4-----"
//                     onChange = { (e) => handleNoProject(e)}
//                   />
//                   <TextInput
//                     label="No.Box"
//                     placeholder=""
//                     onChange = { (e) => handleNoBox(e) }
//                   />
//                 <Button fullWidth onClick={() => console.log('FFFFFFFF', no_box, no_project)} mt="md">
//                   Create
//                 </Button>
//               </>
//             ),
//           });
//         }}
//       >
//         Open content modal
      
//       </IconPlus>
//     </ActionIcon>
//   );
// }

import React from "react";
import { Text, ActionIcon } from '@mantine/core';
import { openConfirmModal, openModal } from '@mantine/modals';
import { TextInput, Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

type Params = {
  // Define the type for the params object
};

type DeleteModalProps = {
  params: Params;
  index: number;
};

export const DeleteModal: React.FC<DeleteModalProps> = ({ params, index }) =>
  openConfirmModal({
    title: 'Delete the Project?',
    size: 'sm',
    radius: 'md',
    withCloseButton: false,
    children: (
      <Text size="sm">
        {/* Add your text content here */}
      </Text>
    ),
    labels: { confirm: 'Delete Project', cancel: "Cancel" },
    confirmProps: { color: 'red' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => console.log('DeleteConfirmed', params, index),
  });

export const CreateModal: React.FC = () => {
  let no_project: string | undefined, no_box: string | undefined;

  const handleChangeProject = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('NoProject', e.target.value);
    no_project = e.target.value;
  }

  const handleChangeBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('NoBox', e.target.value);
    no_box = e.target.value;
  }

  const handleSubmit = (e) => {
    console.log("Project.No and Box.No is submitted!")
  }

  return (
    <ActionIcon variant='filled' size="lg" color="lime.4">
      <IconPlus
        onClick={() => {
          openModal({
            title: 'Assign New Project!',
            children: (
              <>
                <TextInput
                  label="No.Project"
                  placeholder="4-----"
                  onChange={handleChangeProject}
                />
                <TextInput
                  label="No.Box"
                  placeholder=""
                  onChange={handleChangeBox}
                />
                <Button fullWidth onClick={handleSubmit} mt="md">
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
