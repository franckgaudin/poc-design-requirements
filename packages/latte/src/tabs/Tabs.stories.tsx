import {Tabs} from "./Tabs.tsx";

export default {
    title: "Components/Tabs custom",
    component: Tabs
};

export const StandAlone = {
    // test
    render: () => {
        return (
            <Tabs>
                <Tabs.TabList>
                    <Tabs.Tab id="founding">Founding of Rome</Tabs.Tab>
                    <Tabs.Tab id="monarchy">Monarchy and Republic</Tabs.Tab>
                    <Tabs.Tab id="Empire"> Empire</Tabs.Tab>
                </Tabs.TabList>
                <Tabs.TabPanel id="founding">Arma virumque cano, Troiae qui primus ab oris.</Tabs.TabPanel>
                <Tabs.TabPanel id="monarchy">Senatus Populusque Romanus.</Tabs.TabPanel>
                <Tabs.TabPanel id="Empire">Alea jacta est.</Tabs.TabPanel>
            </Tabs>
        );
    }
};
