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
- DeepSeek API key (or alternative)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/aethernotes.git
cd aethernotes

# 2. Install dependencies
npm install

# 3. Set up environment variables
# Create a .env.local file with these variables:
cat <<EOT > .env.local
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-key
DEEPSEEK_API_KEY=your-deepseek-key
EOT

# 4. Run the development server
npm run dev
```

Then open your browser and visit:  
👉 [http://localhost:3000](http://localhost:3000)