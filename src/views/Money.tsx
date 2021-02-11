import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

import { CategorySection } from './Money/CategorySection'
import { NotesSection } from './Money/NotesSection'
import { NumberPadSection } from './Money/NumberPadSection'
import { TagsSection } from './Money/TagsSection'

// 继承
const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column
`

function Money() {
    return (
        <MyLayout>
            <CategorySection />
            {/* 标签 */}
            <TagsSection />
            {/* 备注 */}
            <NotesSection />
            {/* 计算器 */}
            <NumberPadSection />
        </MyLayout>
    )
}

export default Money;
