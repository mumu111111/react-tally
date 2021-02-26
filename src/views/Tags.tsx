import React, { useState } from 'react';
import { useTags } from 'useTags';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function Tags() {
    const { tags, setTags } = useTags();

    return (
        <Layout>
            <ol>
                {tags.map(tag =>
                    <li key={tag.id}>
                        <Link to={'/tags/' + tag.id}>
                            {tag.name}
                        </Link>
                    </li>
                )}
            </ol>
        </Layout>
    )
}

export default Tags;