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
    console.log(window.location.href)
    const [config, setConfig] = React.useState({
        // url: window.location.href,
        url: "https://cbt.sdk.xyz",
        identifier : identifier,
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
        <>
                <DiscussionEmbed
                    shortname='cbt-sdk-xyz'
                    config={config}
                />
        </>
    )
}

export default Disqus;
