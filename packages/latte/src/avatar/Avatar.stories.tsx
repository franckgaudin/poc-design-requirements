import {Avatar} from "./Avatar.tsx";
import type { StoryObj } from "@storybook/react";

export default {
    title: "Components/Avatar",
    component: Avatar
};

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    render: () => (
        <Avatar.Root>
            <Avatar.Initials>AB</Avatar.Initials>
        </Avatar.Root>
    )
};

export const Image: Story = {
    render: () => (
        <Avatar.Root>
            <Avatar.Image src="https://i.pravatar.cc/150?img=70" />
        </Avatar.Root>
    )
};

export const Size: Story = {
    render: function Render() {
        return (
            <section style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Avatar.Root size="xSmall">
                    <Avatar.Initials>AB</Avatar.Initials>
                </Avatar.Root>
                <Avatar.Root size="small" >
                    <Avatar.Initials>AB</Avatar.Initials>
                </Avatar.Root>
                <Avatar.Root size="medium">
                    <Avatar.Initials>AB</Avatar.Initials>
                </Avatar.Root>
                <Avatar.Root size="large">
                    <Avatar.Initials>AB</Avatar.Initials>
                </Avatar.Root>
                <Avatar.Root size="xLarge" >
                    <Avatar.Initials>AB</Avatar.Initials>
                </Avatar.Root>
            </section>
        );
    }
};

export const Colors: Story = {
    render: function Render() {
        return (
            <section style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Avatar.Root>
                    <Avatar.Initials>AB</Avatar.Initials>
                </Avatar.Root>
                <Avatar.Root color="quetzal">
                    <Avatar.Initials>AB</Avatar.Initials>
                </Avatar.Root>
                <Avatar.Root color="koi">
                    <Avatar.Initials>AB</Avatar.Initials>
                </Avatar.Root>
                <Avatar.Root color="moss">
                    <Avatar.Initials>AB</Avatar.Initials>
                </Avatar.Root>
                <Avatar.Root color="coastal" >
                    <Avatar.Initials>AB</Avatar.Initials>
                </Avatar.Root>
                <Avatar.Root color="sunken" >
                    <Avatar.Initials>AB</Avatar.Initials>
                </Avatar.Root>
                <Avatar.Root color="toad" >
                    <Avatar.Initials>AB</Avatar.Initials>
                </Avatar.Root>
                <Avatar.Root color="amanita" >
                    <Avatar.Initials>AB</Avatar.Initials>
                </Avatar.Root>
            </section>
        );
    }
};
