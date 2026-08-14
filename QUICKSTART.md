# ResQ-Mesh Quick Start Guide

## 🚀 Run the Demo

### Option 1: Concurrent (Recommended)
```bash
npm run dev
```
This runs both frontend and backend simultaneously.

### Option 2: Separate Terminals

**Terminal 1 - Frontend:**
```bash
npm run dev:client
```

**Terminal 2 - Backend:**
```bash
npm run dev:server
```

## 📱 Access the Application

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:3001

## 🎯 Demo Walkthrough

### 1. Landing Page
Open http://localhost:3000 in your browser

### 2. Run Disaster Simulation
Click **"RUN DISASTER SIMULATION"** button

This will:
- Simulate network collapse
- Generate 12 SOS signals from victims
- Show mesh packet forwarding
- Detect casualty clusters
- Run AI triage scoring
- Display hazards from CV detections

### 3. Command Dashboard
Click **"LAUNCH COMMAND CENTER"**

Features:
- **Left Panel**: Incident queue sorted by priority
- **Center**: Interactive map with victims, mesh nodes, gateways
- **Right Panel**: Detailed incident triage (click any incident)
- **Map Controls**: Toggle layers (victims, mesh, gateways, hazards, clusters)

### 4. Dispatch Responders
1. Select any incident from the queue
2. View detailed triage score and reasoning
3. Click **"DISPATCH"** button
4. Responder assigned and routed to incident

### 5. Network Controls
Use the simulation controls to:
- **Network Collapse**: Switch to MESH-ONLY mode
- **Restore Network**: Return to ONLINE mode
- **Reset Demo**: Start fresh

### 6. Victim SOS Interface
Click **"VICTIM SOS INTERFACE"** from landing page

Try:
- Select medical conditions
- Send SOS signal
- Watch encryption and mesh relay

## 🎨 Key Features to Demonstrate

### Zero-Connectivity Operation
1. Click "SIMULATE NETWORK COLLAPSE"
2. Notice banner changes to "MESH-ONLY MODE"
3. SOS still works
4. Dashboard continues operating
5. Packets route through mesh

### Explainable Triage
1. Select any incident
2. See triage score (0-100)
3. Read clear reasoning:
   - Medical severity
   - Hazard exposure
   - Cluster density
   - Time criticality

### Casualty Clustering
- Multiple victims in same area automatically clustered
- Cluster risk level calculated (EXTREME, HIGH, MEDIUM, LOW)
- Visible on map with orange boundaries

### CV/Sensor Detections
- Drone detections (smoke, fire, collapse)
- Confidence scores shown
- Overlay on map
- Contribute to triage scoring

## 🛠️ Troubleshooting

### Port Already in Use
If ports 3000 or 3001 are busy:

**Option A**: Kill the processes
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Option B**: Change ports
- Edit `vite.config.ts` (frontend port)
- Edit `server/index.ts` (backend port)

### Build Errors
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Map Not Loading
- Check browser console for errors
- Ensure internet connection for map tiles
- Tiles are from OpenStreetMap (may load slowly first time)

## 📊 Demo Metrics

When fully running, you should see:
- **12** active incidents
- **3** casualty clusters detected
- **5** responders available
- **40+** mesh nodes
- **3** edge gateways
- **94.7%** packet delivery rate

## 🎬 Judge Demo Flow (3-5 minutes)

1. **Landing** (30 sec): Explain problem and solution
2. **Simulation** (1 min): Run disaster scenario, narrate events
3. **Dashboard** (2 min): 
   - Show incident queue
   - Explain triage scores
   - Point out clusters on map
   - Dispatch a responder
4. **Network Demo** (1 min):
   - Collapse network
   - Show MESH-ONLY mode
   - Restore connectivity
5. **Victim SOS** (30 sec): Show simple 2-tap SOS interface

## 💡 Talking Points

- **"When conventional networks fail, ResQ-Mesh doesn't"**
- **Offline-first**: Mesh relay works without internet
- **Explainable AI**: Every triage score has clear reasoning
- **Privacy-preserving**: Encrypted packets, hashed identifiers
- **Decision support**: Not autonomous diagnosis, helps responders prioritize
- **Demo-grade**: Simulated mesh, ready for real hardware integration

## 🚦 System Requirements

- Node.js 18+
- Modern browser (Chrome, Firefox, Edge)
- 4GB RAM minimum
- Internet for map tiles (optional, app works offline)

## 📝 Notes

- All data is simulated and deterministic
- Reset demo restores initial state
- No real database (in-memory only)
- Mesh networking is simulated (real-world needs native apps)
- CV detections are pre-generated (real CV needs actual models)

---

**Ready to demo! Good luck! 🚀**
