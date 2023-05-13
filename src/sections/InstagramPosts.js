import React from 'react';
import { TopPosts } from '../ui-components';

const InstagramPosts = (props) => {
    const embedCode = '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PLc3VQSe45A9f7LNzF3rfHimIHdBVPrrxv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

    return (
        <TopPosts {...props}>
            <div
                className="instagram-embed"
                dangerouslySetInnerHTML={{ __html: embedCode }}
            ></div>
        </TopPosts>
    );
};

export default InstagramPosts;