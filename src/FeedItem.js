import React from 'react';

export default ({feed}) => (
        <div>
            {feed.header}
            <p>{feed.content}</p>
        </div>
    );