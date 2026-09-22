# FloodSense Pro

Build a complete, modern, responsive web application called:

AI-Based Mountain Flood & Flash-Flood Early Warning System

Tagline:
Predict. Protect. Prepare.

The application should be based on the project concept below:

Multi-Source Data → AI Flood Risk Prediction → Explain Risk → Early Warning → Notify People & Authorities → GIS Evacuation → Safe Destination → Environmental Restoration → Long-Term Preparedness

This is a major academic project. Do NOT create only a static landing page. Build a functional dashboard-style web application with realistic demo data, interactive maps, charts, prediction forms, alerts, evacuation routes, and restoration analysis.

1. TECHNOLOGY STACK

Use:

React

TypeScript

Vite

Tailwind CSS

shadcn/ui

Lucide React icons

Recharts for charts

Leaflet / React Leaflet for maps

Supabase for database and authentication if backend functionality is required

The application must be responsive and work properly on:

Desktop

Laptop

Tablet

Mobile

Use clean component-based architecture.

2. OVERALL DESIGN

Create a professional disaster-management / AI dashboard.

Design style:

Modern

Professional

Clean

Government/disaster-management inspired

Easy to understand

High information visibility

Accessible typography

Strong visual hierarchy

Use a dashboard layout with:

Sidebar

Logo:

FloodSense AI

Navigation:

Dashboard

Flood Prediction

Risk Map

Alerts

Evacuation

Environmental Planning

Data & Analytics

Authorities

Settings

At the bottom:

System Status

User Profile

Logout

3. LOGIN / AUTHENTICATION

Create a login page.

Fields:

Email

Password

Buttons:

Login

Sign Up

Continue as Demo User

Also provide demo accounts conceptually:

Citizen

Access:

Risk information

Alerts

Evacuation map

Authority

Access:

Risk monitoring

Alerts

Evacuation coordination

Analytics

Administrator

Access:

Complete system

Data

Users

Models

System configuration

For the demo, allow users to enter the dashboard without requiring a real backend.

4. MAIN DASHBOARD

Create a powerful main dashboard.

Header:

AI Flood Risk Monitoring Dashboard

Show:

Current Risk

Large risk card:

HIGH

Example:

Location:
Mountain Region / Example Location

Risk Score:

78 / 100

Status:

High Flood Risk

Use risk levels:

LOW

MODERATE

HIGH

CRITICAL

Do not hardcode the interface to only HIGH. The risk level should dynamically change according to prediction/demo data.

5. DASHBOARD KPI CARDS

Display:

Current Risk

78 / 100

Rainfall

124 mm

Rainfall Duration

6.5 hours

River Level

4.8 m

Terrain Risk

High

Active Alerts

12

Safe Shelters

8

Areas at Risk

5

Use icons and visual indicators.

6. FLOOD PREDICTION MODULE

Create a page:

AI Flood Risk Prediction

The user should be able to enter/select environmental parameters.

Input parameters:

Meteorological

Rainfall intensity

Total rainfall

Continuous rainfall duration

Cloudburst occurrence

Temperature

Humidity

Sudden climate change indicator

Geographical

Elevation

Slope

Terrain type

Environmental

Vegetation coverage

Forest coverage

Hydrological

River water level

River flow

Dam capacity

Dam water level

Human-Induced

Construction activity

Urban/hill development

Land-use change

Provide a button:

PREDICT FLOOD RISK

When clicked:

Process the input values.

Calculate a realistic DEMO risk score.

Display:

Risk Level: LOW / MODERATE / HIGH / CRITICAL

Display risk probability.

Display a confidence percentage.

Display major contributing factors.

Example:

Risk:
HIGH

Probability:
82%

Confidence:
91%

Major Factors:

Heavy rainfall

Steep terrain

Rising river level

Low vegetation

High construction activity

Clearly label demo predictions as:

Demo / Model Simulation

Do not falsely claim that a real trained ML model exists unless one is actually connected.

7. RISK EXPLANATION

After prediction, show:

Why is the risk high?

Create a SHAP-style explanation visualization.

Example:

Rainfall
████████████████ 82%

River Level
████████████ 68%

Terrain Slope
██████████ 56%

Vegetation
██████ 34%

