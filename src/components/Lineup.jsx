import { Container, Row, Col, Alert } from 'react-bootstrap';
import { useState } from 'react';
import ArtistCard from './ArtistCard';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';

export default function Lineup() {
  const allArtists = [
    {
      name: "The Madison Sound",
      genre: "Indie Rock",
      time: "Friday 8:00 PM",
      stage: "Main Stage"
    },
    {
      name: "DJ Badger Beats",
      genre: "Electronic",
      time: "Friday 6:00 PM",
      stage: "Side Stage"
    },
    {
      name: "Campus Collective",
      genre: "Hip Hop",
      time: "Saturday 7:00 PM",
      stage: "Main Stage"
    },
    {
      name: "Acoustic Duo",
      genre: "Folk",
      time: "Saturday 3:00 PM",
      stage: "Acoustic Stage"
    },
    {
      name: "Jazz Ensemble",
      genre: "Jazz",
      time: "Friday 4:00 PM",
      stage: "Side Stage"
    },
    {
      name: "Rock Revival",
      genre: "Classic Rock",
      time: "Saturday 9:00 PM",
      stage: "Main Stage"
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    genre: 'All',
    stage: 'All',
    day: 'All'
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const isArtistPlayingNow = (timeString) => {
    const demoTime = new Date('2025-04-26T21:00:00');
    
    const [day, time, period] = timeString.split(' ');
    const [hour, minute] = time.split(':');
    let hourInt = parseInt(hour);
    
    if (period === 'PM' && hourInt !== 12) {
      hourInt += 12;
    } else if (period === 'AM' && hourInt === 12) {
      hourInt = 0;
    }
    
    const artistDate = new Date(
      day === 'Friday' ? '2025-04-25' : '2025-04-26'
    );
    artistDate.setHours(hourInt, parseInt(minute), 0);
    
    const diffMs = demoTime - artistDate;
    const diffHours = diffMs / (1000 * 60 * 60);
    
    return diffHours >= 0 && diffHours < 1;
  };

  const filteredArtists = allArtists.filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = filters.genre === 'All' || artist.genre === filters.genre;
    const matchesStage = filters.stage === 'All' || artist.stage === filters.stage;
    const matchesDay = filters.day === 'All' || artist.time.includes(filters.day);
    
    return matchesSearch && matchesGenre && matchesStage && matchesDay;
  });

  const liveArtists = allArtists.filter(artist => isArtistPlayingNow(artist.time));

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h1 className="display-4">Artist Lineup</h1>
          <p className="lead">Check out our amazing performers for BadgerFest 2025</p>
          <p className="text-muted">
            ⭐ Click the star to add artists to your schedule | 💬 Click cards for details
          </p>
        </Col>
      </Row>

      {liveArtists.length > 0 && (
        <Alert variant="danger" className="mb-4" role="alert">
          <Alert.Heading>🔴 Happening Now!</Alert.Heading>
          <p className="mb-0">
            <strong>{liveArtists.map(a => a.name).join(', ')}</strong> {liveArtists.length === 1 ? 'is' : 'are'} performing right now at {liveArtists.map(a => a.stage).join(', ')}!
          </p>
        </Alert>
      )}

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />

      {filteredArtists.length === 0 ? (
        <Alert variant="info">
          <Alert.Heading>No artists found</Alert.Heading>
          <p className="mb-0">Try adjusting your search or filter criteria.</p>
        </Alert>
      ) : (
        <>
          <Row className="mb-3">
            <Col>
              <p className="text-muted">
                Showing <strong>{filteredArtists.length}</strong> of <strong>{allArtists.length}</strong> artists
              </p>
            </Col>
          </Row>
          <Row>
            {filteredArtists.map((artist, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <ArtistCard 
                  {...artist} 
                  isLive={isArtistPlayingNow(artist.time)}
                />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
}