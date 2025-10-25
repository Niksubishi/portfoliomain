import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

function SEO({
  title = "Nik Bishop - Frontend Developer Portfolio",
  description = "Frontend Developer specializing in React, TypeScript, and modern web technologies. Explore my projects including restaurant blogs, auction platforms, e-commerce sites, and booking systems.",
  image = "/portfolio-preview.jpg",
  url = "https://nikbishop.dev",
  type = "website"
}: SEOProps) {
  const fullTitle = title === "Nik Bishop - Frontend Developer Portfolio"
    ? title
    : `${title} | Nik Bishop`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Nik Bishop Portfolio" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="author" content="Nik Bishop" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="theme-color" content="#111111" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Nik Bishop",
          jobTitle: "Frontend Developer",
          url: url,
          sameAs: [
            "https://github.com/Niksubishi",
            "https://linkedin.com/in/nikbishop"
          ],
          worksFor: {
            "@type": "Organization",
            name: "Freelance"
          },
          knowsAbout: [
            "React",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Frontend Development",
            "Web Development"
          ]
        })}
      </script>
    </Helmet>
  );
}

export default SEO;