Construction
█████ 29%

Use a horizontal bar chart.

Add:

AI Explanation

"Heavy rainfall, steep terrain, and rising river levels are the primary factors contributing to the predicted flood risk."

Clearly state:

Feature importance shown in demo mode. Actual importance will come from the trained model.

8. RISK MAP

Create an interactive GIS map page.

Use Leaflet / React Leaflet.

Display:

Map Layers

User Location

High-Risk Flood Zone

Moderate-Risk Zone

Low-Risk Zone

Rivers

Roads

Shelters

Hospitals

Safe Destinations

Dams

Terrain / Elevation

Legend:

🔵 Blue = User Location

🔴 Red = High-Risk Zone

🟠 Orange = Moderate-Risk Zone

🟢 Green = Safe Destination / Shelter

Map interactions

When clicking a risk zone, show:

Location

Risk level

Risk score

Rainfall

River level

Population affected

Recommended action

Provide:

Locate Me

Show High-Risk Areas

Show Shelters

Show Evacuation Route

buttons.

Use realistic demo geographic coordinates and clearly identify demo/sample data.

9. EARLY WARNING SYSTEM

Create a page:

Early Warning & Alerts

Show active alerts.

Example:

FLOOD WARNING

HIGH FLOOD RISK DETECTED

Area:
Example Mountain Region

Risk:
HIGH

Reason:
Heavy rainfall + rising river level

Action:
Move toward the recommended safe destination.

Time:
10 minutes ago

Buttons:

View Map

Start Evacuation

Acknowledge

Share Alert

10. AUTHORITY ALERT

Create a separate authority notification card:

AUTHORITY ALERT

FLOOD RISK ALERT

Area:
Example Location

Risk:
HIGH

Reason:
Heavy rainfall + rising flood risk

Action:

Activate emergency response and verify evacuation plans.

Buttons:

Dispatch Response

View Risk Map

View Evacuation Plan

11. CITIZEN ALERT

Create a citizen-friendly alert.

FLOOD WARNING

"High flood risk detected near your area."

"Please move toward the recommended safe destination."

"Follow the evacuation route shown on the map."

Show notification channels:

SMS

Mobile Notification

Messaging

Authority Dashboard

Create realistic demo notification behavior.

12. EVACUATION MODULE

Create:

Evacuation Center

Show:

Current Location

Blue marker.

Flood Risk Zone

Red/orange areas.

Safe Destination

Green markers.

Recommended Route

Bright route line.

The route should consider demo versions of:

Flood risk

Road accessibility

Terrain

Distance

Known hazards

Safe destinations

Display:

Recommended Safe Destination

Example:

"Community Shelter A"

Distance:
2.4 km

Estimated travel time:
18 minutes

Capacity:
350 people

Available:
142 spaces

Button:

START EVACUATION

13. EVACUATION INSTRUCTIONS

Create a step-by-step panel:

Step 1

Move away from the red flood-risk zone.

Step 2

Follow the highlighted evacuation route.

Step 3

Avoid rivers and low-lying areas.

Step 4

Proceed to the recommended shelter.

Step 5

Follow authority instructions.

Add emergency contact information.

14. SHELTER MANAGEMENT

Create a shelter section.

Display cards for:

Shelter name

Location

Distance

Capacity

Occupied

Available spaces

Accessibility

Status

Example:

Community Shelter A

Capacity:
350

Occupied:
208

Available:
142

Status:
OPEN

Use different status indicators:

OPEN

LIMITED

FULL

CLOSED

15. ENVIRONMENTAL PLANNING

Create:

Environmental Restoration

The purpose is to identify areas where vegetation restoration may help reduce modeled runoff/flood vulnerability depending on local conditions.

Show:

CURRENT CONDITION

Low vegetation

Steep slope

Heavy rainfall

↓

Higher modelled runoff / flood vulnerability

RESTORATION SCENARIO

Improved vegetation coverage

Suitable restoration area

↓

Compare modelled flood-risk scenario

16. VEGETATION RESTORATION ANALYSIS

Create an interactive analysis page.

Inputs:

Current vegetation %

Target vegetation %

Slope

Rainfall

Soil/runoff indicator

Forest coverage

Button:

