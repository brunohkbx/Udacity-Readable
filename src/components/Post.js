import React, { Component } from 'react';
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
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import avatarStyle from '../assets/js/avatarStyle';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CommentList from './CommentList';

const styles = {
  ...avatarStyle
};

class Post extends Component {
  state = {
    expanded: false
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const {
      classes,
      post,
      fullDetails,
      openDetails,
      redirectAfterDelete,
      showComments,
      comments
    } = this.props;

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
          <CardActions disableActionSpacing style={{display: 'block'}}>
            <PostActions
              post={post}
              openDetails={openDetails}
              redirectAfterDelete={redirectAfterDelete}
            />
            {showComments &&
              <div>
                <Divider />
                <Button
                  size="small"
                  color="primary"
                  onClick={this.handleExpandClick}
                >
                  {`Comments (${comments.length})`}
                </Button>
              </div>
            }
          </CardActions>
          { showComments &&
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CommentList comments={comments}/>
            </Collapse>
          }
        </Card>
      </div>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  fullDetails: PropTypes.bool,
  openDetails: PropTypes.bool,
  redirectAfterDelete: PropTypes.bool,
  showComments: PropTypes.bool,
  comments: PropTypes.array
}

Post.defaultProps = {
  fullDetails: false,
  openDetails: true,
  redirectAfterDelete: false,
  showComments: false
}

export default withStyles(styles)(Post);
