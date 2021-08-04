import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './index';

export default {
    title: 'Header',
    component: Header,
} as ComponentMeta<typeof Header>;

export const Default : React.VFC<{}> = () => {

    return <Header
        menu={["로그아웃"]}
        menuOnClicks={[()=>console.log("logout")]}
        menuShow={true}
        onClickUserIcon={()=>{}}
        onCloseUserIcon={()=>{}}
    />
}


