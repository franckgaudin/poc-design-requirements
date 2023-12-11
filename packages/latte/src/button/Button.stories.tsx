import { Button } from "./Button.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { AddIcon } from "@hopper-ui/icons";
import { StyledSystemProvider } from "@hopper-ui/styled-system";
import { Label } from "../label/Label.tsx";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "Click me!"
    }
};

export const Appearance: Story = {
    args: {
        children: "Click me!"
    },
    render: args => (
        <section style={{ display: "flex", gap: "2rem" }}>
            <Button variant="primary" {...args} />
            <Button variant="secondary" {...args} />
        </section>
    )
};

export const Size: Story = {
    args: {
        children: "Click me!"
    },
    render: args => (
        <section style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
            <Button size="small" {...args} />
            <Button size="medium" {...args} />
            <Button size="small" variant="secondary" {...args} />
            <Button size="medium" variant="secondary" {...args} />
        </section>
    )
};

export const Disabled: Story = {
    args: {
        children: "Click me!",
        disabled: true
    },
    render: args => (
        <section style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <Button size="small" {...args} />
            <Button size="medium" {...args} />
        </section>
    )
};


export const Link: Story = {
    args: {
        children: "Click me!"
    },
    render: args => <Button as="a" href="google.ca" variant="primary" {...args} />
};

export const withIcon: {
    args: { size: string };
    decorators: ((Story: Story) => JSX.Element)[];
    render: (args) => JSX.Element
} = {
    decorators: [
        // @ts-ignore
        (Story: Story) => (
            <StyledSystemProvider withBodyStyle colorScheme="light">
                <Story />
            </StyledSystemProvider>
        )
    ],
    args: {
        size: "small"
    },
    render: args => (
        <Button {...args}>
            <Label>Click me</Label>
            <AddIcon />
        </Button>)
};
