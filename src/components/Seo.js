import React from "react";

// React 19 hoists title/meta/link rendered in components into <head>.
const SITE = "https://ingenuitylabs.net";

const Seo = ({ title, description, path = "/" }) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={`${SITE}${path}`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`${SITE}${path}`} />
  </>
);

export default Seo;
