import { Document, Schema, Model } from 'mongoose';

interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
}

export const userSchema = new Schema<UserDocument, Model<UserDocument>>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const projectSchema = new Schema(
  {
    title: String,
    href: String,
    linkGitHub: String,
    alt: String,
    extraLink: Boolean,
    imgSrc: String,
    paragraphs: [
      {
        ptbr: String,
        eng: String,
      },
    ],
    extraParagraph: {
      ptbr: String,
      eng: String,
    },
    technologies: [String],
  },
  {
    timestamps: true,
  }
);
