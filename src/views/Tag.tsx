import { FORMERR } from 'dns';
import React from 'react';
import { useTags } from '../useTags'
import { useHistory, useParams } from 'react-router-dom'
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import { Button } from 'components/Button';
import { Input } from 'components/Input'
import { Center } from 'components/Center'
import { Space } from 'components/Space'

import styled from 'styled-components';
const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background:white;
`;

const InputWrapper = styled.div`
  background:white;
  padding: 0 16px;
  margin-top: 8px;
`;


type Params = {
    id: string
}
const Tag: React.FC = (props) => {
    const { findTag, updateTag, deleteTag } = useTags()
    let { id: idString } = useParams<Params>() // 获取router id
    const tag = findTag(parseInt(idString))
    console.log('tag', tag)

    //  回退
    const history = useHistory()
    const onClickBack = () => {
        history.goBack()
    }
    const tagContent = (tag: { id: number; name: string }) => (
        <div>
            <InputWrapper>
                <Input label="标签名" type="text" placeholder="标签名"
                    value={tag.name}
                    onChange={(e) => {
                        updateTag(tag.id, { name: e.target.value });
                    }}
                />
            </InputWrapper>
            <Center>
                <Space />
                <Space />
                <Space />
                <Button onClick={() => {
                    deleteTag(tag.id);
                }}>删除标签</Button>
            </Center>
        </div>
    );
    return (
        <Layout>
            <Topbar>
                <span onClick={() => onClickBack()}>fff</span>
                {/* <Icon name="left" onClick={() => onClickBack()} /> */}
                <span>编辑标签</span>
                <Icon />
            </Topbar>
            {tag ? tagContent(tag) : <Center>tag 不存在</Center>}

        </Layout >
    );
};

export { Tag };