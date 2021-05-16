import React from 'react';
import Link from 'next/link';
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
          <ListSubheader
            className={classes.headerStyles}
            component="div"
            id="nested-list-subheader"
          >
            Projetos
          </ListSubheader>
        }
        className={classes.listStyle}
      >
        {projectsList.map((item) => (
          <Link key={item._id} href={`admin/project/${item._id}`}>
            <ListItem button>
              <ListItemText>{item.title}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit">
                  <Edit />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Link>
        ))}
      </List>
    </Paper>
  );
};

export default ProjectsList;
