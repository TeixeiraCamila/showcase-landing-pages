# ✈️ Grounded - Luxury Travel & Eco-Tourism

> Viagens de luxo sustentável para exploradores conscientes. Experiências premium com impacto positivo.

## 📋 Descrição

Landing page premium para **Grounded** - agência de turismo especializada em viagens de luxo eco-sustentáveis. Apresenta destinos exóticos, pacotes personalizados e experiências autênticas combinadas com responsabilidade ambiental.

## ✨ Características

### 🎨 Design
- ✅ Design luxury e sofisticado
- ✅ Fotografia de alta qualidade
- ✅ Paleta de cores premium (terras, verdes)
- ✅ Animações elegantes
- ✅ Tipografia refinada

### 🌍 Sustentabilidade
- ✅ Badge de eco-friendly
- ✅ Informações sobre impacto ambiental
- ✅ Parcerias com ONGs
- ✅ Destinos com certificação verde
- ✅ Carbon offset information

### ⚡ Performance
- ✅ Lazy loading de imagens grandes
- ✅ Otimizações de vídeo
- ✅ WebP com fallback
- ✅ GZIP compression pronto
- ✅ Lighthouse 85+ esperado

### 🔍 SEO para Turismo
- ✅ Meta tags locais
- ✅ Schema TravelAgency (JSON-LD)
- ✅ Open Graph para viagens
- ✅ Structured data para locais
- ✅ Semantic HTML5

### ♿ Acessibilidade
- ✅ WCAG AA compliant
- ✅ ARIA labels e roles
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus indicators

## 📂 Estrutura de Arquivos

```
exemplo-05--grounded/
├── index.html           # Página principal
├── css/
│   ├── reset.css       # Reset de estilos
│   └── style.css       # Estilos customizados
├── js/
│   └── script.js       # Interatividade
├── assets/
│   └── images/         # Fotos de destinos
└── README.md           # Este arquivo
```

## 🎯 Seções

### 1. **Hero Section**
- Imagem ou vídeo de fundo
- Headline principal
- Subtítulo descritivo
- CTA para explorar

### 2. **Why Grounded**
- Diferencial da empresa
- Sustentabilidade
- Experiências autênticas
- Números de impacto

### 3. **Featured Destinations**
- 6-8 destinos principais
- Imagens aéreas
- Localização geográfica
- Descrição do destination

### 4. **Travel Packages**
- Pacotes pré-montados
- Duração e preço
- Itinerário
- "Learn More" button

### 5. **Sustainability Impact**
- Árvores plantadas
- CO2 compensado
- Comunidades ajudadas
- Projetos apoiados

### 6. **Testimonials**
- Reviews de viajantes
- Fotos da jornada
- Depoimentos autênticos
- Rating e data

### 7. **Contact & Booking**
- Formulário de contato
- Chat para cotação
- Informações de contato
- Links de redes sociais

## 📍 Destinos Principais

### Exemplo de Estrutura
```json
{
  "id": 1,
  "name": "Costa Rica - Eco-Lodges",
  "country": "Costa Rica",
  "region": "Zona Sur",
  "description": "Imersão completa na floresta tropical",
  "highlights": [
    "Floresta Tropical",
    "Ecoturismo",
    "Vida Selvagem"
  ],
  "image": "costa-rica-eco.jpg",
  "duration": "7 dias",
  "price": "5.500",
  "sustainability": "9/10",
  "difficulty": "Moderado"
}
```

## 🚀 Como Usar

### Desenvolvimento Local
```bash
# Abrir no navegador
open index.html

# Ou iniciar servidor local
python -m http.server 8000
# Acessar: http://localhost:8000
```

### Adicionar Novo Destino

**1. Preparar imagem:**
- Tamanho: 1200x800px (desktop), 600x400px (mobile)
- Format: WebP com fallback JPG
- Salvar em `assets/images/destino-novo.jpg`

**2. Editar HTML:**
```html
<div class="destination-card">
  <img src="assets/images/destino-novo.jpg" alt="Nome do Destino">
  <div class="card-content">
    <h3>Destino Novo</h3>
    <p class="location">País / Região</p>
    <p class="description">Descrição breve do destino</p>
    <div class="details">
      <span class="duration">7 dias</span>
      <span class="price">R$ 5.500</span>
    </div>
    <button class="btn-explore">Explorar Destino</button>
  </div>
</div>
```

**3. Registrar em `script.js` (se houver mapa interativo):**
```javascript
const destinations = [
  {
    id: 6,
    name: "Destino Novo",
    coordinates: { lat: -23.55, lng: -46.63 },
    image: "destino-novo.jpg"
  }
];
```

### Customizar Dados de Viagens

Em `js/script.js`:
```javascript
const packages = [
  {
    id: 1,
    title: "7 Days Costa Rica",
    destination: "Costa Rica",
    price: 5500,
    duration: "7 dias",
    image: "costa-rica.jpg",
    highlights: ["Floresta", "Natureza", "Sustentabilidade"]
  }
];
```

## 📊 Performance

### Lighthouse Scores
- **Performance:** 85+
- **SEO:** 95+
- **Accessibility:** 90+
- **Best Practices:** 95+

### Core Web Vitals
- FCP: ~1.8s (imagens grandes)
- LCP: ~2.5s
- CLS: <0.1

## 🔧 Tecnologias

