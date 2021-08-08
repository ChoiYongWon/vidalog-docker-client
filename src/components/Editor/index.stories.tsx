import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Editor from './index';

export default {
    title: 'Components/PostEditor',
    component: Editor,
    // decorators: [
    //     (Story) => (
    //         <div style={{ width : '1000px' }}>
    //             <Story/>
    //         </div>
    //     ),
    // ],

} as ComponentMeta<typeof Editor>;

export const Default : React.VFC<{}> = () => {

    return <Editor/>
}


