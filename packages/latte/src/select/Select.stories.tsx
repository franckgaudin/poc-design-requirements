import { Select } from "./Select.tsx";
import { List } from "../list/List.tsx";
import { SelectValue } from "react-aria-components";

export default {
    title: "Components/Select",
    component: Select
};

export const StandAlone = {
    render: () => {
        return (
            <Select>
                <Select.Trigger>Please choose an option</Select.Trigger>
                <Select.Option>
                    <Select.Item>option 1</Select.Item>
                    <Select.Item>option 2</Select.Item>
                    <Select.Item>option 3</Select.Item>
                </Select.Option>
            </Select>
        );
    }
};

export const Custom = {
    render: () => {
        return (
            <Select>
                <button ><SelectValue /></button>
                <List>
                    <List.Item>option 1</List.Item>
                    <List.Item>option 2</List.Item>
                    <List.Item>option 3</List.Item>
                </List>
            </Select>
        );
    }
};
