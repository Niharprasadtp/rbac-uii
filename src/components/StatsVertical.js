import PropTypes from 'prop-types';
import { Card, CardContent } from '@mui/material';
import { Typography, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles'; // Import the useTheme hook

const StatsVertical = ({ icon, color, stats, statTitle, className }) => {

  // Define card styles based on the theme
  const theme = useTheme(); // Access the current theme
  const cardStyle = {
    backgroundColor: theme.palette.background.default, 
    color: theme.palette.text.primary, 
    marginTop: '20px',
    textAlign: 'center', // Ensures the content inside the card is centered
  };

  // Avatar styles based on theme and color
  const avatarStyle = {
    backgroundColor: color ? theme.palette[color]?.light : theme.palette.primary.light,
    color: color ? theme.palette[color]?.main : theme.palette.primary.main,
    margin: '0 auto',
    padding: '0.5rem',
    width: '56px',
    height: '56px',
  };

  return (
    <Card className={className} style={cardStyle}>
      <CardContent>
        <Avatar style={avatarStyle}>
          {icon}
        </Avatar>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 0, textAlign: 'center' }}>
          {stats}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, textAlign: 'center' }}>
          {statTitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatsVertical;

// ** PropTypes
StatsVertical.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
  statTitle: PropTypes.string.isRequired,
};
