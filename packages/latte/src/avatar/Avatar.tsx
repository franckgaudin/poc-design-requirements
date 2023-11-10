import React from "react";
import cx from "classnames";

import styles from "./Avatar.module.css";

export type Size = "xSmall" | "small" | "medium" | "large" | "xLarge";
export type Color = "sapphire" | "quetzal" | "koi" | "moss" | "coastal" | "sunken" | "toad" | "amanita";

interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: Size;
    color?: Color;
    className?: string;
}

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    src: string;
    alt?: string;
}

const AvatarImage = ({ className, ...props }: AvatarImageProps): React.ReactNode => {
    const classes = cx(styles["hop-avatar__img"], className);

    return (
        <img className={classes} alt={props.alt} {...props} />
    );
};

const AvatarInitials = ({ children } : React.PropsWithChildren): React.ReactNode => {
    return <>{children}</>;
};

const AvatarRoot = ({ className, size = "medium", color = "sapphire", ...props }: AvatarProps) => {
    const classes = cx(
        styles["hop-avatar"],
        {
            [styles[`hop-avatar--${size}`]]: size !== "medium",
            [styles[`hop-avatar--${color}`]]: color !== "sapphire"
        },
        className
    );

    return (
        <span className={classes} {...props} />
    );
};

const Avatar = Object.assign(AvatarRoot, { Root: AvatarRoot, Image: AvatarImage, Initials: AvatarInitials });

export default Avatar;
