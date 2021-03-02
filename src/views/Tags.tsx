import React, { useState } from 'react';
import { useTags } from 'hooks/useTags';
import { Link } from 'react-router-dom';
import Layout from 'components/Layout';
import styled from 'styled-components';
import Icon from 'components/Icon';
import { Center } from 'components/Center'
import { Space } from 'components/Space'

const TagList = styled.ol`
  font-size: 16px; 
  background:white;
  > li{
    //#e5e5e7
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    padding: 12px 16px 12px 0;
    margin-left: 16px;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Button = styled.button`
  font-size: 18px; border: none; padding: 8px 12px;
  background: #f60; border-radius: 4px;
  color: white;
`;

function Tags() {
    const { tags, addTag } = useTags();

    return (
        <Layout>
            <TagList>
                {tags.map(tag =>
                    <li key={tag.id}>
                        <Link to={'/tags/' + tag.id}>
                            {tag.name}
                        </Link>
                    </li>
                )}
            </TagList>
            <Center>
                <Space />
                <Space />
                <Space />
                <Button onClick={addTag}>新增标签</Button>
            </Center>
        </Layout>
    )
}

export default Tags;