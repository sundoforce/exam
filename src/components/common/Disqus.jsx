import * as React from 'react'
import { useEffect, useState } from 'react'
import { DiscussionEmbed } from 'disqus-react'

interface DisqusProps {
    identifier: string;
    title: string;
}

const Disqus = ({identifier, title}: DisqusProps) => {
    const [config, setConfig] = useState({
        url: window.location.href,
        identifier: `${identifier}_${process.env.NODE_ENV}`,
        title: title,
        language: 'ko',
    });

    useEffect(() => {
        setConfig((prevConfig) => ({
            ...prevConfig,
            identifier: `${identifier}_${process.env.NODE_ENV}`,
            title: title,
        }));
    }, [identifier, title]);

    return (
        <div>
            <DiscussionEmbed
                shortname='cbt-sdk-xyz'
                config={config}
            />
        </div>
    )
}

export default Disqus;
