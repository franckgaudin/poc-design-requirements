import { Button, SelectValue, Select as AriaSelect } from "react-aria-components";

import { List } from "../list/List.tsx";

const SelectTrigger = ({ children }: React.PropsWithChildren) => {
    return (
        <Button>
            <SelectValue>{children}</SelectValue>
            <span aria-hidden="true">▼</span>
        </Button>
    );
};

const SelectOption = ({ ...props }) => {
    return <List {...props} />;
};

const SelectItem = ({ ...props }) => {
    return <List.Item {...props} />;
};

export const SelectRoot = ({ ...props }) => {
    return (
        <AriaSelect {...props} />
    );
};

export const Select = Object.assign(SelectRoot, { Trigger: SelectTrigger, Option: SelectOption, Item: SelectItem });
