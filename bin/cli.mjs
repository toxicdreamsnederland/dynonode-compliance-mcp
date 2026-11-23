#!/usr/bin/env node
const [cmd, target, ...rest] = process.argv.slice(2);
const endpoint = 'https://wcag.dynonode.com/mcp';

async function callMcpTool(name, args) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name, arguments: args } })
  });
  const json = await res.json();
  const text = json?.result?.content?.[0]?.text;
  if (!text) {
    console.error('MCP error:', JSON.stringify(json, null, 2));
    process.exit(1);
  }
  return JSON.parse(text);
}

if (cmd === 'audit' && target) {
  const minScore = Number((rest.find(a => a.startsWith('--min-score=')) || '').split('=')[1] || 0);
  const report = await callMcpTool('audit_url_wcag22', { url: target });
  console.log(JSON.stringify(report, null, 2));
  if (minScore > 0 && typeof report.staticDomScore === 'number' && report.staticDomScore < minScore) {
    console.error(`WCAG static score ${report.staticDomScore} is below threshold ${minScore}`);
    process.exit(2);
  }
  process.exit(0);
}

if (cmd === 'ai-act' && target) {
  const report = await callMcpTool('classify_eu_ai_act', { system_description: [target, ...rest].join(' ') });
  console.log(JSON.stringify(report, null, 2));
  process.exit(0);
}

console.log(`DynoNode Compliance CLI & Remote MCP Wrapper v1.0.0
Usage:
  npx -y github:toxicdreamsnederland/dynonode-compliance-mcp audit https://example.com [--min-score=80]
  npx -y github:toxicdreamsnederland/dynonode-compliance-mcp ai-act "Customer support chatbot for EU webshop"

Remote Streamable-HTTP MCP Endpoint (zero install):
  https://wcag.dynonode.com/mcp
  https://aiact.dynonode.com/mcp`);
