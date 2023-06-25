import { useEffect } from 'react';

function resizeIframe(iframeString, newWidth) {
    const widthRegex = /width="(\d+)"/;
    const heightRegex = /height="(\d+)"/;

    const widthMatch = iframeString.match(widthRegex);
    const heightMatch = iframeString.match(heightRegex);

    if (!widthMatch || !heightMatch) {
        return iframeString;
    }

    const originalWidth = parseInt(widthMatch[1]);
    const originalHeight = parseInt(heightMatch[1]);

    const aspectRatio = originalHeight / originalWidth;
    const newHeight = Math.round(newWidth * aspectRatio);

    let resizedIframeString = iframeString

    if (originalWidth > newWidth) {
        resizedIframeString = iframeString.replace(
            widthRegex,
            `width="100%"`
        )
    }

    if (originalWidth < newWidth) {
        resizedIframeString = resizedIframeString.replace(
            heightRegex,
            `height="${newHeight}"`
        );
    }

    return resizedIframeString;
}

function getCreatorPostsOverride(hooks, creatorDetails) {
    const topPostsOverrides = (embedHtml, post1, post2, post3) => {
        return (
            {
                Post1: {
                    dangerouslySetInnerHTML: { __html: embedHtml.replace("{post_url}", post1) }
                },
                Post2: {
                    dangerouslySetInnerHTML: { __html: embedHtml.replace("{post_url}", post2) }
                },
                Post3: {
                    dangerouslySetInnerHTML: { __html: embedHtml.replace("{post_url}", post3) }
                },
            }
        )
    }

    const topYoutubePostsOverrides = () => {
        let post1 = "https://www.youtube.com/embed/8j_oqFcVN-s"
        let post2 = "https://www.youtube.com/embed/7Wp1qRFTX-E"
        let post3 = "https://www.youtube.com/embed/H3trAKt3Tzg"
        let embedHtml = '<iframe width="100%" height="315" src="{post_url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        return topPostsOverrides(embedHtml, post1, post2, post3)
    }

    const topLinkedinPostsOverrides = () => {
        let post1 = "https://www.linkedin.com/embed/feed/update/urn:li:share:7036032180166283264"
        let post2 = "https://www.linkedin.com/embed/feed/update/urn:li:share:7035843741663858688"
        let post3 = "https://www.linkedin.com/embed/feed/update/urn:li:share:7036931887877013504"
        let embedHtml = '<iframe width="100%" height="540" src="{post_url}" frameborder="0" allowfullscreen="false" title="Embedded post"></iframe>'
        return topPostsOverrides(embedHtml, post1, post2, post3)
    }

    const topTwitterPostsOverrides = () => {
        let post1 = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Did you know you can secure upto 10 Million worth of Scholarship for studying abroad?<br><br>The applications have opened RIGHT NOW, for Inlak Shivdasani Foundation Scholarship 2023. <br><br>Find more information and the link to the application form, click here: <a href="https://t.co/3RG1aGsfBC">https://t.co/3RG1aGsfBC</a></p>&mdash; Mayuri Rajput (@mayuri_1606) <a href="https://twitter.com/mayuri_1606/status/1625704252453814272?ref_src=twsrc%5Etfw">February 15, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
        let post2 = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Social Media careers are going to be one of the most trending careers!<br><br>Check out these 8 jobs that you can apply today! <a href="https://t.co/D2kEY1VMJ6">https://t.co/D2kEY1VMJ6</a></p>&mdash; Mayuri Rajput (@mayuri_1606) <a href="https://twitter.com/mayuri_1606/status/1616037346528595969?ref_src=twsrc%5Etfw">January 19, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
        let post3 = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A week of binge shoots! <br>YouTube, here I come. Again ✨ <a href="https://t.co/qZNp46zMPo">pic.twitter.com/qZNp46zMPo</a></p>&mdash; Mayuri Rajput (@mayuri_1606) <a href="https://twitter.com/mayuri_1606/status/1611638029621563392?ref_src=twsrc%5Etfw">January 7, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
        return (
            {
                Post1: {
                    dangerouslySetInnerHTML: { __html: post1 }
                },
                Post2: {
                    dangerouslySetInnerHTML: { __html: post2 }
                },
                Post3: {
                    dangerouslySetInnerHTML: { __html: post3 }
                },
            }
        )
    }

    const topFacebookPostsOverrides = () => {
        let post1 = '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjaypatelwanted%2Fposts%2Fpfbid0Cq6tifMys3JuzaJ2dDE2bZ7VHNNLc5Jay1aNFx6H5VB2M9Rb19VtS73cmKPuAJTul&show_text=true&width=500" width="500" height="589" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'
        let post2 = '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjaypatelwanted%2Fposts%2Fpfbid0zQXsWEiq3ts6tBXF3qP8qJjR9pU7XzjuciV3XoTdVVCe1Djwov9sbwDA212CpC3Al&show_text=true&width=500" width="500" height="665" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'
        let post3 = '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjaypatelwanted%2Fposts%2F1700213693510519%3A1247500499316954&show_text=true&width=500" width="500" height="534" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'
        return (
            {
                Post1: {
                    dangerouslySetInnerHTML: { __html: resizeIframe(post1, 0.3 * hooks.windowWidth) }
                },
                Post2: {
                    dangerouslySetInnerHTML: { __html: resizeIframe(post2, 0.3 * hooks.windowWidth) }
                },
                Post3: {
                    dangerouslySetInnerHTML: { __html: resizeIframe(post3, 0.3 * hooks.windowWidth) }
                },
            }
        )
    }

    return {
        'youtube': topYoutubePostsOverrides,
        'linkedin': topLinkedinPostsOverrides,
        'twitter': topTwitterPostsOverrides,
        'facebook': topFacebookPostsOverrides,
    }
}

function GetCreatorPostsOverride(hooks, creatorDetails) {
    useEffect(() => {
        async function fetchData() {
            try {
                if (creatorDetails) {
                    const result = await getCreatorPostsOverride(hooks, creatorDetails);
                    hooks.setCreatorPostsOverride(result);
                    hooks.setLoading(false);
                }
            } catch (err) {
                hooks.setError(err);
                hooks.setLoading(false);
            }
        }
        fetchData();
    }, [creatorDetails]);
}

export { GetCreatorPostsOverride };