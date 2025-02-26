## 🚀 Project Structure

Inside of your Next.js project, you'll see the following folders and files:

```
/
├── frontend-react/
│   ├── public/
│   │   └── assets/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   ├── pages/
│   │   │   └── layouts/
│   │   ├── app/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── styles/
│   ├── package.json
│   └── README.md
```

Each component follows this structure:
```
ComponentName/
├── index.js         # Main component code
├── style.module.scss # Component-specific styles
└── animation.js     # Optional: Animation logic
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:-----------------|:---------------------------------------------|
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at localhost:3000    |
| `npm run build`   | Build your production site to ./.next/       |
| `npm run start`   | Preview your build locally                   |
| `npm run lint`    | Run ESLint for code quality                  |

## 🛠️ Tech Stack

- ![Next JS](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
- Prisma - Database ORM
- Nylas API - Calendar functionalities
- Auth.js - Authentication
- Supabase - PostgreSQL Database
- Tailwind CSS - Styling
- ShadCN UI - Component library

## ✨ Features

- Modern design with smooth animations
- Responsive layout for all devices
- SEO optimized
- Custom authentication (Google, GitHub)
- Calendar booking and meeting tracking
- User-friendly dashboard
- Session management

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/your-username/your-repo-name.git
```

2. Install dependencies:
```bash
cd your-repo-name
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 👀 Want to learn more?

- Check out our [Documentation](link-to-docs)
- Join our [Community](link-to-community)
- Follow our [Tutorial](link-to-tutorial)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.