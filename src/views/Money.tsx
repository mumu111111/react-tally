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
            <CategorySection>
                <ul>
                    <li className="selected">支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>

            {/* 标签 */}

            <TagsSection>
                <ol>
                    <li>衣</li>
                    <li>食</li>
                    <li>行</li>
                    <li>住</li>
                </ol>
                <button>新增标签</button>
            </TagsSection>


            {/* 备注 */}
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="添加备注" />
                </label>
            </NotesSection>
            {/* 切换项 */}

            {/* 计算器 */}
            <NumberPadSection>
                <div className="output">100</div>
                <div className="pad">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="ok">OK</button>
                    <button className="zero">0</button>
                    <button className="dot">.</button>
                </div>
            </NumberPadSection>
        </MyLayout>
    )
}

export default Money;
