import { Button as AriaButton, type ButtonProps as AriaButtonProps } from "react-aria-components";
import cx from "classnames";

import styles from "./Button.module.css";

export type Size = "small" | "medium";

export type Appearance =
    | "primary"
    | "secondary";

interface ButtonProps<T extends React.ElementType> extends AriaButtonProps {
    appearance?: Appearance;
    size?: Size;
    disabled?: boolean;
    className?: string;
    as?: T;
}

export const Button = <T extends React.ElementType = "button">({ disabled, className, children, size = "medium", appearance = "primary", as, ...rest } : ButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
    const classes = cx(
        "hop-btn",
        styles["hop-btn"],
        {
            [styles[`hop-btn--${appearance}`]]: appearance !== "primary",
            [styles["hop-btn--small"]]: size === "small",
            [styles["hop-btn--disabled"]]: disabled
        },
        className
    );

    const Component = as ?? AriaButton;

    return (
        <Component className={classes} {...rest} >
            {children}
        </Component>
    );
};
