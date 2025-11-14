# Shopify POS integration for Skio subscriptions
**Skio Documentation | Product Release Documentation Plan**

**Prepared by:** Alysa Andrews, Technical Content Writer  
**Prepared for:** Katrina Feliciano, Technical Content Writer  
**Last updated:** November, 15 2025

---

## Introduction

### Purpose of document

This document outlines the complete documentation plan for Skio's Shopify POS integration release. This integration enables the Skio subscriptions app to work with Shopify POS, allowing merchants to sell subscriptions in person through their POS systems. This plan identifies all external Skio Help Center documentation and internal knowledge base content needed to support this feature launch.

The document is designed for technical writers, documentation managers, support leads and product teams who need to understand what content must be created, updated or maintained to successfully launch and support POS subscription functionality. All documentation will follow Skio's established style guides and content standards.

**Release details:**
- **Feature:** Shopify POS integration for the Skio subscriptions app, enabling in-person subscription sales
- **Target Launch:** [Date TBD]
- **Documentation Owner:** Technical Writing Team

**Note:** This document distinguishes between existing Skio Help Center articles that need updates (with URLs researched and linked) and new articles that need to be created. Some articles with exact titles may not exist in the Skio Help Center and may need to be created or content added to related existing articles.

---

## User persona

### Who we're building for
**Aly Anne Photography** is a small photography business based in Ottawa, Ontario, operating both online and through a local studio with Shopify POS. The business offers photography services for weddings, events and portraits, with a focus on building recurring revenue through subscription offerings. 

With the new Skio integration for Shopify POS, Aly can now sell subscription packages directly to clients during in-person consultations at her studio. For example, she can offer mini session subscriptions where clients commit to monthly portrait sessions, or monthly print subscriptions where customers receive curated prints each month. 

This POS integration enables her to activate subscriptions immediately during face-to-face interactions, creating a seamless experience for clients who prefer to sign up in person rather than online. The integration helps bridge her online and in-store presence, allowing her to grow her subscription revenue through both channels while maintaining consistent customer experiences.

---

## Documentation overview

All external Skio Help Center documentation follows Skio's **Help Center Style Guide** - task-focused, straight-to-the-point how-to guides. Content should be direct, action-oriented and minimal. Focus on "how" not "why."

**Style guide compliance:** All Skio Help Center content must adhere to Skio's established style guidelines, including sentence case for headers (except titles), no em dashes or Oxford commas, and direct task-focused language.

---

## External documentation (Skio Help Center)

### Updates to existing articles

