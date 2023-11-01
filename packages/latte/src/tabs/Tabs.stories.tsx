import Tabs from "./Tabs.tsx";

export default {
    title: "Components/Tabs",
    component: Tabs
};

export const StandAlone = {
    args: {
        tabs: [
            {
                id: "hop-tab-1",
                label: "Founding of Rome",
                children: "Arma virumque cano, Troiae qui primus ab oris."
            },
            {
                id: "hop-tab-2",
                label: "Monarchy and Republic",
                children: "Senatus Populusque Romanus."
            },
            {
                id: "hop-tab-3",
                label: "Empire",
                children: "Alea jacta est."
            }
        ],
    }
};