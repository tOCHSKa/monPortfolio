// L'URL de base de l'API
const apiUrl = process.env.NODE_ENV === 'production' ? 'https://mon-vps.com' : 'http://localhost:5000';

// Définir les routes spécifiques dans des variables
const apiRoutes = {
    getProjects: 'api/projects',
    getProjectById: (id) => `api/projects/${id}`,
    createProject: 'api/projects',
    deleteProject: (id) => `api/projects/${id}`,
    updateProject: (id) => `api/projects/${id}`,
    login: 'api/login',
    register: 'api/register',
};

// Exporter l'URL de l'API et les routes
export { apiUrl, apiRoutes };
