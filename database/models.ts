import mongoose from 'mongoose';

const { model } = mongoose;

//schemas
import { projectSchema, userSchema } from './schemas';

const User = mongoose.models?.User || model('User', userSchema);
const Project = mongoose.models?.Project || model('Project', projectSchema);

export { User, Project };
