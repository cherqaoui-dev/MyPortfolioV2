import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, keywords, image }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    defaultKeywords,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.title && (<meta property="og:title" content={seo.title} />)}

      {seo.description && (<meta property="og:description" content={seo.description} />)}

      {seo.keywords && (<meta property="og:keywords" content={seo.keywords} />)}

      {seo.image && (<meta property="og:image" content={seo.image} />)}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (<meta name="twitter:creator" content={twitterUsername} />)}

      {seo.title && (<meta name="twitter:title" content={seo.title} />)}

      {seo.description && (<meta name="twitter:description" content={seo.description} />)}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  twitterUsername: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  keywords: null,
  url: null,
  image: null,
  twitterUsername: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultKeywords: keywords
        siteUrl: url
        defaultImage: image
        defaultTwitterUsername: twitterUsername
      }
    }
  }
`