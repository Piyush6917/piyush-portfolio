import { useState } from "react";
import { Copy, Check, Terminal, Cpu, ShieldCheck } from "lucide-react";

interface HeroConsoleProps {
  onCopyNotice: (msg: string) => void;
}

export const HeroConsole = ({ onCopyNotice }: HeroConsoleProps) => {
  const [activeTab, setActiveTab] = useState<"python" | "infra" | "telemetry">("python");
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: "python", label: "network_ids.py", icon: Cpu },
    { id: "infra", label: "aws_ecs.tf", icon: Terminal },
    { id: "telemetry", label: "system_status.json", icon: ShieldCheck }
  ];

  const codeSnippets = {
    python: `# AI-Driven Network Intrusion Detection
import scapy.all as scapy
from sklearn.ensemble import HistGradientBoostingClassifier
import torch

class NetworkThreatEngine:
    def __init__(self, iface="eth0"):
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.classifier = self.load_threat_model()
        print(f"[+] Loaded hybrid model on {self.device}")

    def inspect_packet(self, pkt):
        if pkt.haslayer(scapy.IP):
            features = extract_flow_metrics(pkt)
            prob = self.classifier.predict_proba([features])[0]
            if prob[1] >= 0.94: # Anomaly threshold
                isolate_host(pkt[scapy.IP].src)
                return "ALERT: Threat Mitigated"
        return "STATUS: Normal Flow"`,

    infra: `# Production AWS Microservices Deployment
resource "aws_ecs_cluster" "ml_workloads" {
  name = "piyush-ml-cluster"
  setting {
    name  = "containerInsights"
    value = "enabled"
  }
}

resource "aws_ecs_task_definition" "api_worker" {
  family                   = "rag-inference-service"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "2048"
  memory                   = "4096"
  network_mode             = "awsvpc"
  execution_role_arn       = aws_iam_role.ecs_exec.arn
}`,

    telemetry: `{
  "engineer": "Piyush Pandey",
  "status": "ONLINE & AVAILABLE",
  "academic_track": "B.Tech CSE (Artificial Intelligence)",
  "research_publications": [
    "Journal of Network Security (2026)",
    "Journal of Multimedia Technology (2026)"
  ],
  "core_competencies": [
    "Machine Learning Pipelines",
    "Deep Learning (PyTorch)",
    "Cloud Architecture (AWS)",
    "Packet Inspection (Scapy)"
  ],
  "open_to": ["AI/ML Internship", "Cloud Engineering", "Full-Time"]
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    onCopyNotice(`Copied ${tabs.find((t) => t.id === activeTab)?.label} to clipboard!`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="hero-console-wrapper">
      {/* Glow Aura */}
      <div className="console-glow-aura" />

      <div className="hero-console">
        {/* Top window bar */}
        <div className="console-header">
          <div className="window-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>

          <div className="console-tabs">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`console-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                >
                  <Icon size={12} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="copy-code-btn"
            onClick={handleCopy}
            title="Copy snippet"
            aria-label="Copy snippet"
          >
            {copied ? <Check size={13} className="text-emerald" /> : <Copy size={13} />}
          </button>
        </div>

        {/* Console Body */}
        <div className="console-body">
          <pre className="code-content">
            <code>{codeSnippets[activeTab]}</code>
          </pre>
        </div>

        {/* Console Status Bar */}
        <div className="console-footer">
          <div className="footer-left">
            <span className="status-live-indicator" />
            <span>Interactive Terminal</span>
          </div>
          <div className="footer-right">
            <span className="tag-chip">PyTorch v2.3</span>
            <span className="tag-chip">AWS ECS</span>
            <span className="tag-chip">Python 3.12</span>
          </div>
        </div>
      </div>
    </div>
  );
};
