---
title: Dify Workflow Builder
summary: 根据流程图、截图或文字描述，生成可直接导入 Dify 的工作流或 Agent DSL。
category: 流程图与工作流
tags:
  - Dify
  - Workflow
  - Agent
  - DSL
featured: true
heroNote: 从流程逻辑，到可导入的工作流配置，一步到位。
scenarios:
  - 你已经有业务流程图，想快速落成 Dify 工作流
  - 需要把文字流程说明转成可执行的 Agent / Workflow DSL
  - 想减少手工搭建 Dify 节点时的重复配置成本
howToUse:
  - 提供流程图截图、Mermaid 图或文字流程说明
  - 明确输入输出、分支规则和是否需要外部服务
  - 先确认节点架构，再生成最终 YAML DSL
outputs:
  - 可导入 Dify 的 YAML DSL 文件
  - 节点架构说明与变量设计
  - 失败分支、重试策略与模型分配建议
triggerPhrases:
  - 帮我搭建工作流
  - 流程图转 Dify
  - 出 DSL
download:
  label: 下载 Skill
  href: /downloads/dify-workflow-builder.zip
---

这个 Skill 适合已经有流程认知、但不想从零手工搭建 Dify 工作流的人。它会先理解流程图或文字描述中的节点关系、变量流转和分支逻辑，再输出符合 Dify 规范的 DSL 文件。

它的价值在于，把“业务逻辑”转换成“可执行配置”。相比单纯画流程图，这一步更接近真正上线前的工程落地。

如果流程信息不完整，它也会优先暴露缺失点，而不是直接瞎生成，能有效减少后续反复修改的成本。
