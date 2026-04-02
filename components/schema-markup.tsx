import Script from 'next/script'

interface SchemaMarkupProps {
  jsonLd: object
}

export function SchemaMarkup({ jsonLd }: SchemaMarkupProps) {
  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
