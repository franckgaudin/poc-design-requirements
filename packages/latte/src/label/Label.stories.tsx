import {Label} from "./Label.tsx";
import type { StoryObj } from "@storybook/react";

export default {
    title: "Components/Label",
    component: Label
};

type Story = StoryObj<typeof Label>;

export const Default: Story = {
    render: () => (
        <Label>
            Name:
        </Label>
    )
};

