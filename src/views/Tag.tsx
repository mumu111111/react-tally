import { FORMERR } from 'dns';
import React from 'react';
import { useTags } from '../useTags'
import { useParams } from 'react-router-dom'
type Params = {
    id: string
}
const Tag: React.FC = (props) => {
    const { findTag } = useTags()
    let { id } = useParams<Params>() // 获取router id
    const tag = findTag(parseInt(id))
    console.log('tag', id)
    return (
        <div>{tag.name}</div>
    );
};

export { Tag };