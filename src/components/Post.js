import React from 'react';
import PostSubHeader from './PostSubHeader';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tooltip from "@material-ui/core/Tooltip";
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import OpenIcon from '@material-ui/icons/OpenInNew';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import tooltipStyle from '../assets/js/tooltipStyle';
import red from '@material-ui/core/colors/red';


const styles = {
  ...tooltipStyle,
  avatar: {
    backgroundColor: red[500],
  },
};

function Post(props) {
  const { classes, post } = props;

  return (
    <div>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {post.author.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={post.title}
          subheader={ <PostSubHeader post={post} /> }
        />
        <CardContent>
          <Typography noWrap component="p">
            {post.body}
          </Typography>
        </CardContent>
        <CardActions disableActionSpacing>
          <Grid container justify="space-between">
            <Grid item>
              <Tooltip
                id="tooltip-top-start"
                title="Open Post"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton color="primary" aria-label="Open">
                  <OpenIcon />
                </IconButton>
              </Tooltip>
              <Tooltip
                id="tooltip-top-start"
                title="Edit Post"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton color="primary" aria-label="Edit">
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip
                id="tooltip-top-start"
                title="Remove Post"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton color="secondary" aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="primary" aria-label="Upvote">
                <ThumbUpIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="Downvote">
                <ThumbDownIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(Post);