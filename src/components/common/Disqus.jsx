import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';

function Disqus() {
    const handleNewComment = (comment) => {
        console.log(comment.text);
    };

    return (
        <ReactDisqusComments
            shortname="cbt-sdk-xyz"
            identifier="unique_identifier"
            title="Disqus Comments"
            url="http://cbt.sdk.xyz"
            onNewComment={handleNewComment}
        />
    );
}

export default Disqus;