- **HTML5** - Semantic markup
- **CSS3** - Grid e Flexbox
- **JavaScript** - Vanilla JS
- **Google Maps API** - Geolocalização
- **Vimeo/YouTube** - Vídeos embarcados
- **No frameworks** - Performance

## 📱 Responsividade

- ✅ Desktop (1920px+) - 3-4 cards
- ✅ Tablet (768px-1919px) - 2-3 cards
- ✅ Mobile (320px-767px) - 1-2 cards
- ✅ Touch-friendly
- ✅ Imagens responsivas

## 🌱 Sustentabilidade

### Métricas de Impacto
- **Árvores Plantadas:** 10.000+
- **CO2 Compensado:** 500+ toneladas
- **Comunidades:** 50+
- **Projetos:** 20+

### Badges e Certificações
- 🌿 Green Certified
- ♻️ Carbon Neutral
- 🏆 Eco-Tourism Award
- 🤝 Fair Trade Tourism

### Integração de Dados

Em `script.js`:
```javascript
const impactMetrics = {
  treesPlanted: 10500,
  carbonCompensated: 523, // toneladas
  communitiesHelped: 52,
  projectsSupported: 21,
  lastUpdated: "2024-12-01"
};
```

## 💳 Booking System

### Fluxo de Reserva
1. **Selecionar Destino** → 2. **Escolher Datas** → 3. **Personalizar Pacote** → 4. **Adicionar Serviços** → 5. **Checkout** → 6. **Confirmação**

### Serviços Adicionais
- Seguro de viagem
- Visto e documentação
- Transfers aeroporto
- Guia particular
- Fotografia profissional

## 🔐 Segurança

- ✅ HTTPS obrigatório
- ✅ Booking validation
- ✅ Proteção de dados pessoais
- ✅ LGPD compliance
- ✅ Secure payment gateway

## 📈 SEO para Turismo

**Meta Tags:**
- Title: "Grounded - Luxury Eco-Tourism & Sustainable Travel"
- Description: "Viagens de luxo sustentável para exploradores conscientes"
- Keywords: turismo, viagem, eco-tourism, luxo, sustentável

**Schema Markup - TravelAgency:**
```json
{
  "@type": "TravelAgency",
  "name": "Grounded",
  "description": "Agência de turismo sustentável",
  "areaServed": [
    "Costa Rica",
    "Peru",
    "Colômbia",
    "Equador"
  ],
  "knowsLanguage": ["pt", "en", "es"]
}
```

**Schema Markup - Local Business:**
```json
{
  "@type": "LocalBusiness",
  "name": "Grounded",
  "telephone": "+55 11 XXXX-XXXX",
  "email": "contato@grounded.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua X, 123",
    "addressLocality": "São Paulo",
    "addressCountry": "BR"
  }
}
```

## 📍 Google Maps Integration

```html
<div id="map" style="width: 100%; height: 500px;"></div>

<script>
  function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: { lat: 20, lng: 0 },
      styles: [] // Custom map style para tema luxury
    });
    
    destinations.forEach(dest => {
      const marker = new google.maps.Marker({
        position: dest.coordinates,
        map: map,
        title: dest.name
      });
    });
  }
</script>
```

## 📞 CRM Integration

Sistema de reservas integrável com:
- Salesforce CRM
- HubSpot
- Pipedrive
- Webhooks customizados

## 🚀 Deploy

### Requisitos
- SSL/TLS Certificate
- GZIP compression
- Image optimization
- CDN para assets

### Upload
```bash
# FTP
ftp> put -r exemplo-05--grounded/ /public_html/

# Git
git push origin main
```

## 📝 Checklist Pré-Deploy

- [ ] Testar booking system end-to-end
- [ ] Validar Google Maps API key
- [ ] Otimizar todas as imagens
- [ ] Testar vídeos/embeds
- [ ] Verificar Lighthouse (80+)
- [ ] Testar em mobile (iOS e Android)
- [ ] Validar meta tags
- [ ] Testar formulários
- [ ] Verificar links internos/externos
- [ ] Testar responsividade

## 🔗 Links Úteis

- [Google Maps Platform](https://developers.google.com/maps)
- [Schema.org TravelAgency](https://schema.org/TravelAgency)
- [Sustainable Tourism](https://www.unwto.org/sustainable-development)
- [Carbon Offset Programs](https://carbontrust.com/)

## 💡 Funcionalidades Futuras

- [ ] Blog de dicas de viagem
- [ ] Gallery com fotos de clientes
- [ ] Webinar sobre destinos
- [ ] App mobile para checklist
- [ ] Chat com especialistas
- [ ] Programa de referência

## 🐛 Troubleshooting

**Google Maps não carrega:**
- Verificar API key válida
- Validar domínio autorizado
- Testar em incógnito

**Imagens lentas:**
- Otimizar com ImageOptim
- Usar lazy loading
- Habilitar GZIP

**Vídeos stuttering:**
- Reduzir qualidade
- Usar players otimizados
- Testar conexão

## 📊 Analytics & Conversion

Rastreamento integrado:
- Google Analytics 4
- Conversão de bookings
- Micro-conversions
- Heatmaps (Hotjar)
- Session recordings

## 📄 Licença

Projeto parte do Showcase Landing Pages.

---

**Desenvolvido em:** Dezembro 2024  
**Última atualização:** 01 de Dezembro de 2024  
**Status:** ✅ Turismo Sustentável - SEO & Performance Otimizados

