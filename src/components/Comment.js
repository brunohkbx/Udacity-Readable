import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CommentSubHeader from './CommentSubHeader';
import CommentActions from './CommentActions';
import avatarStyle from '../assets/js/avatarStyle';

const styles = {
  ...avatarStyle
};

const Comment = ({ classes, comment }) => {
  return (
    <div>
      <CardContent>
        <CardHeader
          avatar={
            <Tooltip
              id="tooltip-top-start"
              title={comment.author}
              placement="top"
            >
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {comment.author.charAt(0)}
              </Avatar>
            </Tooltip>
          }
          subheader={ <CommentSubHeader comment={comment} /> }
          style={{paddingLeft: 0, paddingTop: 0}}
        />
        <Typography>
          {comment.body}
        </Typography>
      </CardContent>
      <CardActions>
        <CommentActions comment={comment} />
      </CardActions>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default withStyles(styles)(Comment);
