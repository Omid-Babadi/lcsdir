import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/blogs';

// Blog Schema
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      maxlength: [200, 'Title cannot be more than 200 characters'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
      maxlength: [5000, 'Description cannot be more than 5000 characters'],
      trim: true,
    },
    writtenBy: {
      type: String,
      required: [true, 'Please provide author name'],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save middleware to generate slug
blogSchema.pre('save', function (next: any) {
  if (!this.slug) {
    this.slug = (this as any).title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }
  next();
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

const testBlogs = [
  {
    title: 'The Ultimate Guide to Central Heating Maintenance',
    description:
      'Proper maintenance of your central heating system is essential for efficiency and longevity. In this comprehensive guide, we cover everything you need to know about keeping your heating system in top condition. From annual servicing to identifying common problems, we provide expert advice to help you maintain optimal performance. Learn about the importance of bleeding radiators, checking thermostats, and when to call a professional. Our experienced technicians at London Climate Systems recommend scheduling regular maintenance checks before the heating season begins. This not only ensures your system runs efficiently but can also help you avoid costly repairs down the line. We also discuss energy-saving tips that can reduce your heating bills while maintaining comfort throughout your home.',
    writtenBy: 'John Smith',
  },
];

async function seedBlogs() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Insert test blogs
    const created = await Blog.insertMany(testBlogs);
    console.log(`✅ Successfully created ${created.length} test blog(s)`);
    console.log('Blog IDs:', created.map((blog: any) => blog._id));

    await mongoose.disconnect();
    console.log('✅ Disconnected from MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding blogs:', error);
    process.exit(1);
  }
}

seedBlogs();
