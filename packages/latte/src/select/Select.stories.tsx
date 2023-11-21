import { Select } from "./Select.tsx";

export default {
    title: "Components/Select",
    component: Select
};

export const StandAlone = {
    render: () => {
        return (
            <Select placeholder="Select an option" aria-label="poc of select">
                <Select.Item>option 1</Select.Item>
                <Select.Item>option 2</Select.Item>
                <Select.Item>option 3</Select.Item>
            </Select>
        );
    }
};
