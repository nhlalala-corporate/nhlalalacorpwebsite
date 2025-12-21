# API Contracts: Nhlalala Corporate Website

## Contact Form API

### POST /api/contact

Submit a contact form inquiry.

**Request**:
```json
{
  "name": "string (required)",
  "email": "string (required, valid email format)",
  "phone": "string (optional)",
  "message": "string (required, 10-1000 characters)",
  "serviceInterest": "string (optional, service name)"
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "message": "Contact form submitted successfully"
}
```

**Response (400 Bad Request)**:
```json
{
  "success": false,
  "errors": ["Array of validation error messages"]
}
```

## Newsletter Signup API

### POST /api/newsletter

Subscribe to the newsletter.

**Request**:
```json
{
  "email": "string (required, valid email format)"
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter"
}
```

**Response (400 Bad Request)**:
```json
{
  "success": false,
  "errors": ["Array of validation error messages"]
}
```

## Services API

### GET /api/services

Retrieve all available services.

**Response (200 OK)**:
```json
{
  "services": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "category": "string",
      "icon": "string (optional)",
      "features": ["array of strings"]
    }
  ]
}
```

## Clients API

### GET /api/clients

Retrieve client testimonials and case studies.

**Response (200 OK)**:
```json
{
  "clients": [
    {
      "id": "string",
      "name": "string",
      "industry": "string",
      "logo": "string (optional)",
      "testimonial": "string (optional)",
      "caseStudy": "string (optional)"
    }
  ]
}
```

## Team API

### GET /api/team

Retrieve team member information.

**Response (200 OK)**:
```json
{
  "team": [
    {
      "id": "string",
      "name": "string",
      "position": "string",
      "bio": "string (optional)",
      "image": "string (optional)",
      "email": "string (optional)"
    }
  ]
}
```

## Validation Rules

- All email addresses must follow standard email format
- All string fields must be trimmed of leading/trailing whitespace
- All message fields must be between 10-1000 characters
- Phone numbers should follow international format
- All API responses must include appropriate HTTP status codes
- All error responses must follow the format: `{"success": false, "errors": ["..."]}`