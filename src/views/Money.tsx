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

    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({ ...selected, ...obj });
    };

    return (
        <MyLayout>

            <CategorySection value={selected.category}
                onChange={(category) => onChange({ category })}
            />

            {/* 标签 */}
            <TagsSection value={selected.tags}
                onChange={(tags) => onChange({ tags })}
            />
            {/* 备注 */}
            <NotesSection value={selected.note}
                onChange={(note) => onChange({ note })}
            />
            {/* 计算器 */}
            <NumberPadSection value={selected.amount}
                onChange={(amount) => onChange({ amount })}

            />
        </MyLayout>
    )
}

export default Money;
