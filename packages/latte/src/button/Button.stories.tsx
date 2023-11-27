import { Button } from "./Button.tsx";
import type { Meta, StoryObj } from "@storybook/react";

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
            <Button appearance="primary" {...args} />
            <Button appearance="secondary" {...args} />
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
            <Button size="small" appearance="secondary" {...args} />
            <Button size="medium" appearance="secondary" {...args} />
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
    render: args => <Button as="a" href="google.ca" appearance="primary">Click me!</Button>
};
