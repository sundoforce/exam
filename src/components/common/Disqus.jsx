import * as React from 'react'

import { DiscussionEmbed } from 'disqus-react'


interface DisqusProps {
    identifier: string;
    title: string;
}

const Disqus: React.FC<DisqusProps> = ({ identifier, title }) => {


    return (
        <>
            <article className='prose prose-zinc mx-auto min-h-screen max-w-4xl pt-24 dark:prose-invert lg:prose-lg'>
                <DiscussionEmbed
                    shortname='cbt-sdk-xyz'
                    config={{
                        url: 'https://cbt.sdk.xyz',
                        identifier,
                        title,
                        language: 'ko',
                    }}
                />
            </article>
        </>
    )
}

export default Disqus;
