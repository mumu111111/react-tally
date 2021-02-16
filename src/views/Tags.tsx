import React, { useState } from 'react';
import { useTags } from 'useTags';

import Layout from '../components/Layout';

function Tags() {
    const { tags, setTags } = useTags();

    return (
        <Layout>
            <ol>
                {tags.map(tag =>
                    <li key={tag}>{tag}</li>
                )}
            </ol>
        </Layout>
    )
}

export default Tags;