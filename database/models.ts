import mongoose from 'mongoose';

const { model } = mongoose;

//schemas
import { projectSchema } from './schemas';

if (mongoose.modelNames().includes('Project')) {
  mongoose.deleteModel('Project');
}

const Project = model('Project', projectSchema);

export default Project;
