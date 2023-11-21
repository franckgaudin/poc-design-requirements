import { Button, SelectValue, Select as AriaSelect } from "react-aria-components";
import type { SelectProps as AriaSelectProps, ListBoxItemProps } from "react-aria-components";

import { List } from "../list/List.tsx";

interface SelectProps<T extends object>
    extends Omit<AriaSelectProps<T>, "children"> {
    placeholder?: string;
    items?: Iterable<T>;
    children: React.ReactNode;
}

const SelectRoot = <T extends object>({ placeholder, items, children, ...props }:
SelectProps<T>) => {
    return (
        <AriaSelect placeholder={placeholder} {...props}>
            <Button>
                <SelectValue />
                <span aria-hidden="true">▼</span>
            </Button>
            <List items={items}>
                {children}
            </List>
        </AriaSelect>
    );
};

const SelectItem = (props: ListBoxItemProps) => {
    return <List.Item {...props} />;
};

export const Select = Object.assign(SelectRoot, { Item: SelectItem });
