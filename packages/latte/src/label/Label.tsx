import { createContext } from "react";
import { Label as AriaLabel, LabelProps as AriaLabelProps, useContextProps, type ContextValue } from "react-aria-components";

interface LabelProps extends AriaLabelProps {
    className?: string;
}

export const LabelContext = createContext<ContextValue<LabelProps, HTMLLabelElement>>({});

export const Label = (props: LabelProps) => {

    const propsWithDefaultsSlot ={...props, slot: "_"};
    [props] = useContextProps(propsWithDefaultsSlot, null, LabelContext);

    return (
        <AriaLabel {...props} />
    );
}
