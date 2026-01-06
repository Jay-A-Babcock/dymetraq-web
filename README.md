# DymeTraq Parent Site
  DymeTraq is a leading provider of cloud-based datasets focused on transparency and public disemmenation of lienage information The company offers a range of products and services, including datasets and APIs.
  The DymeTraq parent site is the main website for the company, which serves as the central hub for all DymeTraq products and services. The site is designed to be user-friendly and accessible, with a focus on providing valuable information and resources to visitors.

```

```
dymetraq-web
├─ app
│  ├─ about
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ authorities
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ [state]
│  │     ├─ layout.tsx
│  │     ├─ page.tsx
│  │     └─ [id]
│  │        ├─ layout.tsx
│  │        └─ page.tsx
│  ├─ contracts
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ [id]
│  │     ├─ layout.tsx
│  │     └─ page.tsx
│  ├─ dataset
│  │  ├─ matrix
│  │  │  └─ page.tsx
│  │  └─ page.tsx
│  ├─ entities
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ [id]
│  │     ├─ layout.tsx
│  │     └─ page.tsx
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ ORR
│  │  └─ page.tsx
│  └─ page.tsx
├─ cache
├─ components
│  ├─ AuthoritiesTree.tsx
│  ├─ AuthorityCard.tsx
│  ├─ AuthorityStats.tsx
│  ├─ ContractStats.tsx
│  ├─ EntityStats.tsx
│  ├─ StateCard.tsx
│  └─ Tree.tsx
├─ data
│  ├─ authorities
│  │  ├─ AL.json
│  │  ├─ CA.json
│  │  ├─ FL.json
│  │  ├─ GA.json
│  │  ├─ ID.json
│  │  ├─ IL.json
│  │  ├─ KS.json
│  │  ├─ MA.json
│  │  ├─ MN.json
│  │  ├─ MO.json
│  │  ├─ NC.json
│  │  ├─ NV.json
│  │  ├─ TX.json
│  │  ├─ VA.json
│  │  └─ WI.json
│  ├─ canonical_aliases.json
│  ├─ entities_by_state.json
│  ├─ official_names.json
│  └─ states.json
├─ lib
│  └─ types.ts
├─ mocks
│  ├─ contracts.json
│  └─ entities.json
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ private
│  ├─ diagrams-Dual Fact Table Star Schema.png
│  ├─ diagrams-Dual Fact Table Star Schema.svg
│  ├─ page_mockups-Section Pages.drawio.png
│  ├─ page_mockups-Site Wrapper.drawio.png
│  └─ page_mockups.drawio
├─ public
│  └─ img
│     ├─ DT_logo.png
│     └─ visuals
│        └─ contracts_by_state.png
├─ README.md
├─ tsconfig.json
└─ utils
   └─ authorities.ts

```