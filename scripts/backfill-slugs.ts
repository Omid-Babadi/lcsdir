import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/blogs';

const blogSchema = new mongoose.Schema({
  title: String,
  slug: String,
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

function makeSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 200);
}

async function run() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const docs = await Blog.find({ $or: [{ slug: { $exists: false } }, { slug: null }, { slug: '' }] });
    if (!docs.length) {
      console.log('No documents require slug backfill');
      await mongoose.disconnect();
      return;
    }

    for (const doc of docs) {
      const title = (doc as any).title || '';
      const slug = makeSlug(title) || `blog-${Date.now()}`;
      doc.slug = slug;
      await doc.save();
      console.log(`Updated blog ${doc._id} -> slug=${slug}`);
    }

    await mongoose.disconnect();
    console.log('Disconnected');
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

run();
