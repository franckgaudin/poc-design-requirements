import Avatar from "./Avatar.tsx";
import { StoryObj } from '@storybook/react';

export default {
    title: "Components/Avatar",
    component: Avatar
};

type Story = StoryObj<typeof Avatar>;

export const Standard = {
    render: function Render() {
        return (
            <>
                <Avatar src={"https://i.pravatar.cc/150?img=70"} size="xSmall"  />
                <Avatar src={"https://i.pravatar.cc/150?img=70"} size="small"  />
                <Avatar src={"https://i.pravatar.cc/150?img=70"} size="medium"  />
                <Avatar src={"https://i.pravatar.cc/150?img=70"} size="large"  />
                <Avatar src={"https://i.pravatar.cc/150?img=70"} size="xLarge"  />
            </>
        );
    }
};
