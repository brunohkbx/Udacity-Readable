import React from 'react';
import PropTypes from 'prop-types';
import PostSubHeader from './PostSubHeader';
import PostActions from './PostActions';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';


const styles = {
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
          <PostActions post_id={post.id} />
        </CardActions>
      </Card>
    </div>
  );
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
}

export default withStyles(styles)(Post);
