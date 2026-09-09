# 🚀 Landing Page Valorco - BPO & Gestão Condominial (Mobile-First & CRO)

Landing page de altíssima conversão (CRO) desenhada especificamente para receber tráfego vindo do **Instagram (Link na Bio e Anúncios de Tráfego/Mensagens)** e converter visitantes diretamente em leads qualificados no **WhatsApp**.

---

## 🎨 Identidade & Estilo Aplicados
- **Estilo Visual:** SaaS / Fintech premium moderno (clean, minimalista, confiável e corporativo).
- **Tipografia:** `Plus Jakarta Sans` via Google Fonts (alta legibilidade em smartphones).
- **Paleta de Cores:**
  - **Fundo:** Branco (`#FFFFFF`) e Cinza Ultra Claro (`#F8F9FA`).
  - **Cor Primária:** Azul Marinho Profundo (`#0F2942`) e Azul Royal Institucional (`#1D4ED8`).
  - **Cor de Ação / CTA:** Verde Oficial do WhatsApp (`#25D366` / hover `#1EBE5D`).
  - **Contraste & Badges:** Tons de Laranja/Coral para diferenciação e destaque.
- **Componentes:** Cards com cantos arredondados (16px a 24px), sombras suaves (`box-shadow: soft`), espaçamentos generosos e toques ergonômicos (alvos de toque mínimos de 48px).

---

## 📱 Estrutura Seção por Seção (Mobile-First)

1. **[Header Fixo]:**
   - Logo estilizada da Valorco (com indicação rápida para troca pela logo nova).
   - Botão rápido de ação: `Pedir Proposta` com indicador online pulsante.
2. **[Seção 1: Hero (Primeira Tela / Acima da Dobra)]:**
   - Selo social proof com avaliação 4.9★ e atendimento rápido.
   - Headline: *"Gestão e BPO Condominial sem dor de cabeça para o seu condomínio."*
   - Subtítulo objetivo de 2 linhas.
   - CTA Principal: `[ Falar com um Especialista no WhatsApp → ]` com animação de pulso suave.
   - Elemento Visual: Mockup de smartphone renderizado em CSS/SVG com dashboard de gestão condominial da Valorco (saldo conciliado, régua automática e adimplência de 98.4%).
3. **[Seção 2: Para Quem É (Segmentação Rápida)]:**
   - **Card 1: Para Síndicos Moradores** (elimina sobrecarga, cobrança de vizinhos e reuniões estressantes).
   - **Card 2: Para Síndicos Profissionais & Condomínios** (suporte técnico, BPO completo e agilidade jurídica).
4. **[Seção 3: Serviços Essenciais (Grid 2x2 no Mobile)]:**
   - 1. Gestão Financeira & BPO
   - 2. Cobrança & Boletos (PIX + Código de barras)
   - 3. Suporte Administrativo
   - 4. Assessoria Jurídica
5. **[Seção 4: Diferenciais Objetivos]:**
   - Checkmarks verdes destacados (Atendimento humanizado no WhatsApp, redução da inadimplência e prestação 100% transparente).
   - Card comparativo de alto impacto CRO: *"Antes (Gestão tradicional) vs. Depois (Com a Valorco)"*.
6. **[Seção 5: Como Funciona (Passo a Passo)]:**
   - Fluxo numerado em 3 etapas (`01. Primeiro Contato`, `02. Diagnóstico Gratuito`, `03. Solução Sob Medida`).
7. **[Seção 6: Prova Social & Confiança]:**
   - Avaliação ⭐⭐⭐⭐⭐ (4.9/5).
   - Depoimento real destacado do síndico Carlos Eduardo M.
   - Métricas comprovadas (-42% inadimplência, 100% pastas no prazo, <10min resposta).
8. **[Seção 7: CTA Final + Rodapé]:**
   - Chamada de fechamento: *"Pronto para profissionalizar a gestão do seu condomínio?"*
   - Botão: `[ Solicitar Proposta Personalizada ]`.
   - Rodapé institucional completo: Contatos, WhatsApp `(73) 3026-6726`, e-mail, Instagram `@acondadministracao`, endereço e dados legais.
9. **[Componente Global Obrigatório: Botão Flutuante do WhatsApp]:**
   - Fixo no canto inferior direito.
   - Efeito radar/pulse permanente.
   - Selo de notificação "1" não lida (gatilho psicológico de alta taxa de clique).
   - Mensagem padrão pré-preenchida no WhatsApp: *"Olá! Gostaria de uma proposta de gestão para o meu condomínio."*

---

## ⚙️ Como Personalizar

### 1. Como alterar o número do WhatsApp e mensagens pré-definidas
No arquivo `index.html`, logo no início da tag `<body>`, você encontra o objeto `VALORCO_CONFIG`:

```javascript
const VALORCO_CONFIG = {
  phone: "557330266726", // DDI + DDD + Número sem traços ou espaços
  phoneFormatted: "(73) 3026-6726",
  email: "valor@valorco.com.br",
  instagram: "https://instagram.com/acondadministracao",
  defaultMessage: "Olá! Gostaria de uma proposta de gestão para o meu condomínio.",
  // Cada botão pode ter uma mensagem específica para você saber exatamente de qual seção o lead veio!
};
```

### 2. Como trocar o logotipo quando a logo nova for enviada
No `index.html`, procure pelo comentário `<!-- LOGO VALORCO -->` e substitua pelo elemento de imagem:
```html
<img src="assets/logo.png" alt="Valorco BPO e Gestão Condominial" class="h-8 w-auto">
```

### 3. Como rastrear conversões (Meta Ads / Instagram / Google Ads)
A função `trackAndOpenWa(source, customMsg)` já vem pronta com ganchos para:
- `fbq('track', 'Contact')` (Meta Pixel / Instagram Ads)
- `gtag('event', 'generate_lead')` (Google Analytics / Google Ads)

Basta colar a tag do seu Meta Pixel ou Google Tag Manager no `<head>`.

---

## 💻 Como Visualizar Localmente
Basta abrir o arquivo `index.html` em qualquer navegador (Google Chrome, Edge, Safari, Firefox), ou usar uma extensão como Live Server no VS Code / rodar um servidor web simples com Node.js ou Python.
