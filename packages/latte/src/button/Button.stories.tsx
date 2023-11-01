import Button from "./Button.tsx";

export default {
    title: "Components/Button",
    component: Button
};

export const Primary = {
    args: {
        children: "Click me!",
    }
};

export const Disabled = {
    args: {
        children: "Click me!",
        disabled: true
    }
};
