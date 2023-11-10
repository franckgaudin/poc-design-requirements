import {
    Tabs as AriaTabs,
    TabList,
    Tab,
    TabPanel,
    type TabsProps as AriaTabsProps
} from "react-aria-components";
import cx from "classnames";

import styles from "./Tabs.module.css";

interface ItemProps {
    id: string;
    label: string;
    children: string;
}

interface TabsProps extends AriaTabsProps {
    tabs: ItemProps[];
    type?: "standard" |"card" | "heading";
}

const TabsConf = ({ tabs, type }: TabsProps) => {
    const listClasses = cx(
        styles["hop-tabs__list"],
        {
            [styles[`hop-tabs__list--${type}`]]: type !== "standard"
        }
    );

    const tablist = tabs.map(tab => {
        return <Tab key={tab.id} className={styles["hop-tab"]} id={tab.id}>{tab.label}</Tab>;
    });

    const tabPanel = tabs.map(tab => {
        return <TabPanel className={styles["hop-tabs__panel"]} id={tab.id}>{tab.children}</TabPanel>;
    });

    return (
        <AriaTabs className={styles["hop-tabs"]}>
            <TabList className={listClasses}>
                {tablist}
            </TabList>

            {tabPanel}
        </AriaTabs>
    );
};

export default TabsConf;
