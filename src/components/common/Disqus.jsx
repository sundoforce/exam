import * as React from 'react'
import PropTypes from 'prop-types'

import { DiscussionEmbed } from 'disqus-react'
import { useEffect } from 'react';


interface DisqusProps {
    identifier: string;
    title: string;
}

// const Disqus: React.FC<DisqusProps> = ({ identifier, title}) => {
const Disqus = ({identifier, title}) => {
    const env = window.location.href.includes('localhost') ? 'dev' : 'prod'
    identifier = window.location.pathname.replace('/','') + "_" + identifier + `_${env}`;
    console.log(identifier)
    console.log(window.location.href)
    const [config, setConfig] = React.useState({
        // url: window.location.href,
        url: "https://cbt.sdk.xyz",
        identifier : identifier,
        title: identifier + title,
        language: 'ko',
    });

    // useEffect(() => {
    //     setConfig((config) => ({
    //         ...config,
    //         identifier,
    //     }));
    //
    // }, [identifier]);

    return (
        <div key={identifier}>
                <DiscussionEmbed
                    shortname='cbt-sdk-xyz'
                    config={config}
                />
        </div>
    )
}

Disqus.propTypes = {
    article: PropTypes.object,
    url: PropTypes.string,
}
export default Disqus;
