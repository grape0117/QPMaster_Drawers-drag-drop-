// const Dashboard = () => {
//     return(
//         <div>
//             <h1>Here is Dashboard</h1>
//         </div>
//     )
// }

// export default Dashboard;
import { ActionIcon, Box, Button, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core';

function Dashboard() {
    return (
        
        <Group>
            <Stack>
                <Button>Hello1</Button>
                <Button>Hello2</Button>
            </Stack>
            <Stack>
                <Button>Hello1</Button>
                <Button>Hello2</Button>
                <Text>Here is Dashboard</Text>
            </Stack>
        </Group>
    )
}

export default Dashboard;

