import mongoose from 'mongoose';

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
      maxlength: [50000, 'Article content cannot be more than 50,000 characters'],
      trim: true,
    },
    excerpt: {
      type: String,
      maxlength: [320, 'Excerpt cannot be more than 320 characters'],
      trim: true,
      default: '',
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
      trim: true,
      index: true,
    },
    seoTitle: {
      type: String,
      maxlength: [70, 'SEO title cannot be more than 70 characters'],
      trim: true,
      default: '',
    },
    metaDescription: {
      type: String,
      maxlength: [170, 'Meta description cannot be more than 170 characters'],
      trim: true,
      default: '',
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
blogSchema.pre('save', function (next) {
  if (!this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }
  next();
});

export default mongoose.models.Blog || mongoose.model('Blog', blogSchema);
