# AdirebyWani Smart Commerce

A full-stack fashion e-commerce ecosystem with customer community, localized pricing, UK/custom measurements, and admin automation.

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0
- MongoDB connection string
- Cloudinary credentials

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd adirebywani-smart-commerce

# Install dependencies
npm install

# Setup environment files
npm run setup-env

# Update .env files with your credentials
```

### Configuration

**Backend (.env)**
```env
MONGO_URI=your-mongodb-connection
CLOUDINARY_NAME=your-cloud-name
CLOUDINARY_KEY=your-api-key
CLOUDINARY_SECRET=your-api-secret
JWT_SECRET=your-secret-key
DEFAULT_ADMIN_EMAIL=admin@example.com
PORT=5000
FRONTEND_URL=http://localhost:5173
```

**Frontend (.env)**
```env
VITE_API_URL=http://localhost:5000/api
VITE_FRONTEND_URL=http://localhost:5173
```

### Development

```bash
# Run both backend and frontend concurrently
npm run dev

# Or run separately
npm run backend    # Terminal 1
npm run frontend   # Terminal 2
```

### Testing

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage
```

### Linting

```bash
# Check for linting errors
npm run lint

# Fix linting errors
npm run lint:fix
```

### Production Build

```bash
# Build frontend
npm run build
```

## 📁 Project Structure

```
adirebywani-smart-commerce/
├── packages/
│   ├── backend/
│   │   ├── src/
│   │   │   ├── server.js
│   │   │   ├── models/       (MongoDB schemas)
│   │   │   ├── routes/       (API endpoints)
│   │   │   ├── middleware/   (Express middleware)
│   │   │   └── utils/        (Helper functions)
│   │   ├── package.json
│   │   └── .env.example
│   └── frontend/
│       ├── src/
│       │   ├── pages/        (Page components)
│       │   ├── components/   (Reusable components)
│       │   ├── App.jsx
│       │   ├── main.jsx
│       │   └── index.css
│       ├── index.html
│       ├── package.json
│       └── .env.example
├── scripts/
│   └── setup-env.js          (Environment setup)
├── .gitignore
├── package.json              (Workspace root)
└── README.md
```

## 🛠️ Tech Stack

### Backend
- **Express.js** - Web framework
- **MongoDB + Mongoose** - Database
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **Cloudinary** - Image hosting
- **Multer** - File uploads
- **CORS** - Cross-origin requests

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool
- **React Router DOM** - Routing
- **Tailwind CSS** - Styling
- **Axios** - HTTP client

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Run backend and frontend concurrently |
| `npm run backend` | Run backend only |
| `npm run frontend` | Run frontend only |
| `npm run build` | Build frontend for production |
| `npm run test` | Run all tests |
| `npm run lint` | Check for linting errors |
| `npm run lint:fix` | Fix linting errors |
| `npm run setup-env` | Initialize environment files |

## 🔒 Security

- JWT authentication configured
- Password hashing with bcrypt
- CORS enabled for frontend origin only
- Environment variables for sensitive data
- Input validation on backend

## 📦 Available Endpoints

- `GET /api/health` - Health check

## 🚀 Deployment

Ready for deployment on:
- Heroku
- Vercel (frontend)
- AWS
- DigitalOcean

## 📄 License

Private project

## 👤 Author

AdirebyWani

## 💬 Support

For support, email: adirebywani@outlook.com
