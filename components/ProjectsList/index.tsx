import React from 'react';
import Link from 'next/link';
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Paper,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

import { useStyles } from './styles';
import { axiosInstance } from '../../api/axios';
import { alert } from '../../store/Alert.store';
import { useRouter } from 'next/router';

interface ProjectsList {
  _id: string;
  title: string;
}

interface ProjectsListProps {
  projectsList: ProjectsList[];
}

const ProjectsList = ({ projectsList }: ProjectsListProps): JSX.Element => {
  const classes = useStyles();
  const router = useRouter();

  const refreshData = (): void => {
    router.replace(router.asPath);
  };

  const handleDelete = async (projectId: string): Promise<void> => {
    try {
      const { data } = await axiosInstance.delete('projects/delete', {
        params: {
          projectId,
        },
      });
      refreshData();
      alert(data.message);
    } catch (err) {
      console.error(err);
      if (err && err.response && err.response.message) {
        alert(err.response.message, 'error');
      }
    }
  };

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
              <ListItemIcon>
                <Edit />
              </ListItemIcon>
              <ListItemText>{item.title}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  onClick={() => handleDelete(item._id)}
                  edge="end"
                  aria-label="delete"
                >
                  <Delete />
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
