import * as React from 'react'

import { DiscussionEmbed } from 'disqus-react'
import { useEffect } from 'react';


interface DisqusProps {
    identifier: string;
    title: string;
}

const Disqus: React.FC<DisqusProps> = ({ identifier, title }) => {
    identifier = window.location.pathname + "_" + identifier + "_disqus";
    identifier = identifier.split('-').join('_').trim().replace('/','');
    console.log(identifier)
    const [config, setConfig] = React.useState({
        url: "https://cbt.sdk.xyz/",
        // url: window.location.href,
        identifier : identifier,
        // identifier : window.location.href + "_" + identifier.split('-').join('_'),
        title,
        language: 'ko',
    });

    useEffect(() => {
        setConfig((config) => ({
            ...config,
            identifier,
        }));
    }, [identifier]);

    return (
        <div key={`disqus-container-${identifier}`}>
            <article className='prose prose-zinc mx-auto min-h-screen max-w-4xl pt-24 dark:prose-invert lg:prose-lg'>
                <DiscussionEmbed
                    shortname='cbt-sdk-xyz'
                    config={config}
                />
            </article>
        </div>
    )
}

export default Disqus;
