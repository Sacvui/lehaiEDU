# Sanity CMS Setup Instructions

## Quick Start

To enable the blog CMS functionality, you need to configure Sanity:

### Step 1: Create a Sanity Project

1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Sign in or create a free account
3. Click **"Create new project"**
4. Choose a project name (e.g., "lehaiEDU Blog")
5. Copy the **Project ID** (looks like: `abc123xyz`)

### Step 2: Configure Environment Variables

Create a file named `.env.local` in the `d:/lehaiEDU/web/` directory with:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

Replace `your_project_id_here` with your actual Project ID from Step 1.

### Step 3: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 4: Access Sanity Studio

Navigate to: `http://localhost:9999/studio`

You should now see the Sanity Studio interface instead of the configuration error.

## Creating Content

Once configured, you can:

1. **Create Categories**: Go to "Blog Category" in the Studio
2. **Create Author Profile**: Go to "Author" and add your details
3. **Write Blog Posts**: Go to "Blog Post" and start writing

## Current Status

⚠️ **Temporary Placeholder**: The system is currently using a placeholder Project ID (`placeholder-project-id`) to prevent errors. This allows the site to build but **Sanity Studio will not work** until you configure a real Project ID.

✅ **After Configuration**: Once you add your real Project ID, you'll have full access to:
- Sanity Studio at `/studio`
- Blog management interface
- Rich text editor
- Media uploads
- Content publishing

## Need Help?

If you encounter issues:
1. Verify your Project ID is correct
2. Check that `.env.local` is in the correct directory
3. Restart the dev server after making changes
4. Clear browser cache if Studio doesn't load
