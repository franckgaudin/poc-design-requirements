import styles from "./avatar.module.css";
import cx from "classnames";

export type Size = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';

interface AvatarProps {
    size?: Size;
    className?: string;
    src: string;
    alt?: string;
}

const Avatar = ({ src, alt, size = "medium", className}: AvatarProps) => {

    const classes = cx(
        styles['hop-avatar'],
        {
            [styles[`hop-avatar--${size}`]]: size !== 'medium',
        },
        className
    );

    return (
        <span className={classes}>
            <img className={styles["hop-avatar__img"]} src={src} alt={alt}/>
        </span>
    );
}

export default Avatar
