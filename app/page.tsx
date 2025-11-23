const timeline = [
  {
    time: "21:17",
    event: "Dispatch logs a 911 call reporting a disturbance at 455 Mercer St.",
  },
  {
    time: "21:23",
    event: "Patrol arrives; finds victim (Jordan Hale) unresponsive; scene secured.",
  },
  {
    time: "21:41",
    event: "Forensics collects surface samples around workstation and stairwell.",
  },
  {
    time: "22:05",
    event: "Neighbor footage seized; shows single figure entering alley 20 min prior.",
  },
  {
    time: "23:12",
    event: "Detectives interview key witnesses at adjacent loft party.",
  },
];

const evidence = [
  {
    id: "E-204",
    title: "Shattered tablet",
    detail:
      "Screen fractured near elevator lobby. Recent message draft addressed to 'K'. Unlock pattern smeared with what appears to be solvent residue.",
  },
  {
    id: "E-208",
    title: "Fiberglass shard",
    detail:
      "Recovered from victim's collar. Matches insulation material from rooftop greenhouse renovation completed last month.",
  },
  {
    id: "E-212",
    title: "Ledger printout",
    detail:
      "Hidden behind wall panel. Records off-book shipments routed through Hale Logistics subsidiary.",
  },
  {
    id: "E-215",
    title: "Footwear impression",
    detail:
      "Size 10.5 Vibram sole, wet imprint on stairwell landing. Pattern consistent with trail running shoe released earlier this year.",
  },
];

const personas = [
  {
    name: "Kai Moreno",
    role: "Head of Supply Chain",
    notes: [
      "On-site reviewing quarterly audit when disturbance occurred.",
      "Phone ping places them near freight elevator between 21:05-21:19.",
      "Known conflict with victim over cryptocurrency-backed procurement deal.",
    ],
  },
  {
    name: "Nova Ellery",
    role: "Independent Broker",
    notes: [
      "Hosts loft party next door; maintains surveillance cameras in shared hallway.",
      "Provided footage of unknown runner leaving roof access at 21:21.",
      "Owes significant debt to Hale Logistics from prior venture.",
    ],
  },
  {
    name: "Dax Rivers",
    role: "Contractor",
    notes: [
      "Oversaw greenhouse insulation project; access badge still active.",
      "Boot size matches Vibram impression; claims badge was stolen two weeks ago.",
      "Vehicle seen idling across street in parking citation timestamped 21:09.",
    ],
  },
];

const mapHighlights = [
  {
    label: "A3",
    description: "Victim located. Impact pattern suggests force from east corridor.",
  },
  {
    label: "C5",
    description: "Tablet fragments recovered; solvent trail extends toward stairwell.",
  },
  {
    label: "E2",
    description: "Fiberglass shard and soil trace consistent with rooftop greenhouse.",
  },
];

const boardCells = Array.from({ length: 36 }, (_, index) => {
  const row = String.fromCharCode(65 + Math.floor(index / 6));
  const column = (index % 6) + 1;
  const label = `${row}${column}`;
  const highlight = mapHighlights.find((item) => item.label === label);

  return {
    label,
    highlight: Boolean(highlight),
    description: highlight?.description,
  };
});

export default function Page() {
  return (
    <main className="grid-background">
      <div className="container">
        <header className="panel" style={{ marginBottom: "2.5rem" }}>
          <div className="badge">Case File 3827</div>
          <h1 style={{ fontSize: "2.75rem", marginBottom: "1rem" }}>
            Mercer Street Loft \u2014 Crime Scene Reconstruction
          </h1>
          <p className="fade-text" style={{ maxWidth: "720px" }}>
            Composite briefing assembling environmental evidence, timeline, and persons
            of interest for the homicide of Jordan Hale. Use the digital board below
            to triangulate opportunity windows and cross-reference trace findings.
          </p>
        </header>

        <section className="panel" style={{ marginBottom: "2rem" }}>
          <h2 className="section-title">Immediate Observations</h2>
          <div className="highlight-card" style={{ marginBottom: "1.5rem" }}>
            <strong>Scene Integrity</strong>
            <p className="fade-text">
              Entry points sealed within eight minutes of first responder arrival.
              Air vents cycling toward rooftop greenhouse, indicating possible escape
              route. Environmental sensors logged a humidity spike at 21:14.
            </p>
          </div>
          <div className="clue-board">
            {evidence.map((item) => (
              <article key={item.id} className="clue-card">
                <div className="badge">{item.id}</div>
                <h3 style={{ margin: 0 }}>{item.title}</h3>
                <p className="fade-text">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="panel"
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            marginBottom: "2rem",
          }}
        >
          <div>
            <h2 className="section-title">Timeline Reconstruction</h2>
            <div className="timeline">
              {timeline.map((entry) => (
                <div key={entry.time} className="timeline-item">
                  <h3 style={{ margin: "0 0 0.3rem", letterSpacing: "0.06em" }}>
                    {entry.time}
                  </h3>
                  <p className="fade-text">{entry.event}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="section-title">Persons of Interest</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {personas.map((persona) => (
                <article key={persona.name} className="persona-card">
                  <div className="badge">{persona.role}</div>
                  <h3>{persona.name}</h3>
                  <ul>
                    {persona.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="panel" style={{ marginBottom: "2.5rem" }}>
          <h2 className="section-title">Spatial Analysis</h2>
          <div className="evidence-map">
            <div className="map-grid">
              {boardCells.map((cell) => (
                <div
                  key={cell.label}
                  className={`map-cell${cell.highlight ? " highlight" : ""}`}
                  title={cell.description}
                >
                  {cell.label}
                </div>
              ))}
            </div>
            <div className="map-legend">
              <span>Grid overlays loft floor plan (north at top)</span>
              <span>Highlighted cells denote high-confidence evidence clusters</span>
            </div>
          </div>
          <div className="callout">
            Review crosswind data from rooftop greenhouse to validate solvent
            transport hypothesis. Badge swipe records requested from building
            security \u2014 pending upload.
          </div>
        </section>

        <footer className="fade-text" style={{ textAlign: "center", fontSize: "0.85rem" }}>
          Compiled by Major Crimes Unit // Digital Evidence Board prototype v1.2
        </footer>
      </div>
    </main>
  );
}
