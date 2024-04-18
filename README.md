# Netflix Clone

This is a clone of the popular streaming platform Netflix, built using Next.js, Supabase, Prisma, NextAuth, and Tailwind CSS.

## Technologies Used
- **Next.js**: Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications. It provides a great developer experience with features like hot code reloading and automatic code splitting.
- **Supabase**: Supabase is an open-source alternative to Firebase, providing a set of tools and services for building applications with PostgreSQL. It offers features like real-time database, authentication, and file storage, making it ideal for building scalable and secure applications.
- **Prisma**: Prisma is an ORM (Object-Relational Mapping) tool for Node.js and TypeScript. It simplifies database access by generating type-safe query builders and auto-generating database schemas based on your application models. It supports multiple databases, including PostgreSQL, MySQL, and SQLite.
- **NextAuth**: NextAuth is an authentication library for Next.js applications. It supports various authentication providers such as email/password, OAuth, and JWT (JSON Web Tokens). It simplifies the implementation of authentication flows and provides features like session management and user profile management.
- **Tailwind CSS**: Tailwind CSS is a utility-first CSS framework that enables rapid UI development by providing a set of pre-defined utility classes. It allows you to quickly style your components without writing custom CSS, resulting in more consistent and maintainable code.

## Getting Started
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/netflix-clone.git
    ```

2. Navigate to the project directory:
    ```bash
    cd netflix-clone
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add environment variables for Supabase, Prisma, and NextAuth configurations. Refer to respective documentation for configuration details.

5. Run the development server:
    ```bash
    npm run dev
    ```

6. Open http://localhost:3000 in your browser to view the application.

## Features
- User authentication with NextAuth and Supabase.
- Dynamic routing and server-side rendering with Next.js.
- Real-time database updates with Supabase.
- ORM-based database access with Prisma.
- Responsive UI design with Tailwind CSS.

## Contributing
Contributions are welcome! If you have any ideas for improvements or new features, feel free to open an issue or submit a pull request.

