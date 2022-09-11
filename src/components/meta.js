// Use as a function, not a component. For example:
//   meta({title: 'cool title', description: 'cool desc', url: '/cool'})
// Instead of:
//   <Meta title="cool title" description="cool desc" url="/cool" />
import ScriptTag from 'react-script-tag';
export default function meta({ title, description, url, image, type }) {
  // We prefix relative urls with the VERCEL_URL that vercel sets for us on deployments
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://rocketespresso.ml'
      : 'https://' + process.env.VERCEL_URL

  if (url) {
    url = url.startsWith('/') ? baseUrl + url : url
  }

  if (image) {
    image = image.startsWith('/') ? baseUrl + image : image
  }

  return (
    <>
      {/* Primary meta tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content="Solomon Shalom Lijo" />
      <meta name="google-site-verification" content="sD17kr1QoAH2Xd0zh6PZng3NKL6IGytdOdI8Ryj9jEA" />
      <ScriptTag isHydrating={true} type="text/javascript" data-website-id="0056af33-5193-40ac-b24f-6a150942f618" src="https://umami-production-2bee.up.railway.app/umami.js" />
        
      {/* Open Graph/Facebook */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {image && <meta property="twitter:image" content={image} />}
    </>
  )
}

// Meta Tags
