import {
    Tabs as AriaTabs,
    TabList,
    Tab,
    TabPanel,
    TabsProps as AriaTabsProps,
} from 'react-aria-components';

import styles from "./tabs.module.css";

interface ItemProps {
    id: string;
    label: string;
    children: string;
}

interface TabsProps extends AriaTabsProps {
    tabs: ItemProps[];
}

const Tabs = ({ tabs }: TabsProps ) => {

    const tablist = tabs.map((tab) => {
           return <Tab className={styles["hop-tab"]} id={tab.id}>{tab.label}</Tab>
    });

    const tabPanel = tabs.map((tab) => {
        return <TabPanel className={styles["hop-tabs__panel"]} id={tab.id}>{tab.children}</TabPanel>
    });

    return (
        <AriaTabs className={styles["hop-tabs"]}>
            <TabList className={styles["hop-tabs__list"]}>
                {tablist}
            </TabList>

            {tabPanel}
        </AriaTabs>
    );
}

export default Tabs
