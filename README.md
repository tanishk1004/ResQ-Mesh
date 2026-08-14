# ResQ-Mesh

## Zero-Connectivity Emergency Response & Triage System

ResQ-Mesh is an **offline-first emergency response ecosystem** that continues functioning when cellular networks and internet connectivity fail during disasters.

---

## 🚨 The Problem

During major disasters—earthquakes, hurricanes, terrorist attacks—cellular networks and internet infrastructure often fail when they're needed most. Traditional emergency communication systems become useless, leaving victims unable to call for help and responders operating blind.

---

## 💡 The Solution

**ResQ-Mesh** creates a resilient emergency communication network using:

- **Peer-to-peer mesh networking** for SOS propagation without internet
- **Edge gateways** for packet aggregation and deduplication
- **AI-powered triage** with explainable priority scoring
- **CV/sensor fusion** for hazard detection
- **Casualty cluster detection** for mass-casualty events
- **End-to-end encryption** for privacy-preserving emergency communication

---

## 🏗️ Architecture

```
┌─────────────────────┐
│  CIVILIAN PHONES    │  SOS Creation
│  (Victim Devices)   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   MESH RELAYS       │  BLE / Wi-Fi Direct
│ (Nearby Peer Nodes) │  Store-and-Forward
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  EDGE GATEWAYS      │  Packet Aggregation
│ (Vehicle / Drone)   │  Deduplication
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  TRIAGE ENGINE      │  AI + CV + Data Fusion
│ (Priority Scoring)  │  Cluster Detection
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  COMMAND CENTER     │  Incident Queue
│ (Dashboard UI)      │  Dispatch Management
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│    RESPONDERS       │  EMT / Fire / Police
│ (Field Units)       │
└─────────────────────┘
```

---

## 🎯 Core Features

### 1. **Offline-First Mesh Networking**
- Store-and-forward packet relay through peer devices
- No internet required for SOS propagation
- Automatic neighbor discovery and route optimization

### 2. **Encrypted & Private**
- End-to-end payload encryption (demo-grade AES)
- Hashed medical identifiers
- Privacy-preserving emergency communication

### 3. **Explainable AI Triage**
- Multi-factor priority scoring:
  - Medical severity (35%)
  - Vulnerability (20%)
  - Hazard risk (15%)
  - Cluster density (15%)
  - Time criticality (10%)
  - Evidence confidence (5%)
- Clear reasoning for every score
- Configurable weights

### 4. **CV/Sensor Fusion**
- Real-time hazard detection from drone/camera feeds
- Smoke, fire, collapse, distress gesture detection
- Confidence scoring for each detection

### 5. **Casualty Cluster Detection**
- DBSCAN-based spatial clustering
- Automatic high-density zone identification
- Risk level classification (EXTREME, HIGH, MEDIUM, LOW)

### 6. **Live Command Center**
- Real-time incident queue sorted by priority
- Interactive map with layers (victims, mesh, gateways, hazards)
- One-click dispatch to nearest available responder
- Live statistics and analytics

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development servers (client + backend)
npm run dev

# Or run separately
npm run dev:client    # Frontend on http://localhost:3000
npm run dev:server    # Backend on http://localhost:3001
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📱 Demo Walkthrough

### 1. **Landing Page**
- Click **"RUN DISASTER SIMULATION"** or **"LAUNCH COMMAND CENTER"**

### 2. **Disaster Simulation**
- Simulates complete emergency scenario:
  - Network collapse
  - 12+ SOS signals generated
  - Mesh packet forwarding
  - AI/CV hazard detection
  - Casualty cluster formation
  - Triage engine ranking

### 3. **Command Dashboard**
- View incident queue sorted by priority score
- Select incident to see detailed triage reasoning
- Dispatch nearest responder with one click
- Toggle map layers (victims, mesh, gateways, hazards, clusters)

### 4. **Victim SOS Interface**
- Simple two-tap SOS creation
- Optional medical condition flags
- Shows mesh-only connectivity status
- Displays encryption security indicators

### 5. **Network Controls**
- **Simulate Network Collapse**: Switch to MESH-ONLY mode
- **Restore Connectivity**: Return to ONLINE mode
- **Reset Demo**: Restore initial state

