const React = require("react")

const HeadComponents = [
    <link key="klaviyo-dns-prefetch" rel="dns-prefetch" href="https://static.klaviyo.com"/>
]

const FooterScripts = [
    <script defer key="klaviyo-tracking-js" src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=gT3Eag"/>
]

exports.onRenderBody = (actions) => {
    const {setPostBodyComponents, setHeadComponents} = actions;
    // setHeadComponents(HeadComponents);
    setPostBodyComponents(FooterScripts);
}