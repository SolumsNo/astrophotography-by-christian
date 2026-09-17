import { useEffect, useState } from 'react';
import DriftWall from './components/DriftWall/DriftWall';
import { galleryItems } from './gallery';

export default function App() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKey = event => event.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const wallItems = galleryItems.filter(item => !item.isVideo);

  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-wall" aria-hidden="true">
          <DriftWall
            items={wallItems}
            columns={5}
            tileWidth={228}
            tileHeight={132}
            gap={18}
            tilt={16}
            turn={-14}
            perspective={1200}
            depth={120}
            speed={8}
            direction="up"
            variance={0.45}
            parallax={0.6}
            lift={64}
            fade={0.20}
            dim={0.92}
            overlayColor="rgba(6, 0, 16, 0.12)"
          />
        </div>
        <div className="hero-shade" />
        <nav className="nav shell">
          <a className="brand" href="#top">ASTROFOTO <span>BY CHRISTIAN</span></a>
          <div className="navlinks">
            <a href="#gallery">Galleri</a>
            <a href="#about">Om</a>
          </div>
        </nav>
        <div className="hero-copy shell">
          <p className="eyebrow">DEEP SKY</p>
          <h1>Universet,<br />fanget fra bakken.</h1>
          <p className="lead">Et personlig galleri med astrofotografi.</p>
          <a className="cta" href="#gallery">Se galleriet <span>↓</span></a>
        </div>
        <div className="scrollhint">SCROLL</div>
      </section>

      <section className="gallery-section shell" id="gallery">
        <div className="section-head">
          <div>
            <p className="eyebrow">BILDEARKIV</p>
            <h2>Astrofotografi</h2>
          </div>
          <p>{galleryItems.length} bilder · klikk for fullskjerm</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map(item => (
            <button className="gallery-card" key={item.id} onClick={() => setSelected(item)}>
              {item.isVideo ? (
                <>
                  <img
                    className="gallery-video-preview"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <span className="video-play-badge" aria-hidden="true">▶</span>
                </>
              ) : (
                <img src={item.image} alt={item.title} />
              )}
              <span className="gallery-card-info">
                <strong>{item.title}</strong>
                {item.type && <small>{item.type}</small>}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="about shell" id="about">
        <p className="eyebrow">FORTSETTELSEN</p>
        <h2>Flere netter. Flere fotoner. Flere historier.</h2>
        <p className="about-copy">
          En voksende samling astrofotografi av galakser, tåker, Månen, Solen og Nova.
        </p>
        <a className="contact-email" href="mailto:christian@solums.no">
          christian@solums.no
          <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="shell footer">
        <span>© {new Date().getFullYear()} Christian</span>
        <a href="#top">Til toppen ↑</a>
      </footer>

      {selected && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
          <button className="lightbox-close" aria-label="Lukk">×</button>
          <figure onClick={event => event.stopPropagation()}>
            {selected.isVideo ? (
              <div className="lightbox-video-wrap">
                <iframe
                  src={`https://www.youtube.com/embed/${selected.youtubeId}?autoplay=1&rel=0`}
                  title={selected.title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <img src={selected.image} alt={selected.title} />
            )}
            <figcaption className="lightbox-caption">
              <strong>{selected.title}</strong>
              {selected.type && <span>{selected.type}</span>}
              {selected.description && <p>{selected.description}</p>}
              {(selected.equipment || selected.date || selected.exposure) && (
                <dl className="photo-meta">
                  {selected.equipment && (
                    <div>
                      <dt>Utstyr</dt>
                      <dd>{selected.equipment}</dd>
                    </div>
                  )}
                  {selected.date && (
                    <div>
                      <dt>Dato</dt>
                      <dd>{selected.date}</dd>
                    </div>
                  )}
                  {selected.exposure && (
                    <div>
                      <dt>Eksponering</dt>
                      <dd>{selected.exposure}</dd>
                    </div>
                  )}
                </dl>
              )}
            </figcaption>
          </figure>
        </div>
      )}
    </main>
  );
}
