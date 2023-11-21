import { ListBox as AriaListBox, ListBoxItem as AriaListBoxItem, type ListBoxProps, type ListBoxItemProps } from "react-aria-components";


const ListItem = ({ ...props }: ListBoxItemProps) => {
    return (
        <AriaListBoxItem {...props} />
    );
};

const ListRoot = ({ ...props }: ListBoxProps<{ className?: string }>) => {
    return (
        <AriaListBox {...props} />
    );
};

export const List = Object.assign(ListRoot, { Item: ListItem });
