# CORFILS.AI - Ghid de Deployment

## 🚀 Deployment pe Vercel

### Prerequisite

1. **Cont Vercel** - Asigură-te că ai un cont pe [vercel.com](https://vercel.com)
2. **DNS Configurat** - Domeniul www.corfils.ro trebuie să aibă DNS-ul configurat
3. **Environment Variables** - Toate variabilele de mediu trebuie configurate

### Pași de Deployment

#### 1. Conectare GitHub (Recomandat)

\`\`\`bash
# Push codul pe GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/corfils-web.git
git push -u origin main
\`\`\`

Apoi în Vercel Dashboard:
- Click "Add New Project"
- Import repository-ul GitHub
- Vercel va detecta automat Next.js

#### 2. Deployment Direct din v0

- Click butonul "Publish" în v0
- Selectează proiectul Vercel
- Confirmă deployment-ul

### Configurare Domeniu

#### În Vercel Dashboard:

1. Mergi la **Project Settings → Domains**
2. Adaugă `www.corfils.ro`
3. Vercel va arăta DNS records necesare

#### La Registrar (GoDaddy/Namecheap/etc):

\`\`\`
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
\`\`\`

### Environment Variables

În Vercel Dashboard → **Settings → Environment Variables**, adaugă:

#### Obligatorii pentru Production:

\`\`\`env
NEXT_PUBLIC_SITE_URL=https://www.corfils.ro
NEXT_PUBLIC_SUPABASE_URL=<from_supabase>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<from_supabase>
SUPABASE_SERVICE_ROLE_KEY=<from_supabase>
POSTGRES_URL=<from_supabase>
\`\`\`

#### Opționale (dacă sunt folosite):

\`\`\`env
NEXT_PUBLIC_BASE_URL=https://api.corfils.ro
SAS_EED_API_KEY=<your_key>
ADMIN_TOKEN=<your_token>
\`\`\`

**Important:** Toate variabilele `NEXT_PUBLIC_*` sunt expuse în browser.

### Verificare Post-Deployment

#### 1. Health Check

\`\`\`bash
curl https://www.corfils.ro
# Ar trebui să returneze 200 OK
\`\`\`

#### 2. DNS Propagation

\`\`\`bash
nslookup www.corfils.ro
# Ar trebui să arate IP-ul Vercel
\`\`\`

#### 3. SSL Certificate

- Vercel generează automat certificat SSL
- Verifică că https:// funcționează
- Poate dura 1-5 minute după adăugarea domeniului

### Troubleshooting

#### Eroare: "Domain not found"
- Verifică că DNS-ul este configurat corect
- Așteaptă propagarea DNS (5-30 minute)

#### Eroare: "Build failed"
- Verifică logs în Vercel Dashboard
- Asigură-te că toate dependencies sunt în package.json

#### Eroare: "Environment variable missing"
- Verifică că toate variabilele necesare sunt setate
- Redeploy după adăugarea variabilelor

### Comenzi Utile

\`\`\`bash
# Verifică build local
npm run build

# Rulează production local
npm run start

# Verifică TypeScript errors
npm run lint
\`\`\`

### Monitoring

- **Analytics**: Vercel Analytics este deja integrat
- **Logs**: Accesează în Vercel Dashboard → Deployments → Logs
- **Performance**: Vercel Speed Insights (opțional)

### Rollback

Dacă ceva nu merge:
1. Mergi la Vercel Dashboard → Deployments
2. Găsește deployment-ul anterior funcțional
3. Click "..." → "Promote to Production"

### Support

- Vercel Docs: https://vercel.com/docs
- Supabase Docs: https://supabase.com/docs
- Next.js Docs: https://nextjs.org/docs

---

**Status:** ✅ Ready for deployment
**Domain:** www.corfils.ro
**Framework:** Next.js 16
**Database:** Supabase (Postgres)