| Article | URL | Update Type | Audience | Changes Required |
|---------|-----|-------------|----------|------------------|
| Setting up subscriptions in Skio | [Onboarding Guides](https://help.skio.com/hc/en-us/articles/16802906926363-Onboarding-Guides) | Content addition | Merchant admins | Add POS configuration requirements, hardware compatibility and in-person subscription activation workflow |
| Managing subscription products | [Adding Products](https://help.skio.com/hc/en-us/articles/16802518612507-Adding-Products) | Content addition | Merchant admins | Add guidance on product visibility in POS, subscription product selection during checkout and customer selection options |
| Connecting Shopify POS to your store | *May need to create* - [Related: Self-Serve Install](https://help.skio.com/hc/en-us/articles/25016236562203-Self-serve-install-setup) | Major revision or New | Merchant admins, technical staff | Document how to integrate Shopify POS with Skio subscriptions app. Include connection steps, subscription settings, sync verification and troubleshooting |
| Managing customer subscriptions | [Skio Admin Overview](https://help.skio.com/hc/en-us/articles/18705252455451-Skio-admin-overview) | Content addition | Merchant admins, support staff | Add section on POS subscription purchases, customer portal access for POS customers and subscription management differences between online and POS |
| Common subscription issues and solutions | *May need to create* - [Related: Admin Overview](https://help.skio.com/hc/en-us/articles/18705252455451-Skio-admin-overview) | Content addition or New | Merchant admins, support staff | Add troubleshooting scenarios for POS subscription failures, sync issues between POS and online subscriptions and payment processing differences |

### New articles to create

| Article | Audience | Purpose | Style | Priority |
|---------|----------|---------|-------|----------|
| Selling subscriptions in person with Shopify POS | Merchant admins | Overview guide explaining how Skio subscriptions app works with Shopify POS | Skio Help Center (direct, task-focused overview) | Must-have |
| Setting up subscriptions for POS sales | Merchant admins | Step-by-step how-to for configuring Skio subscriptions app for Shopify POS use | Skio Help Center (direct, task-focused, numbered steps) | Must-have |
| Processing subscription sales at checkout | Merchant staff, cashiers | Operational how-to guide for staff selling Skio subscriptions in person | Skio Help Center (direct, task-focused, quick reference) | Must-have |
| Managing subscriptions created through POS | Merchant admins | How-to guide for managing Skio subscriptions sold in person versus online | Skio Help Center (direct, task-focused) | High |
| POS subscription features and limitations | Merchant admins, support staff | Quick reference outlining what works and what does not for Skio subscriptions in Shopify POS | Skio Help Center (direct reference, minimal explanation) | Medium |
| Subscription product requirements for POS | Merchant admins | Technical requirements and compatibility reference guide | Skio Help Center (direct, technical reference) | Medium |
| Troubleshooting POS subscription issues | Merchant admins, support staff | Dedicated troubleshooting how-to guide for Skio subscription problems in Shopify POS | Skio Help Center (direct, problem-solution format) | High |

---

## Internal documentation (Knowledge Base)

### Updates to existing content

| Article | Update Type | Audience | Changes Required |
|---------|-------------|----------|------------------|
| Handling subscription support requests | Major revision | Customer support agents | Add POS-specific support scenarios, troubleshooting steps for POS-specific problems and escalation paths for complex POS subscription cases |
| Subscription billing and payment troubleshooting | Content addition | Customer support agents, billing team | Add information about POS payment processing, differences in payment methods and how to handle payment issues for POS-created subscriptions |
| Skio API documentation | Content addition | Developers, technical support | Add API endpoints for POS subscription data, webhook events for POS subscriptions and integration examples for POS subscription management |

### New articles to create

| Article | Audience | Purpose | Priority |
|---------|----------|---------|----------|
| POS subscription support playbook | Customer support agents | Comprehensive guide for supporting POS subscription customers | Must-have |
| POS subscription error codes and solutions | Customer support agents, technical support | Quick reference for POS subscription error messages | Must-have |
| Training guide: Supporting POS subscriptions | New support agents, training team | Training material for onboarding support staff | High |
| POS subscription technical architecture | Developers, technical support, engineering | Technical documentation for POS subscription system | Medium |
| POS subscription data sync and reconciliation | Technical support, operations team | Guide for understanding and troubleshooting data sync | Lower |
| POS subscription monitoring and alerts | Operations team, technical support | Guide for monitoring POS subscription health | Lower |
| POS subscription release notes and known issues | All internal teams | Centralized information about POS subscription release | Medium |

---

## Cross-linking strategy

| From Article | To Article | Purpose |
|--------------|------------|---------|
| Setting up subscriptions in Skio | Setting up subscriptions for POS sales | Guide merchants from general setup to POS-specific configuration |
| Processing subscription sales at checkout | Managing subscriptions created through POS | Connect operational guide to management workflow |
| All POS articles | POS subscription features and limitations | Provide quick reference for capabilities and limitations |
| Troubleshooting articles | POS subscription error codes and solutions | Link problem identification to error resolution |
| Merchant articles | Relevant support playbooks (internal) | Connect external content to internal support resources |

---

## Style guide and content standards

### Style guide alignment

All Skio documentation must follow established style guides:

- **External Skio Help Center Content:** Follows Skio's Help Center Style Guide - direct, task-focused, straight-to-the-point how-to guides
- **Content Focus:** "How" not "why" - minimal context, maximum action
- **Tone:** Direct and clear, no conversational flourishes
- **Format:** Step-by-step instructions, quick reference formats, problem-solution structures
- **Formatting Rules:** Sentence case for all headers (except titles), no em dashes or Oxford commas

### Audience-specific needs

| Audience | Content Needs | Style |
|----------|---------------|-------|
| Merchant admins | Clear, direct setup instructions and management workflows | Skio Help Center style |
| Merchant staff/cashiers | Simple, actionable checkout instructions in quick reference format | Skio Help Center style |
| Support agents | Comprehensive troubleshooting and resolution guides | Skio Help Center style |
| Developers/Technical | API documentation and system architecture details | Technical reference style |

### Content considerations

**Content gaps to address:**
- Customer-facing content about POS subscriptions (if needed)
- Partner/developer integration guides (if applicable)
- Migration guides for merchants moving from online-only to POS subscriptions

**Future content considerations:**
- Video tutorials for POS subscription setup
- Interactive walkthroughs for cashier training
- Advanced configuration guides for complex use cases
- Best practices guide for POS subscription management
