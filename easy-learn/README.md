# Easy Learn (ELI5)

A Next.js application that explains complicated topics like you're 5 years old. Powered by the Google Gemini API.

## Local Development

If you have Node.js installed on your machine:
```bash
# 1. Install dependencies
npm install

# 2. Setup your environment variable
cp .env.example .env.local
# Edit .env.local and add your actual GEMINI_API_KEY from Google AI Studio.

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to Vercel

This application is ready to be deployed to Vercel. 

1. Go to [GitHub](https://github.com/) and create a new repository (leave it empty).
2. Open a terminal in your project folder (`easy-learn`) and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
3. Go to [Vercel](https://vercel.com/) and create a new project.
4. Import the GitHub repository you just created.
5. **Important:** In the Vercel project configuration, add your Environment Variable:
   - Name: `GEMINI_API_KEY`
   - Value: `<your-google-ai-studio-api-key>`
6. Click **Deploy**. Vercel will automatically build the Next.js app and deploy it on a global edge network.

## Stack
- Next.js 14 (App Router)
- React 18
- Google Gen AI SDK (`@google/genai`)
- Vanilla CSS (No external CSS libraries required)
