import React from "react";
import { Button as AriaButton, type ButtonProps as AriaButtonProps } from "react-aria-components";
import cx from "classnames";
import { IconContext } from "@hopper-ui/icons";
import { LabelContext } from "../label/Label";

import styles from "./Button.module.css";

export type Size = "small" | "medium";

export type Variant =
    | "primary"
    | "secondary";

interface ButtonProps<T extends React.ElementType = "button"> extends AriaButtonProps {
    variant?: Variant;
    size?: Size;
    disabled?: boolean;
    className?: string;
    as?: T;
}

export const Button = <T extends React.ElementType = "button">(
    { disabled, className, children, size = "medium", variant = "primary", as, ...rest }: ButtonProps<T> & Omit<React.ComponentPropsWithRef<T>, keyof ButtonProps<T>>
) => {
    const classes = cx(
        "hop-btn",
        styles["hop-btn"],
        {
            [styles[`hop-btn--${variant}`]]: variant !== "primary",
            [styles["hop-btn--small"]]: size === "small",
            [styles["hop-btn--link"]]: as === "a",
            [styles["hop-btn--disabled"]]: disabled
        },
        className
    );

    const Component = as ?? AriaButton;

    return (
        <LabelContext.Provider value={{
            className: "hop-btn__label",
            slots: {
                "_": {
                    className: "hop-btn__label--default"
                },
                "end": {
                    className: "hop-btn__label--end"
                }
            },
        }}>
            <IconContext.Provider value={
                {
                    className: "hop-btn__icon",
                    size: "sm",
                    // slots: {
                    //     defaultSlot: {
                    //         className: "hop-btn__icon--default",
                    //         size: "sm"
                    //     },
                    //     "icon-end": {
                    //         className: "hop-btn__icon--end",
                    //         size: "lg"
                    //     }
                    // }
                }
            }
            >
                <Component className={classes} {...rest} >
                    {children}
                </Component>
            </IconContext.Provider>
        </LabelContext.Provider>
    );
};

Button.displayName = "Button";
