import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputText  from './index';

export default {
    title: 'Auth/InputText',
    component: InputText,
    decorators: [
        (Story) => (
            <div style={{ width : '200px' }}>
                <Story/>
            </div>
        ),
    ],
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    label: '이름',
    width : "100%",
    autoFocus : true,
    type : "password"
};

