# Rentity

> A web application to help you find your next rental property.

[Visit Live Demo](https://rentity-1stidwfs1-ahmet-atars-projects.vercel.app/)

Rentity is a comprehensive Full-Stack application built with Next.js 14, designed for discovering and managing rental properties with ease. The platform offers secure user authentication, dynamic property management, multi-image uploads, interactive map integration, and more. It leverages modern technologies such as Next.js Actions, Tailwind CSS, MongoDB, Cloudinary, and others to provide a fast, responsive, and user-friendly experience.

## Features

Rentity offers the following features:

- User authentication with Google & Next Auth
- Route protection
- User profile with user listings
- Multiple property image upload via cloudinary
- Property search functionality
- Internal messages with 'unread' notifications
- Photoswipe image gallery
- Toast notifications
- Property bookmarking / saved properties
- Property sharing to social media
- Loading spinners
- Responsive design (Tailwind CSS)
- Custom 404 page
- Next.js Actions

## Screenshots

Here are some screenshots of the Rentity platform:

### Home page & Footer

![Home page & Footer](/public/images/screenshots/01.png)

<!-- ![Home page](/public/images/screenshots/1.png)

![Home page](/public/images/screenshots/2.png) -->

### Properties page as well as pagination

![Properties page as well as pagination](/public/images/screenshots/4.png)

### Search Properties

![Search Properties](/public/images/screenshots/3.png)

### Google Sign-In

![Google Sign-In](/public/images/screenshots/5.png)

### Property details page

![Property page](/public/images/screenshots/6.png)

![Property page](/public/images/screenshots/7.png)

### Profile

![Profile](/public/images/screenshots/8.png)

### Add & Edit Property

![Add & Edit Property](/public/images/screenshots/9.png)

### Bookmark Property

![Bookmark Property](/public/images/screenshots/10.png)

## Messages between recipient and owner

![Messages between recipient and owner](/public/images/screenshots/11.png)

## Technologies Used

Rentity is built with the following technologies:

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Photoswipe](https://photoswipe.com/)
- [Cloudinary](https://cloudinary.com/)
- [React Spinners](https://www.npmjs.com/package/react-spinners)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [React Share](https://www.npmjs.com/package/react-share)

## Getting Started

### Prerequisites

- Node.js version 18 or higher
- MongoDB Atlas account and a cluster. Sign up and create a cluster at [MongoDB](https://www.mongodb.com/)
- Cloudinary account. Sign up at [Cloudinary](https://cloudinary.com/)
- Google console account. Sign up at [Google Cloud](https://console.cloud.google.com/)

### `.env` File

Rename the `example.env` file to `.env` and fill in the following environment variables:

- Get your MongoDB connection string from your MongoDB Atlas cluster and add it to `MONGODB_URI`.
- Get your Google client ID and secret from your Google console account and add them to `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.
- Add a secret to `NEXTAUTH_SECRET`. You can generate it with the following command:
  ```bash
  openssl rand -base64 32
  ```
- Get your Cloudinary cloud name, API key, and API secret from your Cloudinary account and add them to `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`.

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