RUN RESTORATION ANALYSIS

Output:

Restoration Target

Suitable Area:
24.5 km²

Current Vegetation:
28%

Target Vegetation:
45%

Potential Vegetation Increase:
17%

Show comparison:

Current Scenario

High runoff vulnerability

Restoration Scenario

Reduced modeled runoff vulnerability

Important:

Do not claim that vegetation restoration guarantees flood prevention.

Display:

"Results represent modeled scenarios and depend on local environmental conditions."

17. FOREST & TREE DATA

Create a section showing:

Forest coverage

Canopy density

Tree species

Restoration suitability

Vulnerable areas

Charts:

Vegetation coverage

Current vs target vegetation

Area-wise vegetation density

18. DATA & ANALYTICS

Create a page:

Data & Analytics

Display data sources/categories:

Meteorological Data

Rainfall

Rainfall intensity

Temperature

Humidity

Cloudburst

Geographical Data

Elevation

Slope

Terrain

Environmental Data

Vegetation

Forest cover

Hydrological Data

River level

River flow

Dam capacity

Dam water level

Human Activity

Construction

Land-use changes

Create charts:

Rainfall over time

River level over time

Risk score over time

Flood-risk distribution

Vegetation coverage

Alert frequency

19. RISK TREND CHART

Create a time-series chart.

Example:

Last 24 hours:

Time | Risk Score

00:00 | 22
04:00 | 30
08:00 | 42
12:00 | 56
16:00 | 72
20:00 | 78

Make it interactive.

Allow:

24 Hours

7 Days

30 Days

20. ALERT HISTORY

Create:

Alert History

Table columns:

Alert ID

Location

Risk

Reason

Time

Audience

Status

Example statuses:

Sent

Delivered

Acknowledged

Resolved

Add filters:

Risk level

Location

Date

Status

21. AUTHORITY DASHBOARD

Create a dedicated authority interface.

Display:

Emergency Overview

Active high-risk areas

Critical zones

People potentially affected

Open shelters

Active evacuation routes

Pending alerts

Provide actions:

Send Alert

Open Evacuation Plan

View Risk Map

Assign Response Team

Update Shelter

Mark Incident Resolved

22. INCIDENT MANAGEMENT

Create an incident panel.

Fields:

Incident ID

Location

Risk level

Detected time

Assigned authority

Response status

Notes

Statuses:

Detected

Monitoring

Response Activated

Evacuation Active

Resolved

23. NOTIFICATION SYSTEM

Implement demo notifications.

Notification bell in header.

Examples:

🔴 Critical flood risk detected.

🟠 River level rising rapidly.

🟡 Moderate flood risk in nearby area.

🟢 Evacuation route updated.

Clicking a notification should open the relevant page.

24. EMERGENCY UI

Create a visible emergency status bar when risk becomes HIGH or CRITICAL.

Example:

⚠ HIGH FLOOD RISK — IMMEDIATE ATTENTION REQUIRED

Buttons:

VIEW ALERT

EVACUATION ROUTE

SAFE SHELTER

For CRITICAL risk, make the emergency state more prominent.

25. SYSTEM STATUS

Show:

AI Model

Online

Data Pipeline

Connected

GIS Service

Online

Alert Service

Operational

Database

Connected

Use green/yellow/red status indicators.

26. DEMO MODE

Because this is an academic project, create a fully functional DEMO MODE.

Add a toggle:

Demo Mode ON

The demo should allow the examiner to experience the complete workflow without external APIs.

Create sample data for:

Rainfall

River levels

Terrain

Vegetation

Dams

Risk zones

Shelters

Roads

Alerts

Clearly label simulated data as:

DEMO DATA

Do not present simulated information as real-time government or sensor data.

27. END-TO-END DEMO WORKFLOW

Create one button on the dashboard:

RUN COMPLETE FLOOD SCENARIO

When clicked, simulate this sequence:

1.

Heavy rainfall detected.

2.

River level begins rising.

3.

AI calculates increased flood risk.

4.

Risk becomes HIGH.

5.

AI explanation identifies major contributing factors.

6.

Alert is generated.

7.

Citizen notification appears.

8.

Authority notification appears.

9.

Risk map highlights affected area.

10.

