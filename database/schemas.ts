import mongoose from 'mongoose'

const { Schema } = mongoose

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
)
