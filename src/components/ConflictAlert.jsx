import { Alert } from 'react-bootstrap';

export default function ConflictAlert({ conflicts }) {
  if (conflicts.length === 0) return null;

  return (
    <Alert variant="warning" className="mb-4" role="alert">
      <Alert.Heading>⚠️ Schedule Conflicts Detected</Alert.Heading>
      <p>The following artists have overlapping performance times:</p>
      <ul>
        {conflicts.map((conflict, index) => (
          <li key={index}>
            <strong>{conflict.artist1}</strong> and <strong>{conflict.artist2}</strong> 
            {' '}both perform at {conflict.time}
          </li>
        ))}
      </ul>
      <p className="mb-0">
        <small>Consider removing one artist from each conflicting pair to optimize your schedule.</small>
      </p>
    </Alert>
  );
}