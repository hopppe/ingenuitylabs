import React from "react";

// React 19 hoists title/meta/link rendered in components into <head>.
// scripts/prerender.js then drops the index.html defaults these override, so
// each prerendered page ships exactly one title/description/canonical/og set.
const SITE = "https://ingenuitylabs.net";

/**
 * Per-page head tags.
 *
 * Usage:
 *   <Seo title="…" description="…" path="/about" />
 *   <Seo title="…" description="…" path="/app" image="/app-og.jpg" imageAlt="…">
 *     <meta name="apple-itunes-app" content="app-id=123" />
 *   </Seo>
 *
 * `image` (site-relative or absolute) opts the page into og:image + Twitter card
 * tags; pages without it keep the site-wide defaults from public/index.html.
 * `children` are extra head tags (also hoisted by React 19).
 */
const Seo = ({ title, description, path = "/", image, imageAlt, children }) => {
  const url = `${SITE}${path}`;
  const imageUrl = image && (image.startsWith("http") ? image : `${SITE}${image}`);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {imageUrl && (
        <>
          <meta property="og:image" content={imageUrl} />
          {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={imageUrl} />
          {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}
        </>
      )}
      {children}
    </>
  );
};

export default Seo;
