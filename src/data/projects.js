export const projects = [
  {
    id: 'market-analysis-airbnb',
    title: 'Dashboard Interactivo Mercado Inmobiliario',
    shortDescription: 'Exploración de precios y estacionalidad de Airbnb en Buenos Aires.',
    tags: ['Power BI', 'Python', 'Storytelling'],
    category: 'Data Analysis',
    problem: '¿Cómo varían los precios de alquiler temporal según el barrio y la temporada?',
    role: 'Lead Data Analyst',
    tools: 'Python (Pandas, Plotly), Power BI, Scikit-learn',
    process: [
      'Recolección de datos desde Inside Airbnb.',
      'Limpieza y pre-procesamiento con Pandas.',
      'Análisis exploratorio de datos (EDA).',
      'Desarrollo del dashboard en Power BI.'
    ],
    impact: 'Identificación de oportunidades de inversión con un ROI un 15% superior al promedio.',
    featured: true,
    gallery: [] 
  },
  {
    id: 'mmm-ecommerce',
    title: 'Marketing Mix Modeling (MMM) E-commerce',
    shortDescription: 'Optimización de presupuesto publicitario mediante modelado econométrico.',
    tags: ['Python', 'Robyn', 'Statsmodels'],
    category: 'MMM',
    problem: '¿Cuál es el ROI real de cada canal de marketing y cómo optimizar el presupuesto?',
    role: 'Senior Data Analyst',
    tools: 'Python, Robyn (Meta), Statsmodels, Bayesian Regression',
    process: [
      'Ingesta de datos de ventas e inversión publicitaria.',
      'Tratamiento de adstock y saturación de canales.',
      'Entrenamiento de modelos de regresión bayesiana.',
      'Cálculo de marginal ROI (mROI).'
    ],
    impact: 'Redistribución del 20% del presupuesto logrando un incremento del 12% en ventas totales.',
    featured: true,
    gallery: []
  },
  {
    id: 'customer-support-nlp',
    title: 'Clasificador de Tickets de Soporte con IA',
    shortDescription: 'Automatización de clasificación de tickets usando NLP.',
    tags: ['Python', 'Hugging Face', 'FastAPI'],
    category: 'IA',
    problem: 'Clasificación manual lenta y propensa a errores de miles de tickets diarios.',
    role: 'AI Developer',
    tools: 'Python, BERT, Hugging Face Transformers, FastAPI',
    process: [
      'Etiquetado de dataset de tickets históricos.',
      'Fine-tuning de modelo BERT.',
      'Implementación de API con FastAPI.',
      'Containerización con Docker.'
    ],
    impact: 'Reducción del tiempo de respuesta inicial en un 40% mediante ruteo inteligente.',
    featured: true,
    gallery: []
  }
];
