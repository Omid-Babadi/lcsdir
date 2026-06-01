# Blog Setup Instructions

## Overview
This project now includes a professional blog system with MongoDB integration, featuring:
- Responsive blog listing page with Suspense and lazy loading
- Individual blog detail pages
- MongoDB database with Mongoose ODM
- Professional styling consistent with the main website
- Test data included

## Prerequisites
1. Node.js 18+ and npm/pnpm
2. MongoDB Atlas account (free tier available at https://www.mongodb.com/cloud/atlas)

## Setup Steps

### 1. Install Dependencies
```bash
pnpm install
# or
npm install
```

### 2. Configure MongoDB

#### Option A: MongoDB Atlas (Cloud - Recommended)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster
4. Get your connection string from "Connect" button
5. Create a `.env.local` file in the project root with:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/blogs?retryWrites=true&w=majority
```

#### Option B: Local MongoDB
1. Install MongoDB Community Edition
2. Start MongoDB service
3. Create a `.env.local` file with:
```
MONGODB_URI=mongodb://localhost:27017/blogs
```

### 3. Add Test Blog Data
Run the seed script to populate test data:
```bash
npx ts-node scripts/seed-blogs.ts
```

### 4. Start Development Server
```bash
pnpm dev
# or
npm run dev
```

Visit http://localhost:3000/blog to see your blog page!

## Project Structure

### New Directories
- `lib/db/` - MongoDB connection setup
- `lib/models/` - Mongoose schemas (Blog model)
- `app/api/blogs/` - API routes for blog operations
- `app/blog/` - Blog pages (listing and detail)
- `components/blog/` - Blog-related components
- `scripts/` - Seed data scripts

### Blog Database Schema
```
Blog:
- _id (MongoDB ObjectId)
- title (String, required, max 200 chars)
- description (String, required, max 5000 chars)
- writtenBy (String, required)
- slug (String, unique, auto-generated from title)
- published (Boolean, default: true)
- createdAt (DateTime, auto)
- updatedAt (DateTime, auto)
```

### API Endpoints

#### GET /api/blogs
Fetch all published blogs with pagination
Query params:
- `page` (default: 1)
- `limit` (default: 10)

Response:
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "currentPage": 1,
    "totalPages": 1,
    "totalBlogs": 1,
    "limit": 10
  }
}
```

#### POST /api/blogs
Create a new blog (for internal use)
Body:
```json
{
  "title": "Blog Title",
  "description": "Blog content...",
  "writtenBy": "Author Name"
}
```

#### GET /api/blogs/[slug]
Fetch a single blog by slug

### Pages

#### /blog
Main blog listing page with:
- Suspense boundary for streaming
- Lazy loading with skeletons
- Responsive grid layout
- Professional typography

#### /blog/[slug]
Individual blog detail page with:
- Full blog content
- Author and date information
- Suspense for data loading
- Back to blogs navigation

## Features Implemented

✅ **Suspense & Lazy Loading**
- Suspense boundaries on all pages
- Loading skeletons while data fetches
- Client-side data loading with proper error handling

✅ **Professional Styling**
- Consistent with existing website design
- Responsive grid layouts
- Gradient headers using Instrument Serif font
- Hover effects and transitions

✅ **Security**
- Input validation on API routes
- MongoDB injection prevention (Mongoose)
- Error handling with no sensitive data exposure
- Environment variables for secrets

✅ **Performance**
- Pagination on blog listing
- Lean MongoDB queries
- Efficient component rendering
- CSS-based animations (no JS animations)

✅ **Database**
- MongoDB with Mongoose ODM
- Automatic timestamp creation
- Slug generation from titles
- Index on slug for fast lookups

## Adding More Blogs

### Via Script
Edit `scripts/seed-blogs.ts` to add more blogs to the `testBlogs` array:
```typescript
const testBlogs = [
  {
    title: "Your Blog Title",
    description: "Your blog content here...",
    writtenBy: "Author Name",
  },
  // Add more blogs...
];
```

Then run: `npx ts-node scripts/seed-blogs.ts`

### Via API
```bash
curl -X POST http://localhost:3000/api/blogs \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Blog",
    "description": "Content here...",
    "writtenBy": "Author Name"
  }'
```

## Customization

### Styling
Blog components use Tailwind CSS and Radix UI components. Edit:
- `components/blog/blog-card.tsx` - Blog card styling
- `app/blog/page.tsx` - Blog page header styling
- `app/blog/[slug]/page.tsx` - Blog detail page styling

### Loading Skeleton
Customize the loading state in:
- `components/blog/blog-card-skeleton.tsx`

### Pagination
Adjust pagination in:
- `components/blog/blog-loader.tsx` (page/limit params)
- `app/api/blogs/route.ts` (API limit)

## Troubleshooting

### MongoDB Connection Error
- Check `.env.local` has correct `MONGODB_URI`
- Verify MongoDB cluster is running
- For Atlas, whitelist your IP in cluster settings

### Blogs Not Showing
- Verify test data was inserted: `npx ts-node scripts/seed-blogs.ts`
- Check API response: visit `http://localhost:3000/api/blogs`
- Check browser console for errors

### Styling Issues
- Clear `.next` folder: `rm -rf .next` then `npm run dev`
- Restart dev server if Tailwind classes not applying

## Production Deployment

1. Set `MONGODB_URI` in production environment variables
2. Run `npm run build`
3. Deploy to Vercel or your hosting provider
4. Ensure MongoDB network access allows your deployment IP

## Security Notes

- Never commit `.env.local` to version control
- Use environment-specific connection strings
- In production, use strong passwords and IP whitelisting
- Validate and sanitize user inputs for future features

---

For questions or customization, refer to the Next.js and Mongoose documentation.
