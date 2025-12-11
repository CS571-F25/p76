export default function ScheduleStats({ artists }) {
  const genreCounts = artists.reduce((acc, artist) => {
    acc[artist.genre] = (acc[artist.genre] || 0) + 1;
    return acc;
  }, {});

  const fridayCount = artists.filter(a => a.time.includes('Friday')).length;
  const saturdayCount = artists.filter(a => a.time.includes('Saturday')).length;

  return (
    <Card className="mb-4 bg-light">
      <Card.Body>
        <h3 className="h5">📊 Your Festival Stats</h3>
        <Row>
          <Col md={6}>
            <p className="mb-1"><strong>Friday:</strong> {fridayCount} artists</p>
            <p className="mb-1"><strong>Saturday:</strong> {saturdayCount} artists</p>
          </Col>
          <Col md={6}>
            <p className="mb-1"><strong>Favorite Genre:</strong> {
              Object.entries(genreCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'
            }</p>
            <p className="mb-1"><strong>Total Hours:</strong> {artists.length} hours</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}