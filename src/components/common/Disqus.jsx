import * as React from 'react'

import { DiscussionEmbed } from 'disqus-react'
import { useEffect } from 'react';


interface DisqusProps {
    identifier: string;
    title: string;
}

const Disqus: React.FC<DisqusProps> = ({ identifier, title}) => {
    const env = window.location.href.includes('localhost') ? 'dev' : 'prod'
    identifier = window.location.pathname.replace('/','') + "_" + identifier + `_${env}`;
    console.log(identifier)
    const [config, setConfig] = React.useState({
        url: window.location.href,
        identifier : identifier,
        // title,
        language: 'ko',
    });

    useEffect(() => {
        setConfig((config) => ({
            ...config,
            identifier,
        }));

    }, [identifier]);

    return (
        <div key={`disqus-container-${window.location.href}-${identifier}`}>
                <DiscussionEmbed
                    shortname='cbt-sdk-xyz'
                    config={config}
                />
        </div>
    )
}

export default Disqus;
