import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CommentSubHeader from './CommentSubHeader';
import CommentActions from './CommentActions';
import red from "@material-ui/core/colors/red";

const styles = {
  avatar: {
    backgroundColor: red[500],
    textTransform: 'capitalize',
  },
};

const Comment = ({ classes, comment }) => {
  return (
    <div>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {comment.author.charAt(0)}
            </Avatar>
          }
          subheader={ <CommentSubHeader comment={comment} /> }
        />
        <CardContent>
          <Typography component="p">
            {comment.body}
          </Typography>
        </CardContent>
        <CardActions disableActionSpacing>
          <CommentActions />
        </CardActions>
      </Card>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default withStyles(styles)(Comment);
