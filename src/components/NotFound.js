import React from 'react';
import AppHeader from './AppHeader';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const NotFound = () => {
  return (
    <div>
      <AppHeader filterable={false} />
      <div style={{padding: 20}}>
        <Card>
          <CardContent>
            <Typography variant="display1" gutterBottom>
              Page not found :(
            </Typography>
            <Typography component="p">
              Maybe the page you are looking for has been removed, or you typed in the wrong URL
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default NotFound;
