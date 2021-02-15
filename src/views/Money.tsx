import React, { useState } from 'react';
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
type Category = '+' | '-'








function Money() {
    //数据源
    const [selected, setSelected] = useState({


        tags: [] as string[],
        note: '',
        category: '-' as Category,
        amount: 0

    })


    return (
        <MyLayout>

            {selected.tags.join(',')}
            {selected.note}
            {selected.category}
            {selected.amount}


            <CategorySection />
            {/* 标签 */}
            <TagsSection value={selected.tags}
                onChange={(tags) => setSelected({ ...selected, tags: tags })}
            />
            {/* 备注 */}
            <NotesSection value={selected.note}
                onChange={(note) => {
                    setSelected({
                        ...selected,
                        note: note
                    })
                }}
            />
            {/* 计算器 */}
            <NumberPadSection
                value={selected.amount}
                onChange={(amount) => {
                    setSelected({
                        ...selected,
                        amount: amount
                    })
                }}
            />
        </MyLayout>
    )
}

export default Money;
