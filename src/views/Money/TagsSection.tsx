
import styled from 'styled-components';
import React, { useState } from 'react';
import { useTags } from 'hooks/useTags';
import { createId } from 'lib/createdId'



const Wrapper = styled.section`
background: #FFFFFF; padding: 12px 16px;
flex-grow: 1; display: flex; flex-direction: column;
justify-content: flex-end; align-items: flex-start;
> ol { margin: 0 -12px;
    > li{
    background: #D9D9D9; border-radius: 18px;
    display:inline-block; padding: 3px 18px; 
    font-size: 14px; margin: 8px 12px;
    &.selected {
        background: #f60;
    }
    }
}
> button{
    background:none; border: none; padding: 2px 4px;
    border-bottom: 1px solid #333; color: #666;
    margin-top: 8px;
}

`


type Props = {
    value: number[];
    onChange: (selected: number[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
    const { tags, setTags, addTag } = useTags();
    // const [selectedTags, setSelectedTags] = useState<string[]>([]); //可被选的tags 不包含选中项
    const selectedTagIds = props.value;

    const onToggleTag = (tagId: number) => {
        const index = selectedTagIds.indexOf(tagId);  //下标
        if (index > 0) { //不等于-1  就是没有不选中的情况 
            props.onChange(selectedTagIds.filter(t => t !== tagId))
        } else {
            props.onChange([...selectedTagIds, tagId])
        }

    }

    const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';



    return (
        <Wrapper>
            <ol>
                {/* <li>衣</li>
                    <li>食</li>
                    <li>行</li>
                    <li>住</li> */}


                {tags.map(tag =>
                    <li key={tag.id} onClick={
                        () => { onToggleTag(tag.id); }
                    } className={getClass(tag.id)}
                    >{tag.name}</li>
                )}
            </ol>
            <button onClick={() => addTag()}>新增标签1</button>

        </Wrapper>
    )





}

export { TagsSection }