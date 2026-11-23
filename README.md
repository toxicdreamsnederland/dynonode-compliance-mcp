# DynoNode Compliance MCP — WCAG 2.2 AA, US ADA, EU EAA & EU AI Act

[![WCAG 2.2 AA Checked](https://wcag.dynonode.com/badge/wcag.svg?domain=wcag.dynonode.com)](https://wcag.dynonode.com)
[![EU AI Act Classified](https://aiact.dynonode.com/badge/aiact.svg?tier=art50)](https://aiact.dynonode.com)

Free, deterministic, zero-hallucination **Remote Streamable-HTTP MCP Server**, **CLI**, and **GitHub Action** for developers, SaaS teams, and web agencies:

1. **`audit_url_wcag22`** — Audits any public URL against static-DOM **WCAG 2.2 Level AA**, **US ADA Title III**, and **EU European Accessibility Act (EAA / EN 301 549)** rules (missing `<html lang>`, `<img alt>`, empty icon links without `aria-label`, missing `<main>` / `<h1>`, blocked mobile viewport zoom).
2. **`classify_eu_ai_act`** — Evaluates AI features deterministically against **Regulation (EU) 2024/1689** (Article 5 Prohibited, Annex III High-Risk, Article 50 Transparency, Article 4 AI Literacy).

---

## 1. Zero-Install Remote MCP Setup (Cursor, Claude, Windsurf, VS Code)

No API key or local binary needed — connect directly over HTTPS:

```json
{
  "mcpServers": {
    "dynonode-compliance": {
      "url": "https://wcag.dynonode.com/mcp"
    }
  }
}
```

## 2. CI/CD GitHub Action (Fail PRs on Accessibility Regressions)

```yaml
name: Accessibility Gate
on: [push, pull_request]
jobs:
  wcag-audit:
    runs-on: ubuntu-latest
    steps:
      - uses: toxicdreamsnederland/dynonode-compliance-mcp@main
        with:
          url: 'https://your-staging-or-prod-site.com'
          min_score: '80'
```

## 3. CLI Usage (`npx`)

```bash
npx -y github:toxicdreamsnederland/dynonode-compliance-mcp audit https://example.com
npx -y github:toxicdreamsnederland/dynonode-compliance-mcp ai-act "Customer support AI chatbot on EU SaaS"
```

## 4. Free Live Compliance Badges for Your README or Footer

```markdown
[![WCAG 2.2 AA Check](https://wcag.dynonode.com/badge/wcag.svg?domain=yourdomain.com)](https://wcag.dynonode.com/ada-compliance-audit?domain=yourdomain.com)
[![EU AI Act Check](https://aiact.dynonode.com/badge/aiact.svg?tier=art50)](https://aiact.dynonode.com)
```

## Full Reports & Self-Serve Toolkits
- **A11y Sentinel (Free 1-URL Scan · €29 50-Page Batch Audit):** [https://wcag.dynonode.com](https://wcag.dynonode.com)
- **EU AI Act Sentinel (Free 2-Min Classifier · €49 Conformity Dossier PDF):** [https://aiact.dynonode.com](https://aiact.dynonode.com)
- **SupaLaunch Kit (Next.js 15 + Supabase RLS + Atomic AI Credit Caps · €69):** [https://supalaunch.dynonode.com](https://supalaunch.dynonode.com)
- **SQLPulse MCP (Read-Only SQL & EXPLAIN MCP Server):** [https://sqlpulse.dynonode.com](https://sqlpulse.dynonode.com)