---

## 🎨 Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **Leaflet** for interactive maps
- **Framer Motion** for animations
- **Lucide React** for icons
- **Recharts** for data visualization

### Backend
- **Node.js** with Express
- **TypeScript**
- **WebSocket** for real-time events
- **SQLite** for local demo database

### Algorithms
- **DBSCAN** for casualty clustering
- **Dijkstra-style** mesh routing
- **Multi-factor triage scoring**
- **Store-and-forward** packet relay

---

## 📊 Demo Metrics

- **0** internet connectivity required
- **94.7%** simulated packet delivery rate
- **3.4** average mesh hops
- **12** simultaneous SOS incidents
- **3** casualty clusters detected
- **5** active responder units

---

## 🔒 Security & Privacy

### Current Implementation (Demo-Grade)
- Web Crypto API for hashing
- Simulated AES-256 encryption
- Medical data hashing
- Role-based access control concepts

### Production Roadmap
- Hardware-backed encryption
- Zero-knowledge proof protocols
- Secure enclave integration
- Full cryptographic audit

---

## ⚠️ Important Disclaimers

### This is Emergency Decision-Support Software

ResQ-Mesh is **NOT**:
- An autonomous medical diagnosis system
- A replacement for trained emergency professionals
- FDA-approved medical device software
- Validated for real-world emergency deployment

ResQ-Mesh **IS**:
- A decision-support tool for responders
- A prototype demonstrating resilient communication
- A hackathon concept with simulated components
- Educational technology exploring offline-first design

### Mesh Networking Simulation

This prototype uses **simulated mesh networking**. Real-world deployment would require:
- Native mobile applications
- Bluetooth Low Energy / Wi-Fi Direct integration
- LoRa or other long-range radio protocols
- Hardware gateway devices
- Extensive field testing

### AI/CV Detection

Current CV detections are **simulated**. Production implementation would need:
- Actual computer vision models (YOLO, EfficientDet, etc.)
- Edge inference optimization
- Model validation on emergency scenarios
- False positive mitigation

---

## 🗺️ Future Roadmap

### Phase 1: Software Prototype ✅
- Complete web-based simulation
- Demo-ready interface
- Core algorithm implementation

### Phase 2: Native Mobile Integration
- Android/iOS native apps
- Real Bluetooth mesh integration
- Background packet relay

### Phase 3: Hardware Validation
- BLE/Wi-Fi Direct field testing
- Gateway device prototypes
- Range and reliability testing

### Phase 4: Edge Gateway Deployment
- Vehicle-mounted gateways
- Drone integration
- LoRa long-range radio

### Phase 5: AI/CV Integration
- Real-time hazard detection
- Edge inference optimization
- Multi-modal sensor fusion

### Phase 6: Emergency Services Integration
- CAD system integration
- Standard protocol compliance (NIMS, ICS)
- Responder training programs

### Phase 7: Large-Scale Validation
- City emergency services pilot
- Disaster simulation exercises
- Performance benchmarking

---

## 🤝 Use Cases

### Natural Disasters
- Earthquakes destroying cellular infrastructure
- Hurricanes and floods
- Wildfires in remote areas

### Urban Emergencies
- Building collapses
- Mass casualty events
- Infrastructure attacks

### Remote Operations
- Search & rescue in wilderness
- Maritime emergencies
- Underground/tunnel incidents

---

## 📄 License

MIT License - See LICENSE file for details

---

## 👥 Team

Built during a hackathon by an expert engineering team exploring resilient emergency communication systems.

---

## 🙏 Acknowledgments

- OpenStreetMap for map tiles
- Leaflet for mapping library
- React ecosystem for UI framework
- Emergency response professionals for domain insights

---

## 📞 Contact

For questions, collaboration, or deployment inquiries, please open an issue on GitHub.

---

**Remember**: ResQ-Mesh is a prototype demonstrating resilient emergency communication. Real-world deployment requires extensive validation, regulatory approval, and collaboration with emergency services.

**When the network fails, ResQ-Mesh doesn't.**
