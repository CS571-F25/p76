import { Form } from 'react-bootstrap';

export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <Form.Group className="mb-4">
      <Form.Label htmlFor="artist-search" className="visually-hidden">
        Search Artists
      </Form.Label>
      <Form.Control
        id="artist-search"
        type="text"
        placeholder="🔍 Search artists by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search for artists by name"
      />
    </Form.Group>
  );
}