# Data Model: Nhlalala Corporate Website

## Entity Definitions

### Service
Represents an ICT service offering

- **name**: string (required) - The name of the service
- **description**: string (required) - Detailed description of the service
- **category**: string (required) - Category of the service (e.g., "Infrastructure", "Development", "Consulting")
- **icon**: string (optional) - Icon identifier for the service
- **features**: array of strings - Key features/benefits of the service

### Client
Represents a client company (for case studies/testimonials)

- **name**: string (required) - The name of the client company
- **industry**: string (required) - Industry sector of the client
- **logo**: string (optional) - Path to client logo image
- **testimonial**: string (optional) - Client testimonial quote
- **caseStudy**: string (optional) - URL to detailed case study

### Contact
Represents contact information

- **email**: string (required) - Primary contact email
- **phone**: string (required) - Primary contact phone number
- **address**: object (required) - Physical address details
  - **street**: string (required)
  - **city**: string (required)
  - **country**: string (required)
  - **postalCode**: string (optional)
- **hours**: string (optional) - Business hours information

### TeamMember
Represents a team member profile

- **name**: string (required) - Full name of the team member
- **position**: string (required) - Job title/position
- **bio**: string (optional) - Brief biography
- **image**: string (optional) - Path to profile image
- **email**: string (optional) - Direct email contact

## Relationships

- A **Service** belongs to one **category** but there are no foreign keys since data is stored statically
- A **Client** may be associated with multiple completed **Service** projects (conceptual relationship for case studies)
- The **Contact** entity contains information that may be referenced from multiple pages

## Validation Rules

- All required fields must be present in the data
- Email fields must follow standard email format
- Phone numbers should follow international format (+XX XXX XXX XXXX)
- URLs must be valid and accessible
- Service descriptions must be between 50-500 characters
- Client names must be unique within the client list

## State Transitions

This is a static website with no dynamic states, but for contact forms:

- **Contact Form**: `Initial` → `Submitted` → `Processing` → `Success/Error`
- **Newsletter Signup**: `Initial` → `Submitted` → `Processing` → `Success/Error`

## API Contracts

All data is served statically via the Nuxt.js application, but if APIs were needed in the future:

- GET `/api/services` - Returns list of all services
- GET `/api/services/{id}` - Returns specific service details
- GET `/api/clients` - Returns list of clients/case studies
- POST `/api/contact` - Submits contact form (would require backend)
- GET `/api/team` - Returns team member information