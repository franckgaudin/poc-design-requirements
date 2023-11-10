import Button from "./Button.tsx";

export default {
    title: "Components/Button",
    component: Button
};

export const Default = {
    args: {
        children: "Click me!",
    }
};

export const Appearance = {
    args: {
        children: "Click me!",
    },
    // @ts-ignore
    render: (args) => (
        <section style={{ display: "flex", gap: "2rem"}}>
            <Button appearance="primary" {...args} />
            <Button appearance="secondary" {...args} />
        </section>
    )
};

export const Size = {
    args: {
        children: "Click me!",
    },
    // @ts-ignore
    render: (args) => (
        <section style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap"}}>
            <Button size="small" {...args} />
            <Button size="medium" {...args} />
            <Button size="small" appearance="secondary" {...args} />
            <Button size="medium" appearance="secondary" {...args} />
        </section>
    )
};

export const Disabled = {
    args: {
        children: "Click me!",
        disabled: true
    },
    // @ts-ignore
    render: (args) => (
        <section style={{ display: "flex", alignItems: "center", gap: "2rem"}}>
            <Button size="small" {...args} />
            <Button size="medium" {...args} />
        </section>
    )
};
