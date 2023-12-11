import { Card, CardFooter } from "./Card.tsx";

export default {
    title: "Components/Card",
    component: Card
};

export const StandAlone = {
    render: () => {
        return (
            <Card>
                Card comme header
                <CardFooter>Footer comme here</CardFooter>
            </Card>
        );
    }
};
