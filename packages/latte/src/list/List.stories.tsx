import { List } from "./List.tsx";

export default {
    title: "Components/ListBox",
    component: List
};

export const StandAlone = {
    render: () => {
        return (
            <List>
                <List.Item>option 1</List.Item>
                <List.Item>option 2</List.Item>
                <List.Item>option 3</List.Item>
            </List>
        );
    }
};
