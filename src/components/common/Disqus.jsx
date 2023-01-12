import * as React from 'react'

import { DiscussionEmbed } from 'disqus-react'


const Disqus = () => {


    return (
        <>
            <article className='prose prose-zinc mx-auto min-h-screen max-w-4xl pt-24 dark:prose-invert lg:prose-lg'>
                <DiscussionEmbed
                    shortname='cbt-sdk-xyz'
                    config={{
                        url: 'https://cbt.sdk.xyz',
                        identifier: `data.mdxPage.slug`,
                        title: `data.mdxPage.title`,
                        language: 'ko',
                    }}
                />
            </article>
        </>
    )
}

export default Disqus;
