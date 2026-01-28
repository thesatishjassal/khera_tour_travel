// sitemap.js
export default function sitemap() {
    return [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/`, // Home
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/about`, // About
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/taxi`, // Taxi
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/packages`, // Packages
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/destinations`, // Destinations
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/contact`, // Contact
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    ];
  }
  