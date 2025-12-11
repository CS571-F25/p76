import { Form, Row, Col } from 'react-bootstrap';

export default function FilterBar({ filters, onFilterChange }) {
  return (
    <Row className="mb-4">
      <Col md={4}>
        <Form.Group>
          <Form.Label htmlFor="genre-filter">Filter by Genre</Form.Label>
          <Form.Select
            id="genre-filter"
            value={filters.genre}
            onChange={(e) => onFilterChange('genre', e.target.value)}
            aria-label="Filter artists by genre"
          >
            <option value="All">All Genres</option>
            <option value="Indie Rock">Indie Rock</option>
            <option value="Electronic">Electronic</option>
            <option value="Hip Hop">Hip Hop</option>
            <option value="Folk">Folk</option>
            <option value="Jazz">Jazz</option>
            <option value="Classic Rock">Classic Rock</option>
          </Form.Select>
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group>
          <Form.Label htmlFor="stage-filter">Filter by Stage</Form.Label>
          <Form.Select
            id="stage-filter"
            value={filters.stage}
            onChange={(e) => onFilterChange('stage', e.target.value)}
            aria-label="Filter artists by stage"
          >
            <option value="All">All Stages</option>
            <option value="Main Stage">Main Stage</option>
            <option value="Side Stage">Side Stage</option>
            <option value="Acoustic Stage">Acoustic Stage</option>
          </Form.Select>
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group>
          <Form.Label htmlFor="day-filter">Filter by Day</Form.Label>
          <Form.Select
            id="day-filter"
            value={filters.day}
            onChange={(e) => onFilterChange('day', e.target.value)}
            aria-label="Filter artists by day"
          >
            <option value="All">Both Days</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </Form.Select>
        </Form.Group>
      </Col>
    </Row>
  );
}