import {
    Tabs as AriaTabs,
    TabList as AriaTabList,
    Tab as AriaTab,
    TabPanel as AriaTabPanel,
    type TabListProps as AriaTabListProps,
    type TabPanelProps as AriaTabPanelProps,
    type TabProps as AriaTabProps
} from "react-aria-components";
import cx from "classnames";

import styles from "./Tabs.module.css";

type TabListProps = AriaTabListProps<React.PropsWithChildren>;
type TabProps = AriaTabProps;
type TabPanelProps = AriaTabPanelProps;


const TabPanel = ({ ...props }: TabPanelProps) => {
    return <AriaTabPanel className={cx(styles["hop-tabs__panel"])} {...props} />;
};

const Tab = ({ ...props }: TabProps) => {
    return <AriaTab className={cx(styles["hop-tab"])} {...props} />;
};

const TabList = ({ ...props }: TabListProps) => {
    return <AriaTabList className={cx(styles["hop-tabs__list"])} {...props} />;
};

const TabsRoot = ({ type, ...props }: { type?: "standard" | "card" | "heading"; children: React.ReactNode }) => {
    const classes = cx(
        styles["hop-tabs"],
        {
            [styles[`hop-tabs--${type}`]]: type !== "standard"
        }
    );

    return <AriaTabs className={classes} {...props} />;
};

export const Tabs = Object.assign(TabsRoot, { Root: TabsRoot, TabList, Tab, TabPanel });

