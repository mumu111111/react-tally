import { FORMERR } from 'dns';
import React from 'react';
import { useTags } from '../useTags'
import { useParams } from 'react-router-dom'
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import { Button } from 'components/Button';
import { Input } from 'components/Input'
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
    const { findTag } = useTags()
    let { id } = useParams<Params>() // 获取router id
    const tag = findTag(parseInt(id))
    console.log('tag', id)
    return (
        <Layout>
            <Topbar>
                <Icon name="left" />
                <span>编辑标签</span>
                <Icon />
            </Topbar>
            <InputWrapper>
                <Input label="标签名" type="text" placeholder="标签名" value={tag.name}></Input>
            </InputWrapper>
            <div>
                <Button>删除标签</Button>
            </div>
        </Layout>
    );
};

export { Tag };