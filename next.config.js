/** @type {import('next').NextConfig} */

  module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'blogger.googleusercontent.com',
          pathname: '/img/b/**',
        },
      ],
    },
  }
