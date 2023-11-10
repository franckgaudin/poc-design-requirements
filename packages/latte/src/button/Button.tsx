import { Button as AriaButton, type ButtonProps as AriaButtonProps } from "react-aria-components";
import cx from "classnames";

import styles from "./Button.module.css";

export type Size = "small" | "medium";

export type Appearance =
    | "primary"
    | "secondary";

interface ButtonProps extends AriaButtonProps {
    appearance?: Appearance;
    size?: Size;
    disabled?: boolean;
    className?: string;
}

const Button = ({ disabled, className, children, size = "medium", appearance = "primary" } : ButtonProps) => {
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

    return (
        <AriaButton className={classes} >
            {children}
        </AriaButton>
    );
};

export default Button;
