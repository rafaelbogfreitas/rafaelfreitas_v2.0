import mongoose from 'mongoose';

const { model } = mongoose;

//schemas
import { projectSchema, userSchema } from './schemas';

if (mongoose.modelNames().includes('Project')) {
  mongoose.deleteModel('Project');
}

if (mongoose.modelNames().includes('user')) {
  mongoose.deleteModel('user');
}

const User = model('user', userSchema);
const Project = model('Project', projectSchema);

export { User, Project };
