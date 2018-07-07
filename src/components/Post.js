import React from 'react';
import PropTypes from 'prop-types';
import PostSubHeader from './PostSubHeader';
import PostActions from './PostActions';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import avatarStyle from '../assets/js/avatarStyle';

const styles = {
  ...avatarStyle
};

const Post = props => {
  const {
    classes,
    post,
    fullDetails,
    openDetails,
    redirectAfterDelete
  } = props;

  return (
    <div>
      <Card>
        <CardHeader
          avatar={
            <Tooltip
              id="tooltip-top-start"
              title={post.author}
              placement="top"
            >
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {post.author.charAt(0)}
              </Avatar>
            </Tooltip>
          }
          title={post.title}
          subheader={ <PostSubHeader post={post} /> }
        />
        <CardContent>
          <Typography noWrap={!fullDetails} component="p">
            {post.body}
          </Typography>
        </CardContent>
        <CardActions disableActionSpacing>
          <PostActions
            post={post}
            openDetails={openDetails}
            redirectAfterDelete={redirectAfterDelete}
          />
        </CardActions>
      </Card>
    </div>
  );
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  fullDetails: PropTypes.bool,
  openDetails: PropTypes.bool,
  redirectAfterDelete: PropTypes.bool
}

Post.defaultProps = {
  fullDetails: false,
  openDetails: true,
  redirectAfterDelete: false
}

export default withStyles(styles)(Post);