Evacuation route is generated.

11.

Nearest safe shelter is displayed.

12.

Restoration analysis becomes available.

Show the sequence visually with progress indicators.

28. USER-FACING RESULT

The final dashboard should communicate the project's main output:

What Does the User Actually Get?

1. Flood Risk

High

2. Early Warning

Alert Sent

3. User Message

Move to Safety

4. Authority Alert

Response Required

5. Evacuation Map

Route Shown

6. Restoration Target

Identified

Final statement:

PREDICTION BECOMES ACTION.

29. FINAL SYSTEM FLOW

Display this visually on the dashboard:

DATA

↓

PREDICT

↓

EXPLAIN

↓

WARN

↓

MESSAGE

↓

EVACUATE

↓

RESTORE

↓

PREPARE

Also display:

MULTI-SOURCE DATA → AI FLOOD RISK PREDICTION → EARLY WARNING → PEOPLE + AUTHORITIES → GIS EVACUATION → SAFE DESTINATION → LONG-TERM RESTORATION

30. IMPORTANT UI REQUIREMENTS

Use:

Cards

Tables

Charts

Interactive maps

Modal dialogs

Toast notifications

Progress indicators

Status badges

Risk indicators

Responsive sidebar

Search

Filters

Use consistent icons from Lucide React.

Add hover states and smooth transitions.

Do not overcrowd the UI.

31. IMPORTANT SAFETY / ACCURACY REQUIREMENTS

This is a prototype/academic project.

Do NOT claim:

Real-time government warnings

Actual emergency dispatch

Guaranteed flood prediction

Guaranteed evacuation safety

Guaranteed effectiveness of vegetation restoration

Unless those services are actually connected.

Clearly mark simulated information as:

Demo Data

and model outputs as:

Model Simulation

When real ML/API integrations are added later, the labels can be updated.

32. FUTURE ML INTEGRATION

Structure the code so the demo prediction logic can later be replaced by a real ML API.

Create a service such as:

predictionService.ts

with a function conceptually like:

predictFloodRisk(inputData)

The frontend should not need to be redesigned when a real Python/Flask ML backend is connected.

Prepare the architecture for:

React Frontend

↓

REST API

↓

Python / Flask Backend

↓

ML Model

↓

Prediction + Feature Importance

↓

React Dashboard

33. FUTURE DATABASE STRUCTURE

Prepare Supabase tables conceptually for:

users

id

name

email

role

locations

id

name

latitude

longitude

flood_predictions

id

location_id

risk_score

risk_level

probability

timestamp

environmental_data

rainfall

rainfall_intensity

temperature

humidity

river_level

vegetation

elevation

slope

construction_activity

alerts

id

prediction_id

audience

message

status

timestamp

shelters

id

name

latitude

longitude

capacity

occupancy

status

evacuation_routes

id

start_location

destination

distance

estimated_time

status

restoration_projects

id

location

current_vegetation

target_vegetation

suitable_area

34. CODE QUALITY

Use reusable React components.

Suggested structure:

src/
components/
pages/
layouts/
services/
hooks/
data/
types/
utils/

Create reusable components such as:

RiskCard

RiskBadge

PredictionForm

RiskChart

RiskMap

AlertCard

NotificationPanel

EvacuationRoute

ShelterCard

RestorationAnalysis

KPIWidget

SystemStatus

Keep TypeScript types properly defined.

Avoid unnecessary duplicated code.

35. FINAL REQUIREMENT

Build the application so that when I run it, I can demonstrate the entire project in front of a project review panel:

Input environmental data

→ Predict flood risk

→ Show LOW / MODERATE / HIGH / CRITICAL

→ Explain why the risk occurred

→ Display risk on GIS map

→ Generate early warning

→ Notify citizen

→ Notify authority

→ Show evacuation route

→ Show safe shelter

→ Perform vegetation restoration analysis

→ Display analytics

→ Show complete prediction-to-action workflow

The final application should look like a polished final-year AI/ML major project rather than a simple template website.

Use the project title throughout:

AI-Based Mountain Flood & Flash-Flood Early Warning System

And the main tagline:

PREDICT. PROTECT. PREPARE.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8dd24066-445a-47f2-9e58-a87aafc5369c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
