import React from 'react';
import PropTypes from 'prop-types';
import PostSubHeader from './PostSubHeader';
import PostActions from './PostActions';
import { withStyles } from '@material-ui/core/styles';
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

function Post(props) {
  const { classes, post, fullDetails, openDetails } = props;

  return (
    <div>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {post.author.charAt(0)}
            </Avatar>
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
          <PostActions post={post} openDetails={openDetails} />
        </CardActions>
      </Card>
    </div>
  );
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  fullDetails: PropTypes.bool,
  openDetails: PropTypes.bool
}

Post.defaultProps = {
  fullDetails: false,
  openDetails: true
}

export default withStyles(styles)(Post);
