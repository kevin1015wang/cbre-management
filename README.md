## Project Overview
The **CBRE Eco-Conscious Locations Dashboard** is an initiative to centralize and manage data about environmentally sustainable properties under CBRE's management. This database enables CBRE to showcase their commitment to sustainability, track green initiatives, and improve operational efficiencies across eco-friendly locations.

---

## Features
- **Location Details**: Maintain detailed records of each location, including size, type, and geographical data.
- **Energy and Resource Metrics**: Record and analyze data on energy consumption, water usage, and waste management.
- **Renewable Energy Integration**: Monitor properties with renewable energy installations like solar panels or wind turbines.
- **Eco-Initiatives**: Document ongoing or completed projects that improve environmental sustainability.

---

## Dashboard Schema

### Tables Overview
1. **Energy Usage**
   - ID (Primary Key)
   - Name
   - Address
   - City
   - State
   - Country
   - Property Type (e.g., Office, Retail, Industrial)

2. **Water Usage**
   - ID (Primary Key)
   - Location ID (Foreign Key)
   - Energy Source (e.g., Solar, Wind, Grid)
   - Monthly Consumption (kWh)
   - Renewable Percentage (%)

3. **Water Usage**
   - ID (Primary Key)
   - Location ID (Foreign Key)
   - Monthly Consumption (gallons)
   - Recycled Water Percentage (%)

4. **Waste Management**
   - ID (Primary Key)
   - Location ID (Foreign Key)
   - Monthly Waste Generated (lbs)
   - Percentage Recycled (%)

5. **Carbon Footprint**
   - ID (Primary Key)
   - Location ID (Foreign Key)
   - Initiative Name
   - Description
   - Start Date
   - Completion Date (if applicable)

---

## Use Cases

### 1. **Property Management**
   - **Who**: Property Managers
   - **Why**: Easily access detailed environmental data for each property to ensure compliance and optimize operations.

### 2. **Sustainability Reporting**
   - **Who**: CBRE corporate sustainability team
   - **Why**: Generate custom reports to highlight green initiatives and support environmental certifications.

### 3. **Client Communication**
   - **Who**: CBRE clients and stakeholders
   - **Why**: Showcase the company’s eco-conscious efforts and the value of sustainably managed properties.

---

## Goals
1. Enhance transparency around CBRE’s environmental impact.
2. Enable data-driven decisions to improve sustainability practices.
3. Provide a competitive edge in eco-conscious property management.

---

## Future Enhancements
- **API Integration**: Develop APIs to integrate with other CBRE tools and external sustainability tracking systems.
- **IoT Data Feeds**: Automate data collection from smart meters and IoT devices.
- **Carbon Footprint Calculator**: Add functionality to estimate and track carbon emissions per property.

---

## Contact Information
For more information or to contribute to the project, contact:

- **Project Manager/UX/UI Designer**: Kevin Wang  
  **Email**: kevindw@umich.com 

- **Frontend Developer/Backend Developer**: Jerica Yuan
  **Email**: jxyuan@uci.edu

- **Frontend Developer/Backend Developer**: Siddharth Sriram
  **Email**: siddharth.sriram1292@gmail.com

- **Frontend Developer/Backend Developer**: Taylor Klinsky
  **Email**: Taylor.Klinsky@UTDallas.edu



