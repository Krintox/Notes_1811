# AetherNotes ✨

<!-- ![AetherNotes Banner](https://placehold.co/1200x400?text=AetherNotes+AI-Powered+Notes+App) -->

AI-powered notes application that helps you organize, summarize, and manage your thoughts efficiently. Built with cutting-edge technologies for seamless performance.

🔗 **Live Demo**: [aethernotes-nu.vercel.app](https://aethernotes-nu.vercel.app)

## 🌟 Features

- **Secure Authentication** 🔐
  - Google OAuth & Email/Password login
  - Protected routes and sessions
- **Smart Notes** 📝
  - Create, edit, and delete notes
- **AI Superpowers** 🧠
  - Instant note summarization
  - Powered by Gemini API
- **Beautiful UI** 🎨
  - Responsive design
  - Shadcn UI components
- **Blazing Fast** ⚡
  - React Query for state management
  - Optimized performance

## 🛠 Tech Stack

| Category       | Technologies                                                                 |
|----------------|------------------------------------------------------------------------------|
| Frontend       | ![Next.js](https://img.shields.io/badge/Next.js-13+-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-blue?logo=typescript) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3+-06B6D4?logo=tailwind-css) ![ShadcnUI](https://img.shields.io/badge/ShadcnUI-0.4.0-000?logo=react) |
| Backend        | ![Supabase](https://img.shields.io/badge/Supabase-2.38.0-3ECF8E?logo=supabase) |
| AI             | ![Gemini](https://img.shields.io/badge/Gemini_API-1.0-4F46E5) |
| State Management | ![React Query](https://img.shields.io/badge/React_Query-4.29+-FF4154?logo=react-query) |
| Deployment     | ![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel) |

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- npm v9+
- Supabase account
- Gemini API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/Krintox/Notes_1811
cd aethernotes
```

2. Install dependencies
```
npm install
```

3. Set up environment variables
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-key
GEMINI_API_KEY=your-gemini-key
```

4. Run the development server
```
npm run dev
```

Then open your browser and visit:  
👉 [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Supabase Setup
```bash
1. Create a new project in Supabase Dashboard
2. Go to Authentication → Providers and enable:
   - Email/Password
   - Google
3. Create a `notes` table with these columns:
   - id (uuid, primary key)
   - user_id (uuid, references auth.users)
   - title (text)
   - content (text)
   - summary (text)
   - created_at (timestamp)
4. Enable Row Level Security (RLS)
5. Add to Authorized Redirect URLs:
   - http://localhost:3000/auth/callback
   - https://aethernotes-nu.vercel.app/auth/callback
```

### AI Integration
<!-- ```bash -->
1. Get API key from [Gemini](https://gemini.com)
2. Configure the endpoint in:
   app/api/summarize/route.ts
3. Add your API key to .env.local:
   GEMINI_API_KEY=your_api_key_here
<!-- ``` -->

## 🤝 Contributing

1. Fork the repository
2. Clone your fork
```bash
git clone https://github.com/Krintox/Notes_1811
cd Notes_1811
```

3. Create feature branch
```
git checkout -b feature/AmazingFeature
```
4. Commit changes
```
git add .
git commit -m "Add some AmazingFeature"
```

5. Push to branch
```
git push origin feature/AmazingFeature
```
6. Open Pull Request on GitHub
<!-- ```
``` -->
<br></br>

## 📜 License
```text
MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted...
[Include full license text if needed]
```

## 📬 Contact
<!-- ```text -->
Shashank Suggala <br></br>
X: [@ShashankSUggala](https://x.com/ShashankSuggala?t=U7hOWqIR9QwCeFqGYaD0_g&s=09) 
Email: shashanktsx@gmail.com

Project Link: 
https://github.com/Krintox/Notes_1811
<!-- ``` -->

---

```text
Made with ❤️ and ☕ by Krintox
```