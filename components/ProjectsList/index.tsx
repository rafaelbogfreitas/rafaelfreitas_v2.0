import React from 'react';
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Paper,
} from '@material-ui/core';
import { Edit } from '@material-ui/icons';

import { useStyles } from './styles';

interface ProjectsList {
  _id: string;
  title: string;
}

interface ProjectsListProps {
  projectsList: ProjectsList[];
}

const ProjectsList = ({ projectsList }: ProjectsListProps): JSX.Element => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.paperStyles}>
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Projetos
          </ListSubheader>
        }
        className={classes.listStyle}
      >
        {projectsList.map((item) => (
          <ListItem key={item._id} button>
            <ListItemText>{item.title}</ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit">
                <Edit />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ProjectsList;
