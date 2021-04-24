import mongoose from 'mongoose'

const { model } = mongoose

//schemas
import { projectSchema } from './schemas'

mongoose.models = {}

const Project = model('Project', projectSchema)

export default Project
